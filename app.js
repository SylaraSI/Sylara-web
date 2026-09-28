const body = document.body;
const homeScene = document.querySelector(".home-scene");
const architectureScene = document.querySelector(".architecture-scene");
const researchScene = document.querySelector(".research-scene");
const architectureHeader = document.querySelector(".architecture-header");
const researchHeader = document.querySelector(".research-header");
const skipLink = document.querySelector(".skip-link");
const routeStatuses = [...document.querySelectorAll("[data-route-status]")];
const architectureScroll = document.querySelector("[data-architecture-scroll]");
const architectureDomainScroll = document.querySelector("[data-architecture-domain-scroll]");
const architectureMap = document.querySelector("[data-architecture-map]");
const architectureDomains = [...document.querySelectorAll("[data-domain]")];
const architectureRelations = [...document.querySelectorAll("[data-relation]")];
const architectureStatus = document.querySelector("[data-architecture-status]");
const architectureScrollTarget = document.querySelector("[data-architecture-scroll-target]");
const architectureOverviewControl = document.querySelector("[data-architecture-overview]");
const architectureDomainTitle = document.querySelector("[data-domain-title]");
const architectureDomainKicker = document.querySelector("[data-domain-kicker]");
const architectureDomainSummary = document.querySelector("[data-domain-summary]");
const architectureDomainFigureTitle = document.querySelector("[data-domain-figure-title]");
const architectureDomainFigureIntro = document.querySelector("[data-domain-figure-intro]");
const architectureDomainFigureNodes = [...document.querySelectorAll("[data-domain-figure-node]")];
const architectureDomainComments = document.querySelector("[data-domain-comments]");
const architectureObservationSections = [...document.querySelectorAll("[data-observation-only]")];
const architectureObservationBoundaryIntro = document.querySelector("[data-observation-boundary-intro]");
const architectureObservationBoundaryStages = document.querySelector("[data-observation-boundary-stages]");
const architectureObservationBoundaryRule = document.querySelector("[data-observation-boundary-rule]");
const architectureEvidenceFigureTitle = document.querySelector("[data-evidence-figure-title]");
const architectureEvidenceFigureIntro = document.querySelector("[data-evidence-figure-intro]");
const architectureEvidenceComments = document.querySelector("[data-evidence-comments]");
const architectureAnimatedFigures = [...document.querySelectorAll("[data-architecture-animation]")];
const architectureDomainPressures = document.querySelector("[data-domain-pressures]");
const architectureDomainPressureTitle = document.querySelector("[data-domain-pressures-title]");
const architectureDomainRelatedResearch = document.querySelector("[data-domain-related-research]");
const architectureDomainFooter = document.querySelector("[data-domain-footer]");
const architectureIndexToggle = document.querySelector("[data-architecture-index-toggle]");
const architectureIndex = document.querySelector("[data-architecture-index]");
const architectureIndexPanel = architectureIndex.querySelector(".architecture-index-panel");
const architectureIndexList = document.querySelector("[data-architecture-index-list]");
const architectureIndexDismiss = document.querySelector("[data-architecture-index-dismiss]");
const architectureIndexClose = document.querySelector("[data-architecture-index-close]");
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

/*
  ARCHITECTURE DOMAIN SKELETON COPY
  These public-safe working descriptions can be replaced independently later;
  the shared domain-page shell does not need to be rebuilt when copy matures.
*/
const architectureDomainOrder = [
  "observation-provenance",
  "memory-continuity",
  "context-compilation",
  "reasoning-verification",
  "adaptive-systems",
];

const architectureDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "System view"],
  ["domain-design-pressures", "Design pressures"],
  ["domain-related", "Related material"],
];

/* Observation has a deeper first pass; the other domains keep the shared skeleton. */
const observationDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "Attributable evidence"],
  ["domain-observation-boundary", "Technical boundary"],
  ["domain-evidence-truth", "Evidence is not truth"],
  ["domain-design-pressures", "Why the boundary exists"],
  ["domain-related", "Related material"],
];

function getArchitectureDomainSections(domain = activeArchitectureDomain) {
  return domain === "observation-provenance" ? observationDomainSections : architectureDomainSections;
}

