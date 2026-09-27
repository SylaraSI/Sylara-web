const body = document.body;
const homeScene = document.querySelector(".home-scene");
const researchScene = document.querySelector(".research-scene");
const researchHeader = document.querySelector(".research-header");
const routeStatus = document.querySelector("[data-route-status]");
const subjectControlsContainer = document.querySelector(".subject-controls");
const subjectControls = [...document.querySelectorAll(".subject-control")];
const subjectOrbs = [...document.querySelectorAll(".subject-orb")];
const researchTablet = document.querySelector("[data-research-tablet]");
const tabletTitle = document.querySelector("[data-tablet-title]");
const tabletIndex = document.querySelector("[data-tablet-index]");
const tabletSummary = document.querySelector("[data-tablet-summary]");
const tabletSections = document.querySelector("[data-tablet-sections]");
const tabletScroll = document.querySelector("[data-tablet-scroll]");
const tabletPrevious = document.querySelector("[data-tablet-prev]");
const tabletNext = document.querySelector("[data-tablet-next]");
const tabletClose = document.querySelector("[data-tablet-close]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const starField = [
  [8, 20, 1, 8.5, -1.2], [22, 47, 1, 9.2, -3.2], [36, 80, 2, 8.1, -2.7],
  [51, 69, 1, 9.9, -4.8], [66, 58, 1, 8.6, -2.3], [81, 73, 1, 9.4, -3.6],
  [93, 58, 1, 9.2, -1.5], [18, 88, 1, 10.7, -6.8],
];

const subjectOrder = ["foundations", "memory-context", "reasoning-evidence", "adaptive-systems"];

/* Keep the future cross-page structure visible before its real links exist. */
function buildRelatedSkeleton() {
  return {
    title: "Related",
    groups: [
      {
        title: "Architecture",
        items: [],
        empty: "Curated architecture connections will appear here.",
      },
      {
        title: "Journal",
        items: [],
        empty: "Curated journal entries will appear here.",
      },
    ],
  };
}

