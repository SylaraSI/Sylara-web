const body = document.body;
const homeScene = document.querySelector(".home-scene");
const researchScene = document.querySelector(".research-scene");
const routeStatus = document.querySelector("[data-route-status]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const starField = [
  [8, 20, 1, 8.5, -1.2], [22, 47, 1, 9.2, -3.2], [36, 80, 2, 8.1, -2.7],
  [51, 69, 1, 9.9, -4.8], [66, 58, 1, 8.6, -2.3], [81, 73, 1, 9.4, -3.6],
  [93, 58, 1, 9.2, -1.5], [18, 88, 1, 10.7, -6.8],
];

let focusTimer;
let routeTimers = [];

function buildAmbientStars() {
  const layer = document.querySelector("[data-stars]");
  const fragment = document.createDocumentFragment();

  starField.forEach(([left, top, size, duration, delay]) => {
    const star = document.createElement("i");
    star.style.setProperty("--left", `${left}%`);
    star.style.setProperty("--top", `${top}%`);
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--delay", `${delay}s`);
    fragment.appendChild(star);
  });

  layer.appendChild(fragment);
}

function clearRouteTransition() {
  routeTimers.forEach((timer) => window.clearTimeout(timer));
  routeTimers = [];
  body.classList.remove("is-spatial-transition", "is-direct-transition");
}

function setScene(nextView, { updateHistory = true, focusDelay = 760 } = {}) {
  const isResearch = nextView === "research";
  body.dataset.view = isResearch ? "research" : "home";

  if (isResearch) {
    body.style.setProperty("--pointer-x", "0px");
    body.style.setProperty("--pointer-y", "0px");
  }

  homeScene.toggleAttribute("inert", isResearch);
  researchScene.toggleAttribute("inert", !isResearch);
  homeScene.setAttribute("aria-hidden", String(isResearch));
  researchScene.setAttribute("aria-hidden", String(!isResearch));

  if (updateHistory) {
    history.pushState({ view: nextView }, "", isResearch ? "#research" : "#home");
  }

  window.clearTimeout(focusTimer);
  focusTimer = window.setTimeout(() => {
    const focusTarget = isResearch ? researchScene.querySelector("[data-route='home']") : homeScene.querySelector(".map-node--research");
    focusTarget?.focus({ preventScroll: true });
  }, prefersReducedMotion.matches ? 0 : focusDelay);
}

function navigateTo(nextView, { mode = "direct", updateHistory = true } = {}) {
  clearRouteTransition();

  const useSpatialTransition = mode === "spatial" && nextView === "research" && !prefersReducedMotion.matches;

  if (useSpatialTransition) {
    body.classList.add("is-spatial-transition");
    routeTimers.push(window.setTimeout(() => {
      setScene(nextView, { updateHistory, focusDelay: 760 });
    }, 440));
    routeTimers.push(window.setTimeout(clearRouteTransition, 1500));
    return;
  }

  if (!prefersReducedMotion.matches) body.classList.add("is-direct-transition");
  setScene(nextView, { updateHistory, focusDelay: prefersReducedMotion.matches ? 0 : 280 });
  routeTimers.push(window.setTimeout(clearRouteTransition, 420));
}

document.querySelectorAll("[data-route]").forEach((control) => {
  control.addEventListener("click", () => navigateTo(control.dataset.route, { mode: control.dataset.routeMode }));
});

document.querySelectorAll("[data-pending]").forEach((control) => {
  control.addEventListener("click", () => {
    routeStatus.textContent = `${control.dataset.pending} is mapped for the next prototype pass.`;
    routeStatus.classList.add("is-visible");
    window.clearTimeout(routeStatus.hideTimer);
    routeStatus.hideTimer = window.setTimeout(() => routeStatus.classList.remove("is-visible"), 2800);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.dataset.view === "research") navigateTo("home");
});

window.addEventListener("popstate", () => {
  navigateTo(location.hash === "#research" ? "research" : "home", { updateHistory: false });
});

if (!prefersReducedMotion.matches) {
  let frame;
  window.addEventListener("pointermove", (event) => {
    if (body.dataset.view !== "home") return;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * -10;
      const y = (event.clientY / window.innerHeight - 0.5) * -7;
      body.style.setProperty("--pointer-x", `${x}px`);
      body.style.setProperty("--pointer-y", `${y}px`);
      frame = null;
    });
  }, { passive: true });
}

buildAmbientStars();
setScene(location.hash === "#research" ? "research" : "home", { updateHistory: false });