const architectureDomainContent = {
  "observation-provenance": {
    index: "01",
    title: "Observation & Provenance",
    summary: "Observation & Provenance defines the boundary where information enters Sylara. The architecture is designed to preserve the identity, source, time, and scope of an observation so later reasoning can trace evidence back to what was actually recorded.",
    figureTitle: "From observation to attributable evidence",
    figureIntro: "Information becomes usable evidence only when the event it informed and the context in which it was received remain attached. This public-safe flow shows that boundary without exposing Sylara's internal contracts.",
    nodes: {
      input: "Source or event",
      core: "Admitted observation",
      state: "Occurrence association",
      output: "Attributable evidence",
    },
    comments: [
      "Capture the observation as received",
      "Preserve source and temporal context",
      "Bind support to the occurrence it informed",
      "Keep resulting evidence recoverable",
    ],
    technical: {
      intro: "Sylara keeps the record of what arrived separate from the state the system can presently rely on and from the explanations it may later form. Each layer can evolve according to its own authority without silently changing the layers beneath it.",
      stages: [
        {
          label: "01 / Recorded",
          title: "Recorded observation",
          body: "What arrived, where it came from, when it was received, and the scope in which it was observed.",
        },
        {
          label: "02 / Governed",
          title: "Authoritative working state",
          body: "What the system may presently treat as operationally established, including explicit gaps, conflicts, and limits.",
        },
        {
          label: "03 / Revisable",
          title: "Beliefs and interpretations",
          body: "Models and explanations may be revised as evidence changes. They do not rewrite the observations beneath them.",
        },
      ],
      rule: "Current understanding can change without rewriting history.",
    },
    evidenceFigureTitle: "Evidence is not truth",
    evidenceFigureIntro: "Provenance makes a claim traceable; it does not make the source correct. Supporting, contradictory, unresolved, and unavailable evidence remain visible while working state and interpretations develop.",
    evidenceComments: [
      "Record evidence without declaring it true",
      "Preserve contradictory and unresolved evidence",
      "Revise working state without rewriting history",
      "Keep interpretations and derived views downstream",
    ],
    pressureHeading: "Why this boundary exists",
    pressures: [
      {
        title: "Capture before transformation",
        body: "When information is transformed or replaced before attribution is secured, later reconstruction becomes too fragile. Capture belongs at admission, not as a downstream repair.",
      },
      {
        title: "Scope identity to the occurrence",
        body: "A familiar condition can recur in different moments. Evidence must remain attached to the exact occurrence and context it informed, not merely to a matching label.",
      },
      {
        title: "Keep incompleteness explicit",
        body: "Unavailable, unresolved, and known-empty are different states. Preserving that difference prevents missing evidence from quietly becoming a negative conclusion.",
      },
      {
        title: "Separate capacity from meaning",
        body: "Operational pressure can limit whether work proceeds, but it must not alter what the evidence means. The system may refuse work without rewriting semantic truth.",
      },
    ],
    relatedResearch: "Questions of evidence quality, attribution, uncertainty, and the boundary between an observation and a conclusion continue in Research.",
  },
  "memory-continuity": {
    index: "02",
    title: "Memory & Continuity",
    summary: "The structures that preserve meaningful state across time while allowing knowledge to age, be challenged, and remain connected to its history.",
    figureTitle: "Continuity across changing state",
    figureIntro: "This figure will explain how durable knowledge, temporary working state, and recoverable history remain distinct while still supporting one continuous body of work.",
    nodes: { input: "Experience", core: "Memory fabric", state: "Historical state", output: "Continuity" },
    comments: ["Separate working and durable state", "Preserve historical lineage", "Allow revision without erasure", "Recover prior context"],
    pressures: [
      "Long-running work needs more than storage. The architecture must preserve why information mattered, when it was valid, and what later evidence changed its standing.",
      "The final explanation can introduce model-independent continuity and the Memory Fabric while keeping proprietary retention and retrieval mechanisms abstracted.",
    ],
    relatedResearch: "Connect this domain to research on memory, context aging, historical identity, and continuity across tools or models.",
  },
  "context-compilation": {
    index: "03",
    title: "Context Compilation",
    summary: "The process of assembling the smallest sufficient working context for a task without flattening provenance, uncertainty, or competing interpretations.",
    figureTitle: "Compiling task-relevant context",
    figureIntro: "This figure is prepared for a bounded context flow: selecting relevant material, retaining its relationships, and producing a usable working view.",
    nodes: { input: "Available memory", core: "Context compiler", state: "Task frame", output: "Working context" },
    comments: ["Start from the task boundary", "Select relevant material", "Preserve relationships", "Emit sufficient context"],
    pressures: [
      "More context is not automatically better context. Unbounded accumulation can obscure the evidence and decisions most relevant to the work being performed.",
      "The mature copy will describe minimum-sufficient context and provenance-aware compilation at a conceptual level, with deeper engineering lessons reserved for Journal.",
    ],
    relatedResearch: "Connect this domain to research on context selection, ambiguity preservation, and coherent work across extended investigations.",
  },
  "reasoning-verification": {
    index: "04",
    title: "Reasoning & Verification",
    summary: "The architecture that keeps claims connected to evidence, separates readiness from proof, and makes missing or conflicting support visible.",
    figureTitle: "From evidence to bounded conclusion",
    figureIntro: "This figure will carry the public reasoning loop from available evidence through challenge and verification to an inspectable outcome.",
    nodes: { input: "Evidence", core: "Reasoning", state: "Verification", output: "Bounded result" },
    comments: ["Form a supported claim", "Test against constraints", "Expose missing proof", "Preserve the verdict boundary"],
    pressures: [
      "A conclusion is useful only when its basis and limitations remain recoverable. The architecture therefore treats evidence, reasoning, execution, and proof as distinct states.",
      "The final pass can introduce SSIR and public-safe verification flows without revealing exact algorithms, thresholds, or internal execution contracts.",
    ],
    relatedResearch: "Connect this domain to research on evidence sufficiency, competing hypotheses, verification, and reasoning under uncertainty.",
  },
  "adaptive-systems": {
    index: "05",
    title: "Adaptive Systems",
    summary: "The bounded feedback structures that allow Sylara to learn and reorganize without silently broadening authority or losing accountability.",
    figureTitle: "Adaptation with preserved control",
    figureIntro: "This figure is ready for the public improvement loop: observe behavior, evaluate change, verify the proposal, and adopt or reject it explicitly.",
    nodes: { input: "Observed behavior", core: "Feedback loop", state: "Verified change", output: "Governed adaptation" },
    comments: ["Observe system behavior", "Propose a bounded change", "Verify before adoption", "Retain rollback and lineage"],
    pressures: [
      "Adaptation cannot be allowed to erase the conditions that made the system trustworthy. Change must remain observable, attributable, and reversible where the risk requires it.",
      "The mature domain can explain the Observe → Preserve → Compile → Reason → Test → Learn loop while keeping sensitive mechanisms behind the public boundary.",
    ],
    relatedResearch: "Connect this domain to research on feedback, bounded self-improvement, graceful recovery, and model-independent system identity.",
  },
};

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
let architectureHistoryFrame;
let isRestoringResearchHistory = false;
let activeSubject = null;
let tabletReturnFocus = null;
let activeArchitectureDomain = null;
let activeArchitectureSection = "domain-overview";
let expandedArchitectureIndexDomain = null;
let architectureIndexReturnFocus = null;
const architectureFigureTimers = new Map();
let architectureFigureObserver;

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
  delete body.dataset.transitionTarget;
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