/* PROTOTYPE TABLET COPY — content can be refined without changing the panel system. */
const researchSubjects = {
  foundations: {
    title: "Foundations",
    domain: "Core models",
    summary: "The primitives, boundaries, and definitions beneath every Sylara system.",
    sections: [
      {
        title: "Overview",
        body: "Foundations examines the assumptions that make complex systems understandable: what exists, what remains invariant, and where authority begins and ends.",
      },
      {
        title: "Enduring Questions",
        items: [
          "Which invariants must survive every implementation change?",
          "Where should ambiguity remain visible instead of being silently resolved?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Formal boundaries for long-lived reasoning work.",
          "Interfaces between human intent, machine action, and verifiable evidence.",
        ],
      },
      {
        title: "Resolved / Advanced",
        items: [
          "Expose assumptions before asserting conclusions.",
          "Keep architectural authority explicit and traceable.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "memory-context": {
    title: "Memory & Context",
    domain: "Continuity",
    summary: "How an intelligent system preserves meaning across time, tools, and changing conditions.",
    sections: [
      {
        title: "Overview",
        body: "Memory is treated as governed continuity rather than simple storage: a record of what matters, why it matters, and how confidently it may be reused.",
      },
      {
        title: "Enduring Questions",
        items: [
          "What deserves to persist, and who decides?",
          "How should context age, weaken, or be superseded without disappearing?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Layered memory across conversations, projects, and institutions.",
          "Context retrieval that preserves provenance and uncertainty.",
        ],
      },
      {
        title: "Resolved / Advanced",
        items: [
          "Separate durable knowledge from temporary working state.",
          "Preserve the origin and authority of remembered information.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "reasoning-evidence": {
    title: "Reasoning & Evidence",
    domain: "Assurance",
    summary: "Making conclusions inspectable by keeping claims connected to their supporting evidence.",
    sections: [
      {
        title: "Overview",
        body: "This subject explores reasoning that can explain its own limits: evidence is attributable, conclusions remain challengeable, and missing proof stays visible.",
      },
      {
        title: "Enduring Questions",
        items: [
          "What evidence is sufficient for a specific decision?",
          "How should a system distinguish uncertainty from failure?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Evidence chains that remain intact across tools and agents.",
          "Reasoning interfaces that reveal gaps without overwhelming the reader.",
        ],
      },
      {
        title: "Resolved / Advanced",
        items: [
          "Readiness, execution, and proof are distinct states.",
          "Unavailable evidence cannot be converted into a substantive verdict.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "adaptive-systems": {
    title: "Adaptive Systems",
    domain: "Evolution",
    summary: "Systems that can change with their environment without losing identity, control, or accountability.",
    sections: [
      {
        title: "Overview",
        body: "Adaptation is explored as bounded evolution: the system may learn and reorganize, while its commitments, permissions, and evidence remain governable.",
      },
      {
        title: "Enduring Questions",
        items: [
          "Which changes may happen autonomously, and which require renewed authority?",
          "How can adaptation remain reversible and observable?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Feedback loops that improve behavior without hiding drift.",
          "Graceful degradation and recovery under changing constraints.",
        ],
      },
      {
        title: "Resolved / Advanced",
        items: [
          "Adaptation must not silently broaden authority.",
          "State changes should preserve a clear path to inspection and rollback.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
};

let focusTimer;
let routeTimers = [];
let tabletTransitionTimer;
let researchHistoryFrame;
let isRestoringResearchHistory = false;
let activeSubject = null;
let tabletReturnFocus = null;

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

function renderTabletSubject(subject) {
  const subjectData = researchSubjects[subject];
  const subjectPosition = subjectOrder.indexOf(subject);

  if (!subjectData || subjectPosition < 0) return;

  tabletTitle.textContent = subjectData.title;
  tabletIndex.textContent = `${String(subjectPosition + 1).padStart(2, "0")} / ${String(subjectOrder.length).padStart(2, "0")} · ${subjectData.domain}`;
  tabletSummary.textContent = subjectData.summary;

  const renderedSections = subjectData.sections.map((sectionData) => {
    const section = document.createElement("section");
    const heading = document.createElement("h4");
    section.className = "tablet-section";
    heading.textContent = sectionData.title;
    section.appendChild(heading);

    if (sectionData.body) {
      const paragraph = document.createElement("p");
      paragraph.textContent = sectionData.body;
      section.appendChild(paragraph);
    }

    if (sectionData.items) {
      const list = document.createElement("ul");
      sectionData.items.forEach((itemText) => {
        const item = document.createElement("li");
        item.textContent = itemText;
        list.appendChild(item);
      });
      section.appendChild(list);
    }

    if (sectionData.groups) {
      const groups = document.createElement("div");
      groups.className = "tablet-related-groups";

      sectionData.groups.forEach((groupData) => {
        const group = document.createElement("section");
        const groupHeading = document.createElement("h5");
        group.className = "tablet-related-group";
        groupHeading.textContent = groupData.title;
        group.appendChild(groupHeading);

        if (groupData.items?.length) {
          const groupList = document.createElement("ul");
          groupList.className = "tablet-related-list";

          groupData.items.forEach((itemText) => {
            const item = document.createElement("li");
            item.textContent = itemText;
            groupList.appendChild(item);
          });

          group.appendChild(groupList);
        } else {
          const emptyRow = document.createElement("p");
          emptyRow.className = "tablet-related-empty";
          emptyRow.textContent = groupData.empty;
          group.appendChild(emptyRow);
        }

        groups.appendChild(group);
      });

      section.appendChild(groups);
    }

    return section;
  });

  tabletSections.replaceChildren(...renderedSections);
  tabletScroll.scrollTop = 0;
  window.requestAnimationFrame(updateTabletScrollCue);
}

/* Keep the bottom fade only while more of the tablet can be read below. */
function updateTabletScrollCue() {
  const remainingScroll = tabletScroll.scrollHeight - tabletScroll.clientHeight - tabletScroll.scrollTop;
  researchTablet.classList.toggle("has-scroll-cue", remainingScroll > 3);
}

function setSubjectControlsAvailability(isTabletOpen) {
  subjectControlsContainer.toggleAttribute("inert", isTabletOpen);
  researchHeader.toggleAttribute("inert", isTabletOpen);

  subjectControls.forEach((control) => {
    control.tabIndex = isTabletOpen ? -1 : 0;
  });
}

/*
  SUBJECT KEYBOARD MAP
  Desktop arrows follow the twin-rail geometry. The narrow mobile rail becomes
  a single list, so either arrow pair advances to the adjacent subject.
*/
function moveSubjectControlFocus(event, currentSubject) {
  const currentIndex = subjectOrder.indexOf(currentSubject);
  const isSingleColumn = window.matchMedia("(max-width: 760px)").matches;
  let nextSubject = null;

  if (event.key === "Home") nextSubject = subjectOrder[0];
  else if (event.key === "End") nextSubject = subjectOrder[subjectOrder.length - 1];
  else if (isSingleColumn && ["ArrowDown", "ArrowRight"].includes(event.key)) {
    nextSubject = subjectOrder[(currentIndex + 1) % subjectOrder.length];
  } else if (isSingleColumn && ["ArrowUp", "ArrowLeft"].includes(event.key)) {
    nextSubject = subjectOrder[(currentIndex - 1 + subjectOrder.length) % subjectOrder.length];
  } else {
    const desktopDirectionMap = {
      foundations: { ArrowDown: "memory-context", ArrowRight: "reasoning-evidence" },
      "memory-context": { ArrowUp: "foundations", ArrowRight: "adaptive-systems" },
      "reasoning-evidence": { ArrowDown: "adaptive-systems", ArrowLeft: "foundations" },
      "adaptive-systems": { ArrowUp: "reasoning-evidence", ArrowLeft: "memory-context" },
    };

    nextSubject = desktopDirectionMap[currentSubject]?.[event.key] || null;
  }

  if (!nextSubject) return;

  event.preventDefault();
  subjectControls.find((control) => control.dataset.subject === nextSubject)?.focus({ preventScroll: true });
}

/*
  RESEARCH HISTORY STATE
  Keep the selected subject and reading position on the current Research entry.
  Normal navigation can then leave the page and Browser Back can reconstruct it.
*/
function syncResearchHistoryState(overrides = {}) {
  if (isRestoringResearchHistory || body.dataset.view !== "research") return;

  const tabletOpen = researchScene.classList.contains("has-tablet");
  const researchState = {
    subject: tabletOpen ? activeSubject : null,
    tabletOpen,
    scrollTop: tabletOpen ? tabletScroll.scrollTop : 0,
    ...overrides,
  };

  history.replaceState(
    { ...history.state, view: "research", research: researchState },
    "",
    location.href,
  );
}

function scheduleResearchHistorySync() {
  window.cancelAnimationFrame(researchHistoryFrame);
  researchHistoryFrame = window.requestAnimationFrame(() => syncResearchHistoryState());
}

function restoreResearchHistoryState(researchState) {
  const canRestoreTablet = researchState?.tabletOpen && researchSubjects[researchState.subject];

  isRestoringResearchHistory = true;

  if (!canRestoreTablet) {
    closeResearchTablet({ restoreFocus: false, syncHistory: false });
    isRestoringResearchHistory = false;
    return;
  }

  openResearchTablet(researchState.subject, { focusTablet: false, syncHistory: false });

  /* Two frames let the rebuilt subject content establish its final scroll size. */
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      tabletScroll.scrollTop = Math.max(0, Number(researchState.scrollTop) || 0);
      updateTabletScrollCue();
      isRestoringResearchHistory = false;
    });
  });
}

function openResearchTablet(subject, { focusTablet = true, syncHistory = true } = {}) {
  if (!researchSubjects[subject]) return;

  tabletReturnFocus = subjectControls.find((control) => control.dataset.subject === subject) || null;
  activeSubject = subject;
  renderTabletSubject(subject);
  researchScene.classList.add("has-tablet");
  researchTablet.setAttribute("aria-hidden", "false");
  researchTablet.removeAttribute("inert");
  setSubjectControlsAvailability(true);
  setSubjectVisualState("active", subject);
  if (focusTablet) researchTablet.focus({ preventScroll: true });
  if (syncHistory) syncResearchHistoryState({ subject, tabletOpen: true, scrollTop: 0 });
}

function closeResearchTablet({ restoreFocus = true, syncHistory = true } = {}) {
  const focusTarget = tabletReturnFocus?.isConnected
    ? tabletReturnFocus
    : subjectControls.find((control) => control.dataset.subject === activeSubject);

  window.clearTimeout(tabletTransitionTimer);
  researchTablet.classList.remove(
    "is-leaving-next",
    "is-leaving-previous",
    "is-entering-next",
    "is-entering-previous",
  );
  researchScene.classList.remove("has-tablet");
  researchTablet.setAttribute("aria-hidden", "true");
  researchTablet.setAttribute("inert", "");
  setSubjectControlsAvailability(false);
  clearSubjectSelection();
  if (syncHistory) syncResearchHistoryState({ subject: null, tabletOpen: false, scrollTop: 0 });
  if (restoreFocus) focusTarget?.focus({ preventScroll: true });
  tabletReturnFocus = null;

  /* Clear focus-restoration state; a live pointer hover may still request Preview. */
  window.requestAnimationFrame(() => {
    if (!researchScene.classList.contains("has-tablet") && !activeSubject) setSubjectVisualState();
  });
}

function moveTabletSubject(direction) {
  const currentIndex = Math.max(0, subjectOrder.indexOf(activeSubject));
  const nextIndex = (currentIndex + direction + subjectOrder.length) % subjectOrder.length;
  const nextSubject = subjectOrder[nextIndex];

  window.clearTimeout(tabletTransitionTimer);
  tabletReturnFocus = subjectControls.find((control) => control.dataset.subject === nextSubject) || tabletReturnFocus;
  setSubjectVisualState("active", nextSubject);
  activeSubject = nextSubject;
  syncResearchHistoryState({ subject: nextSubject, tabletOpen: true, scrollTop: 0 });

  if (prefersReducedMotion.matches) {
    renderTabletSubject(nextSubject);
    return;
  }

  const directionName = direction > 0 ? "next" : "previous";
  researchTablet.classList.remove("is-entering-next", "is-entering-previous");
  researchTablet.classList.add(`is-leaving-${directionName}`);

  tabletTransitionTimer = window.setTimeout(() => {
    renderTabletSubject(nextSubject);
    researchTablet.classList.remove(`is-leaving-${directionName}`);
    researchTablet.classList.add(`is-entering-${directionName}`);

    tabletTransitionTimer = window.setTimeout(() => {
      researchTablet.classList.remove(`is-entering-${directionName}`);
    }, 240);
  }, 130);
}

function previewAdjacentSubject(direction) {
  if (!activeSubject) return;
  const currentIndex = Math.max(0, subjectOrder.indexOf(activeSubject));
  const previewIndex = (currentIndex + direction + subjectOrder.length) % subjectOrder.length;
  showSubjectPreview(subjectOrder[previewIndex]);
}

/* RESEARCH SUBJECT STATE — Neutral, temporary Preview, or locked Active. */
function setSubjectVisualState(state = "neutral", subject = null) {
  researchScene.dataset.subjectState = state;

  if (subject) researchScene.dataset.subject = subject;
  else delete researchScene.dataset.subject;

  subjectControls.forEach((control) => {
    const isMatch = control.dataset.subject === subject;
    const showControlActive = state === "active" && isMatch && !researchScene.classList.contains("has-tablet");
    control.classList.toggle("is-preview", state === "preview" && isMatch);
    control.classList.toggle("is-active", showControlActive);
    control.setAttribute("aria-pressed", String(state === "active" && isMatch));
    control.setAttribute("aria-expanded", String(state === "active" && isMatch && researchScene.classList.contains("has-tablet")));
  });

  subjectOrbs.forEach((orb) => {
    const isMatch = orb.dataset.subject === subject;
    orb.classList.toggle("is-preview", state === "preview" && isMatch);
    orb.classList.toggle("is-active", state === "active" && isMatch);
    orb.closest(".subject-plane")?.classList.toggle("is-active", state === "active" && isMatch);
  });
}

function showSubjectPreview(subject) {
  if (activeSubject === subject) setSubjectVisualState("active", subject);
  else setSubjectVisualState("preview", subject);
}

function restoreSubjectState() {
  if (activeSubject) setSubjectVisualState("active", activeSubject);
  else setSubjectVisualState();
}

function clearSubjectSelection() {
  activeSubject = null;
  setSubjectVisualState();
}

function setScene(nextView, { updateHistory = true, focusDelay = 760 } = {}) {
  const isResearch = nextView === "research";
  const wasResearch = body.dataset.view === "research";

  if (!isResearch && wasResearch && updateHistory) syncResearchHistoryState();

  body.dataset.view = isResearch ? "research" : "home";

  if (isResearch) {
    body.style.setProperty("--pointer-x", "0px");
    body.style.setProperty("--pointer-y", "0px");
  } else {
    closeResearchTablet({ restoreFocus: false, syncHistory: false });
  }

  homeScene.toggleAttribute("inert", isResearch);
  researchScene.toggleAttribute("inert", !isResearch);
  homeScene.setAttribute("aria-hidden", String(isResearch));
  researchScene.setAttribute("aria-hidden", String(!isResearch));

  if (updateHistory) {
    history.pushState(
      { view: nextView, research: isResearch ? { subject: null, tabletOpen: false, scrollTop: 0 } : null },
      "",
      isResearch ? "#research" : "#home",
    );
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

subjectControls.forEach((control) => {
  const subject = control.dataset.subject;

  control.addEventListener("pointerenter", () => showSubjectPreview(subject));
  control.addEventListener("pointerleave", () => {
    if (!control.matches(":focus-visible")) restoreSubjectState();
  });
  control.addEventListener("focus", () => showSubjectPreview(subject));
  control.addEventListener("blur", () => {
    if (!control.matches(":hover")) restoreSubjectState();
  });
  control.addEventListener("keydown", (event) => moveSubjectControlFocus(event, subject));
  control.addEventListener("click", () => {
    if (researchScene.classList.contains("has-tablet")) return;

    openResearchTablet(subject);
  });
});

[
  [tabletPrevious, -1],
  [tabletNext, 1],
].forEach(([control, direction]) => {
  control.addEventListener("pointerenter", () => previewAdjacentSubject(direction));
  control.addEventListener("pointerleave", restoreSubjectState);
  control.addEventListener("focus", () => previewAdjacentSubject(direction));
  control.addEventListener("blur", restoreSubjectState);
  control.addEventListener("click", () => moveTabletSubject(direction));
});

tabletClose.addEventListener("click", () => closeResearchTablet());

/* Keep keyboard navigation inside the open tablet; its arrows own subject changes. */
researchTablet.addEventListener("keydown", (event) => {
  if (!researchScene.classList.contains("has-tablet")) return;

  if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      moveTabletSubject(event.key === "ArrowRight" ? 1 : -1);
      return;
    }
  }

  if (event.key !== "Tab") return;

  const tabletFocusOrder = [tabletPrevious, tabletNext, tabletClose, tabletScroll];
  const currentIndex = tabletFocusOrder.indexOf(document.activeElement);

  if (event.shiftKey && currentIndex <= 0) {
    event.preventDefault();
    tabletFocusOrder[tabletFocusOrder.length - 1].focus({ preventScroll: true });
  } else if (!event.shiftKey && currentIndex === tabletFocusOrder.length - 1) {
    event.preventDefault();
    tabletFocusOrder[0].focus({ preventScroll: true });
  }
});

tabletScroll.addEventListener("scroll", () => {
  updateTabletScrollCue();
  scheduleResearchHistorySync();
}, { passive: true });
window.addEventListener("resize", updateTabletScrollCue);

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || body.dataset.view !== "research") return;

  if (researchScene.classList.contains("has-tablet")) {
    closeResearchTablet();
    return;
  }

  if (activeSubject) {
    clearSubjectSelection();
    return;
  }

  navigateTo("home");
});

window.addEventListener("popstate", (event) => {
  const nextView = event.state?.view || (location.hash === "#research" ? "research" : "home");
  navigateTo(nextView, { updateHistory: false });

  if (nextView === "research") restoreResearchHistoryState(event.state?.research);
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
setSubjectVisualState();
const initialView = location.hash === "#research" ? "research" : "home";
setScene(initialView, { updateHistory: false });

if (history.state?.view === initialView) {
  if (initialView === "research") restoreResearchHistoryState(history.state.research);
} else {
  history.replaceState(
    { view: initialView, research: initialView === "research" ? { subject: null, tabletOpen: false, scrollTop: 0 } : null },
    "",
    location.href,
  );
}