/*
  ARCHITECTURE MAP STATE
  The landing graph never changes position. Hover/focus brightens only the
  selected module, its direct relationships, and their connected modules.
*/
function setArchitectureMapState(domain = null) {
  const connectedDomains = new Set();

  architectureRelations.forEach((relation) => {
    const isConnected = domain && [relation.dataset.from, relation.dataset.to].includes(domain);
    relation.classList.toggle("is-active", Boolean(isConnected));

    if (isConnected) {
      connectedDomains.add(relation.dataset.from);
      connectedDomains.add(relation.dataset.to);
    }
  });

  architectureDomains.forEach((control) => {
    control.classList.toggle("is-active", control.dataset.domain === domain);
    control.classList.toggle(
      "is-connected",
      connectedDomains.has(control.dataset.domain) && control.dataset.domain !== domain,
    );
  });
}

/*
  ARCHITECTURE FIGURE SEQUENCING
  Each diagram advances one conceptual stage at a time. Content stays fully
  readable while the traveling packet and matching comment marker move.
  Offscreen figures pause.
*/
function stopArchitectureFigureAnimation(figure) {
  const timers = architectureFigureTimers.get(figure);
  if (timers?.advance) window.clearTimeout(timers.advance);
  if (timers?.travel) window.clearTimeout(timers.travel);
  if (timers?.reveal) window.clearTimeout(timers.reveal);
  architectureFigureTimers.delete(figure);
  figure.classList.remove("is-in-view", "is-travelling", "is-resetting");
  delete figure.dataset.nextStage;
}

function startArchitectureFigureAnimation(figure) {
  if (prefersReducedMotion.matches || architectureFigureTimers.has(figure)) return;

  figure.classList.add("is-in-view");
  if (!/^\d$/.test(figure.dataset.stage || "")) figure.dataset.stage = "0";

  /*
    FIGURE TIMING — QUICK TUNING
    Figure 02 needs a longer settled beat so its purple comment marker remains
    synchronized and readable. Figure 01 keeps the quicker continuous rhythm.
  */
  const isEvidenceFigure = figure.dataset.architectureAnimation === "evidence-boundary";
  const arrivalHold = isEvidenceFigure ? 900 : 320;
  const destinationHold = isEvidenceFigure ? 2100 : 900;
  const timers = { advance: null, travel: null, reveal: null };

  const scheduleTravel = () => {
    timers.advance = window.setTimeout(() => {
      const currentStage = Number(figure.dataset.stage);
      const nextStage = (currentStage + 1) % 4;
      const isReset = nextStage === 0;

      figure.dataset.nextStage = String(nextStage);
      figure.classList.add(isReset ? "is-resetting" : "is-travelling");

      timers.travel = window.setTimeout(() => {
        figure.dataset.stage = String(nextStage);
        delete figure.dataset.nextStage;

        if (isReset) {
          /*
            Keep the packet hidden while it snaps from the destination back to
            the source. Revealing it on a later frame prevents a visible
            reverse trip and makes each cycle read as a new forward packet.
          */
          timers.reveal = window.setTimeout(() => {
            figure.classList.remove("is-resetting");
            scheduleTravel();
          }, 50);
          return;
        }

        figure.classList.remove("is-travelling");
        scheduleTravel();
      }, isReset ? 620 : 2400);
    }, Number(figure.dataset.stage) === 3 ? destinationHold : arrivalHold);
  };

  architectureFigureTimers.set(figure, timers);
  scheduleTravel();
}

function setupArchitectureFigureAnimations() {
  architectureAnimatedFigures.forEach((figure) => {
    figure.dataset.stage = prefersReducedMotion.matches ? "static" : "0";
  });

  architectureFigureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.24) {
        startArchitectureFigureAnimation(entry.target);
      } else {
        stopArchitectureFigureAnimation(entry.target);
      }
    });
  }, { root: architectureDomainScroll, threshold: [0, 0.24, 0.55] });

  architectureAnimatedFigures.forEach((figure) => architectureFigureObserver.observe(figure));
}

prefersReducedMotion.addEventListener("change", () => {
  architectureAnimatedFigures.forEach((figure) => {
    stopArchitectureFigureAnimation(figure);
    figure.dataset.stage = prefersReducedMotion.matches ? "static" : "0";
    architectureFigureObserver?.unobserve(figure);
    architectureFigureObserver?.observe(figure);
  });
});

function getArchitectureHashDomain() {
  const match = location.hash.match(/^#architecture\/([^/]+)$/);
  return match && architectureDomainContent[match[1]] ? match[1] : null;
}

function renderArchitectureDomain(domain) {
  const domainData = architectureDomainContent[domain];
  if (!domainData) return;

  activeArchitectureDomain = domain;
  activeArchitectureSection = "domain-overview";
  architectureDomainScroll.dataset.domain = domain;
  architectureDomainKicker.textContent = `Architecture domain / ${domainData.index}`;
  architectureDomainTitle.textContent = domainData.title;
  architectureDomainSummary.textContent = domainData.summary;
  architectureDomainFigureTitle.textContent = domainData.figureTitle;
  architectureDomainFigureIntro.textContent = domainData.figureIntro;
  architectureDomainRelatedResearch.textContent = domainData.relatedResearch;
  architectureDomainFooter.textContent = `Architecture / ${domainData.title}`;

  architectureDomainFigureNodes.forEach((node) => {
    node.textContent = domainData.nodes[node.dataset.domainFigureNode];
  });

  architectureDomainComments.replaceChildren(
    ...domainData.comments.map((comment) => {
      const item = document.createElement("li");
      item.textContent = comment;
      return item;
    }),
  );

  const isObservationDomain = domain === "observation-provenance";
  architectureObservationSections.forEach((section) => {
    section.hidden = !isObservationDomain;
  });

  if (isObservationDomain) {
    architectureObservationBoundaryIntro.textContent = domainData.technical.intro;
    architectureObservationBoundaryRule.textContent = domainData.technical.rule;
    architectureObservationBoundaryStages.replaceChildren(
      ...domainData.technical.stages.map((stage) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const heading = document.createElement("h4");
        const body = document.createElement("p");
        label.className = "observation-boundary-stage__label";
        label.textContent = stage.label;
        heading.textContent = stage.title;
        body.textContent = stage.body;
        article.append(label, heading, body);
        return article;
      }),
    );
    architectureEvidenceFigureTitle.textContent = domainData.evidenceFigureTitle;
    architectureEvidenceFigureIntro.textContent = domainData.evidenceFigureIntro;
    architectureEvidenceComments.replaceChildren(
      ...domainData.evidenceComments.map((comment) => {
        const item = document.createElement("li");
        item.textContent = comment;
        return item;
      }),
    );
  }

  architectureDomainPressureTitle.textContent = domainData.pressureHeading || "Why this part of the architecture exists";
  architectureDomainPressures.classList.toggle("architecture-domain-copy--turning-points", isObservationDomain);
  architectureDomainPressures.replaceChildren(
    ...domainData.pressures.map((pressure, index) => {
      if (typeof pressure === "string") {
        const paragraph = document.createElement("p");
        paragraph.textContent = pressure;
        return paragraph;
      }

      const article = document.createElement("article");
      const marker = document.createElement("p");
      const heading = document.createElement("h4");
      const body = document.createElement("p");
      marker.className = "architecture-turning-point__marker";
      marker.textContent = String(index + 1).padStart(2, "0");
      heading.textContent = pressure.title;
      body.textContent = pressure.body;
      article.append(marker, heading, body);
      return article;
    }),
  );

  architectureScene.dataset.architectureView = "domain";
  architectureScene.setAttribute("aria-labelledby", "architecture-domain-title");
  architectureScroll.setAttribute("aria-hidden", "true");
  architectureScroll.setAttribute("inert", "");
  architectureDomainScroll.setAttribute("aria-hidden", "false");
  architectureDomainScroll.removeAttribute("inert");
  renderArchitectureIndex();
}

function showArchitectureDomain(domain, {
  updateHistory = true,
  scrollTop = 0,
  focusPage = true,
  keepIndexOpen = false,
} = {}) {
  if (!architectureDomainContent[domain]) return;

  if (!keepIndexOpen) closeArchitectureIndexVisual({ restoreFocus: false });
  renderArchitectureDomain(domain);

  /* The index may remain over the newly selected domain so its hierarchy can expand in place. */
  if (keepIndexOpen) {
    architectureDomainScroll.setAttribute("inert", "");
    architectureHeader.setAttribute("inert", "");
  }

  window.requestAnimationFrame(() => {
    architectureDomainScroll.scrollTop = Math.max(0, Number(scrollTop) || 0);
    updateArchitectureWordmark();
    updateActiveArchitectureSection();
    if (keepIndexOpen) {
      architectureIndexList.querySelector(`[data-index-domain="${domain}"]`)?.focus({ preventScroll: true });
    } else if (focusPage) {
      architectureDomainScroll.focus({ preventScroll: true });
    }
  });

  if (updateHistory) {
    history.pushState(
      {
        view: "architecture",
        architecture: { page: "domain", domain, scrollTop: 0, indexOpen: keepIndexOpen },
      },
      "",
      `#architecture/${domain}`,
    );
  }

  skipLink.href = "#domain-overview";
  skipLink.textContent = `Skip to ${architectureDomainContent[domain].title}`;
}

/* INDEX DOMAIN SWITCH — expand the destination while the index stays visible. */
function showArchitectureDomainFromIndex(domain) {
  if (!architectureDomainContent[domain] || domain === activeArchitectureDomain) return;

  /* Leave the previous domain as a normal closed page in Back history. */
  history.replaceState(
    {
      ...history.state,
      view: "architecture",
      architecture: {
        page: "domain",
        domain: activeArchitectureDomain,
        scrollTop: architectureDomainScroll.scrollTop,
        indexOpen: false,
      },
    },
    "",
    location.href,
  );

  expandedArchitectureIndexDomain = domain;
  showArchitectureDomain(domain, {
    updateHistory: true,
    scrollTop: 0,
    focusPage: false,
    keepIndexOpen: true,
  });
}

function showArchitectureLanding({ updateHistory = true, scrollTop = 0, focusMap = true } = {}) {
  closeArchitectureIndexVisual({ restoreFocus: false });
  activeArchitectureDomain = null;
  activeArchitectureSection = "domain-overview";
  architectureScene.dataset.architectureView = "landing";
  architectureScene.setAttribute("aria-labelledby", "architecture-title");
  architectureScroll.setAttribute("aria-hidden", "false");
  architectureScroll.removeAttribute("inert");
  architectureDomainScroll.setAttribute("aria-hidden", "true");
  architectureDomainScroll.setAttribute("inert", "");
  architectureScroll.scrollTop = Math.max(0, Number(scrollTop) || 0);
  updateArchitectureWordmark();

  if (updateHistory) {
    history.pushState(
      { view: "architecture", architecture: { page: "landing", scrollTop, indexOpen: false } },
      "",
      "#architecture",
    );
  }

  skipLink.href = "#architecture-domain-map";
  skipLink.textContent = "Skip to the Architecture map";
  if (focusMap) architectureDomains[0]?.focus({ preventScroll: true });
}

function renderArchitectureIndex() {
  if (!activeArchitectureDomain) return;

  const fragment = document.createDocumentFragment();

  architectureDomainOrder.forEach((domain) => {
    const domainData = architectureDomainContent[domain];
    const row = document.createElement("button");
    const isCurrent = domain === activeArchitectureDomain;
    const isExpanded = domain === expandedArchitectureIndexDomain;
    row.type = "button";
    row.className = "architecture-index-domain-row";
    row.textContent = `${domainData.index} / ${domainData.title}`;
    row.dataset.indexDomain = domain;
    row.setAttribute("aria-expanded", String(isExpanded));
    if (isCurrent) row.setAttribute("aria-current", "page");
    fragment.appendChild(row);

    if (isExpanded) {
      const sectionList = document.createElement("div");
      sectionList.className = "architecture-index-sections";

      getArchitectureDomainSections(domain).forEach(([sectionId, sectionLabel]) => {
        const sectionRow = document.createElement("button");
        sectionRow.type = "button";
        sectionRow.className = "architecture-index-section-row";
        sectionRow.classList.toggle("is-active", sectionId === activeArchitectureSection);
        sectionRow.textContent = sectionLabel;
        sectionRow.dataset.indexSection = sectionId;
        sectionList.appendChild(sectionRow);
      });

      fragment.appendChild(sectionList);
    }
  });

  architectureIndexList.replaceChildren(fragment);
}

function updateArchitectureIndexActiveSection() {
  architectureIndexList.querySelectorAll("[data-index-section]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.indexSection === activeArchitectureSection);
  });
}

function updateActiveArchitectureSection() {
  if (!activeArchitectureDomain) return;

  const threshold = architectureDomainScroll.getBoundingClientRect().top + window.innerHeight * 0.36;
  const domainSections = getArchitectureDomainSections();
  let nextSection = domainSections[0][0];

  domainSections.forEach(([sectionId]) => {
    const section = document.getElementById(sectionId);
    if (section && section.getBoundingClientRect().top <= threshold) nextSection = sectionId;
  });

  if (nextSection !== activeArchitectureSection) {
    activeArchitectureSection = nextSection;
    updateArchitectureIndexActiveSection();
  }
}

function openArchitectureIndex({ updateHistory = true, focusPanel = true } = {}) {
  if (!activeArchitectureDomain || architectureScene.classList.contains("has-architecture-index")) return;

  architectureIndexReturnFocus = architectureIndexToggle;
  expandedArchitectureIndexDomain = activeArchitectureDomain;
  renderArchitectureIndex();
  architectureScene.classList.add("has-architecture-index");
  architectureIndex.setAttribute("aria-hidden", "false");
  architectureIndex.removeAttribute("inert");
  architectureIndexToggle.setAttribute("aria-expanded", "true");
  architectureDomainScroll.setAttribute("inert", "");
  architectureHeader.setAttribute("inert", "");
  if (focusPanel) architectureIndexPanel.focus({ preventScroll: true });

  if (updateHistory) {
    history.replaceState(
      {
        ...history.state,
        architecture: { ...history.state?.architecture, indexOpen: true },
      },
      "",
      location.href,
    );
  }
}

function closeArchitectureIndexVisual({ restoreFocus = true } = {}) {
  if (!architectureScene.classList.contains("has-architecture-index")) return;

  architectureScene.classList.remove("has-architecture-index");
  architectureIndex.setAttribute("aria-hidden", "true");
  architectureIndex.setAttribute("inert", "");
  architectureIndexToggle.setAttribute("aria-expanded", "false");
  architectureHeader.removeAttribute("inert");
  if (activeArchitectureDomain) architectureDomainScroll.removeAttribute("inert");
  if (restoreFocus) architectureIndexReturnFocus?.focus({ preventScroll: true });
  architectureIndexReturnFocus = null;
}

function closeArchitectureIndex({ restoreFocus = true, updateHistory = true } = {}) {
  if (!architectureScene.classList.contains("has-architecture-index")) return;

  if (updateHistory) {
    history.replaceState(
      {
        ...history.state,
        architecture: {
          ...history.state?.architecture,
          scrollTop: architectureDomainScroll.scrollTop,
          indexOpen: false,
        },
      },
      "",
      location.href,
    );
  }

  closeArchitectureIndexVisual({ restoreFocus });
}

function syncArchitectureHistoryState() {
  if (body.dataset.view !== "architecture") return;

  const isDomain = Boolean(activeArchitectureDomain);
  const activeScroll = isDomain ? architectureDomainScroll : architectureScroll;

  history.replaceState(
    {
      ...history.state,
      view: "architecture",
      architecture: {
        page: isDomain ? "domain" : "landing",
        domain: isDomain ? activeArchitectureDomain : null,
        scrollTop: activeScroll.scrollTop,
        indexOpen: architectureScene.classList.contains("has-architecture-index"),
      },
    },
    "",
    location.href,
  );
}

function scheduleArchitectureHistorySync() {
  window.cancelAnimationFrame(architectureHistoryFrame);
  architectureHistoryFrame = window.requestAnimationFrame(() => {
    updateActiveArchitectureSection();
    syncArchitectureHistoryState();
  });
}

function restoreArchitectureHistoryState(architectureState) {
  const domain = architectureState?.domain || getArchitectureHashDomain();

  if (architectureState?.page === "domain" || domain) {
    showArchitectureDomain(domain, {
      updateHistory: false,
      scrollTop: architectureState?.scrollTop,
      focusPage: false,
    });

    if (architectureState?.indexOpen) {
      window.requestAnimationFrame(() => openArchitectureIndex({ updateHistory: false, focusPanel: false }));
    }
    return;
  }

  showArchitectureLanding({
    updateHistory: false,
    scrollTop: architectureState?.scrollTop,
    focusMap: false,
  });
}

function setScene(nextView, { updateHistory = true, focusDelay = 760 } = {}) {
  const validViews = ["home", "architecture", "research"];
  const resolvedView = validViews.includes(nextView) ? nextView : "home";
  const isHome = resolvedView === "home";
  const isArchitecture = resolvedView === "architecture";
  const isResearch = resolvedView === "research";
  const wasResearch = body.dataset.view === "research";
  const wasArchitecture = body.dataset.view === "architecture";

  if (!isResearch && wasResearch && updateHistory) syncResearchHistoryState();
  if (!isArchitecture && wasArchitecture && updateHistory) syncArchitectureHistoryState();

  if (!isArchitecture) closeArchitectureIndexVisual({ restoreFocus: false });
  if (isArchitecture && !wasArchitecture && updateHistory) {
    showArchitectureLanding({ updateHistory: false, scrollTop: 0, focusMap: false });
  }

  body.dataset.view = resolvedView;

  if (!isHome) {
    body.style.setProperty("--pointer-x", "0px");
    body.style.setProperty("--pointer-y", "0px");
  }

  if (!isResearch) {
    closeResearchTablet({ restoreFocus: false, syncHistory: false });
  }

  homeScene.toggleAttribute("inert", !isHome);
  architectureScene.toggleAttribute("inert", !isArchitecture);
  researchScene.toggleAttribute("inert", !isResearch);
  homeScene.setAttribute("aria-hidden", String(!isHome));
  architectureScene.setAttribute("aria-hidden", String(!isArchitecture));
  researchScene.setAttribute("aria-hidden", String(!isResearch));

  const skipLinkTargets = {
    home: ["#home-map", "Skip to the Sylara map"],
    architecture: activeArchitectureDomain
      ? ["#domain-overview", `Skip to ${architectureDomainContent[activeArchitectureDomain].title}`]
      : ["#architecture-domain-map", "Skip to the Architecture map"],
    research: ["#research-title", "Skip to Research"],
  };
  [skipLink.href, skipLink.textContent] = skipLinkTargets[resolvedView];

  if (updateHistory) {
    history.pushState(
      {
        view: resolvedView,
        architecture: isArchitecture ? { page: "landing", domain: null, scrollTop: 0, indexOpen: false } : null,
        research: isResearch ? { subject: null, tabletOpen: false, scrollTop: 0 } : null,
      },
      "",
      `#${resolvedView}`,
    );
  }

  window.clearTimeout(focusTimer);
  focusTimer = window.setTimeout(() => {
    const focusTargets = {
      home: homeScene.querySelector(".map-node--architecture"),
      architecture: architectureScene.querySelector("[data-route='home']"),
      research: researchScene.querySelector("[data-route='home']"),
    };
    const focusTarget = focusTargets[resolvedView];
    focusTarget?.focus({ preventScroll: true });
  }, prefersReducedMotion.matches ? 0 : focusDelay);
}

function navigateTo(nextView, { mode = "direct", updateHistory = true } = {}) {
  clearRouteTransition();

  const useSpatialTransition = mode === "spatial" && ["architecture", "research"].includes(nextView) && !prefersReducedMotion.matches;

  if (useSpatialTransition) {
    body.classList.add("is-spatial-transition");
    body.dataset.transitionTarget = nextView;
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
  control.addEventListener("click", () => {
    if (control.dataset.route === body.dataset.view) {
      if (control.dataset.route === "architecture" && activeArchitectureDomain) {
        showArchitectureLanding({ updateHistory: true, scrollTop: 0 });
      }
      return;
    }
    navigateTo(control.dataset.route, { mode: control.dataset.routeMode });
  });
});

document.querySelectorAll("[data-pending]").forEach((control) => {
  control.addEventListener("click", () => {
    const routeStatus = control.closest(".scene")?.querySelector("[data-route-status]") || routeStatuses[0];
    routeStatus.textContent = `${control.dataset.pending} is mapped for the next prototype pass.`;
    routeStatus.classList.add("is-visible");
    window.clearTimeout(routeStatus.hideTimer);
    routeStatus.hideTimer = window.setTimeout(() => routeStatus.classList.remove("is-visible"), 2800);
  });
});

architectureDomains.forEach((control) => {
  const domain = control.dataset.domain;

  control.addEventListener("pointerenter", () => setArchitectureMapState(domain));
  control.addEventListener("pointerleave", () => {
    if (!control.matches(":focus-visible")) setArchitectureMapState();
  });
  control.addEventListener("focus", () => setArchitectureMapState(domain));
  control.addEventListener("blur", () => {
    if (!control.matches(":hover")) setArchitectureMapState();
  });
  control.addEventListener("click", () => {
    showArchitectureDomain(domain);
  });
});

/* Scroll inside the Architecture surface without replacing the page route hash. */
architectureScrollTarget.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#architecture-biography")?.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start",
  });
});

architectureOverviewControl.addEventListener("click", () => {
  showArchitectureLanding({ updateHistory: true, scrollTop: 0 });
});

architectureIndexToggle.addEventListener("click", () => openArchitectureIndex());
architectureIndexDismiss.addEventListener("click", () => closeArchitectureIndex());
architectureIndexClose.addEventListener("click", () => closeArchitectureIndex());

architectureIndexList.addEventListener("click", (event) => {
  const domainControl = event.target.closest("[data-index-domain]");
  const sectionControl = event.target.closest("[data-index-section]");

  if (domainControl) {
    const nextDomain = domainControl.dataset.indexDomain;
    if (nextDomain === activeArchitectureDomain) {
      expandedArchitectureIndexDomain = expandedArchitectureIndexDomain === nextDomain ? null : nextDomain;
      renderArchitectureIndex();
      window.requestAnimationFrame(() => {
        architectureIndexList.querySelector(`[data-index-domain="${nextDomain}"]`)?.focus({ preventScroll: true });
      });
    } else {
      showArchitectureDomainFromIndex(nextDomain);
    }
    return;
  }

  if (sectionControl) {
    const sectionId = sectionControl.dataset.indexSection;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
    activeArchitectureSection = sectionId;
    updateArchitectureIndexActiveSection();
    syncArchitectureHistoryState();
  }
});

architectureIndex.addEventListener("keydown", (event) => {
  if (!architectureScene.classList.contains("has-architecture-index")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeArchitectureIndex();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [
    architectureIndexClose,
    ...architectureIndexList.querySelectorAll("button"),
  ];
  const currentIndex = focusable.indexOf(document.activeElement);

  if (event.shiftKey && currentIndex <= 0) {
    event.preventDefault();
    focusable[focusable.length - 1]?.focus();
  } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
    event.preventDefault();
    focusable[0]?.focus();
  }
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

function updateArchitectureWordmark() {
  const activeScroll = architectureScene.dataset.architectureView === "domain"
    ? architectureDomainScroll
    : architectureScroll;
  architectureScene.classList.toggle("is-wordmark-scrolled", activeScroll.scrollTop > 48);
}

architectureScroll.addEventListener("scroll", () => {
  updateArchitectureWordmark();
  scheduleArchitectureHistorySync();
}, { passive: true });
architectureDomainScroll.addEventListener("scroll", () => {
  updateArchitectureWordmark();
  scheduleArchitectureHistorySync();
}, { passive: true });
window.addEventListener("resize", updateTabletScrollCue);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.dataset.view === "architecture" && architectureScene.classList.contains("has-architecture-index")) {
    closeArchitectureIndex();
    return;
  }

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
  const hashView = location.hash.slice(1);
  const nextView = event.state?.view
    || (hashView.startsWith("architecture") ? "architecture" : hashView === "research" ? "research" : "home");
  navigateTo(nextView, { updateHistory: false });

  if (nextView === "research") restoreResearchHistoryState(event.state?.research);
  if (nextView === "architecture") restoreArchitectureHistoryState(event.state?.architecture);
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
setArchitectureMapState();
const initialHashView = location.hash.slice(1);
const initialView = initialHashView.startsWith("architecture")
  ? "architecture"
  : initialHashView === "research" ? "research" : "home";
setScene(initialView, { updateHistory: false });

if (history.state?.view === initialView) {
  if (initialView === "research") restoreResearchHistoryState(history.state.research);
  if (initialView === "architecture") restoreArchitectureHistoryState(history.state.architecture);
} else {
  const initialArchitectureDomain = initialView === "architecture" ? getArchitectureHashDomain() : null;
  const initialArchitectureState = initialArchitectureDomain
    ? { page: "domain", domain: initialArchitectureDomain, scrollTop: 0, indexOpen: false }
    : { page: "landing", domain: null, scrollTop: 0, indexOpen: false };

  history.replaceState(
    {
      view: initialView,
      architecture: initialView === "architecture" ? initialArchitectureState : null,
      research: initialView === "research" ? { subject: null, tabletOpen: false, scrollTop: 0 } : null,
    },
    "",
    location.href,
  );

  if (initialView === "architecture") restoreArchitectureHistoryState(initialArchitectureState);
}

setupArchitectureFigureAnimations();
