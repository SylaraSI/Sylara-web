const body = document.body;
const homeScene = document.querySelector(".home-scene");
const architectureScene = document.querySelector(".architecture-scene");
const researchScene = document.querySelector(".research-scene");
const journalScene = document.querySelector(".journal-scene");
const aboutScene = document.querySelector(".about-scene");
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
const architecturePrimaryFigure = document.querySelector("[data-domain-primary-animation]");
const architectureObservationSections = [...document.querySelectorAll("[data-observation-only]")];
const architectureObservationBoundaryIntro = document.querySelector("[data-observation-boundary-intro]");
const architectureObservationBoundaryStages = document.querySelector("[data-observation-boundary-stages]");
const architectureObservationBoundaryRule = document.querySelector("[data-observation-boundary-rule]");
const architectureEvidenceFigureTitle = document.querySelector("[data-evidence-figure-title]");
const architectureEvidenceFigureIntro = document.querySelector("[data-evidence-figure-intro]");
const architectureEvidenceComments = document.querySelector("[data-evidence-comments]");
const architectureMemorySections = [...document.querySelectorAll("[data-memory-only]")];
const architectureMemoryLayerIntro = document.querySelector("[data-memory-layer-intro]");
const architectureMemoryLayers = document.querySelector("[data-memory-layers]");
const architectureMemoryLayerRule = document.querySelector("[data-memory-layer-rule]");
const architectureMemoryViews = document.querySelector("[data-memory-views]");
const architectureMemoryMaturity = document.querySelector("[data-memory-maturity]");
const architectureMemoryRevisionTitle = document.querySelector("[data-memory-revision-title]");
const architectureMemoryRevisionIntro = document.querySelector("[data-memory-revision-intro]");
const architectureMemoryRevisionComments = document.querySelector("[data-memory-revision-comments]");
const architectureContextSections = [...document.querySelectorAll("[data-context-only]")];
const architectureContextPreservationIntro = document.querySelector("[data-context-preservation-intro]");
const architectureContextPreservationItems = document.querySelector("[data-context-preservation]");
const architectureContextPreservationRule = document.querySelector("[data-context-preservation-rule]");
const architectureContextMaturity = document.querySelector("[data-context-maturity]");
const architectureContextExpansionTitle = document.querySelector("[data-context-expansion-title]");
const architectureContextExpansionIntro = document.querySelector("[data-context-expansion-intro]");
const architectureContextExpansionComments = document.querySelector("[data-context-expansion-comments]");
const architectureReasoningSections = [...document.querySelectorAll("[data-reasoning-only]")];
const architectureReasoningOutcomesIntro = document.querySelector("[data-reasoning-outcomes-intro]");
const architectureReasoningOutcomes = document.querySelector("[data-reasoning-outcomes]");
const architectureReasoningOutcomeRule = document.querySelector("[data-reasoning-outcome-rule]");
const architectureReasoningMaturity = document.querySelector("[data-reasoning-maturity]");
const architectureReasoningBoundaryTitle = document.querySelector("[data-reasoning-boundary-title]");
const architectureReasoningBoundaryIntro = document.querySelector("[data-reasoning-boundary-intro]");
const architectureReasoningBoundaryComments = document.querySelector("[data-reasoning-boundary-comments]");
const architectureAdaptiveSections = [...document.querySelectorAll("[data-adaptive-only]")];
const architectureAdaptiveDecisionsIntro = document.querySelector("[data-adaptive-decisions-intro]");
const architectureAdaptiveDecisions = document.querySelector("[data-adaptive-decisions]");
const architectureAdaptiveDecisionRule = document.querySelector("[data-adaptive-decision-rule]");
const architectureAdaptiveMaturity = document.querySelector("[data-adaptive-maturity]");
const architectureAdaptiveLineageTitle = document.querySelector("[data-adaptive-lineage-title]");
const architectureAdaptiveLineageIntro = document.querySelector("[data-adaptive-lineage-intro]");
const architectureAdaptiveLineageComments = document.querySelector("[data-adaptive-lineage-comments]");
const architectureAnimatedFigures = [...document.querySelectorAll("[data-architecture-animation]")];
const architecturePlaybackControls = [...document.querySelectorAll("[data-architecture-playback]")];
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
const journalScroll = document.querySelector("[data-journal-scroll]");
const journalIndexLink = document.querySelector("[data-journal-index-link]");
const journalEntryGrid = document.querySelector("[data-journal-entries]");
const journalResults = document.querySelector("[data-journal-results]");
const journalCategoryControls = [...document.querySelectorAll("[data-journal-category]")];
const journalTopicControls = [...document.querySelectorAll("[data-journal-topic]")];
const journalReader = document.querySelector("[data-journal-reader]");
const journalReaderPanel = journalReader.querySelector(".journal-reader__panel");
const journalReaderDismiss = document.querySelector("[data-journal-reader-dismiss]");
const journalReaderClose = document.querySelector("[data-journal-reader-close]");
const journalReaderScroll = document.querySelector("[data-journal-reader-scroll]");
const journalReaderPath = document.querySelector("[data-journal-reader-path]");
const journalReaderMeta = document.querySelector("[data-journal-reader-meta]");
const journalReaderTitle = document.querySelector("[data-journal-reader-title]");
const journalReaderDeck = document.querySelector("[data-journal-reader-deck]");
const journalReaderToc = document.querySelector("[data-journal-reader-toc]");
const journalReaderBody = document.querySelector("[data-journal-reader-body]");
const aboutScroll = document.querySelector("[data-about-scroll]");
const aboutScrollTarget = document.querySelector("[data-about-scroll-target]");
const aboutSteps = [...document.querySelectorAll("[data-about-step]")];
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

/* Memory has two bounded figures plus a static explanation of its layers. */
const memoryDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "Continuity beyond the reasoner"],
  ["domain-memory-layers", "Memory layers"],
  ["domain-memory-revision", "Revision without erasure"],
  ["domain-design-pressures", "Why continuity is difficult"],
  ["domain-related", "Related material"],
];

/* Context adds a preservation boundary and a five-level expansion sequence. */
const contextDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "Compile for the task"],
  ["domain-context-preservation", "What must survive"],
  ["domain-context-expansion", "Progressive expansion"],
  ["domain-design-pressures", "Why selection is difficult"],
  ["domain-related", "Related material"],
];

/* Reasoning keeps result states visible and separates proof from authority. */
const reasoningDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "From evidence to result"],
  ["domain-reasoning-outcomes", "Outcomes without forced certainty"],
  ["domain-reasoning-boundary", "Do not collapse the layers"],
  ["domain-design-pressures", "Why verification is difficult"],
  ["domain-related", "Related material"],
];

/* Adaptive Systems closes the public loop without collapsing learning into authority. */
const adaptiveDomainSections = [
  ["domain-overview", "Overview"],
  ["domain-system-view", "Learning without uncontrolled change"],
  ["domain-adaptive-decisions", "Explicit change outcomes"],
  ["domain-adaptive-lineage", "Lineage and recovery"],
  ["domain-design-pressures", "Why adaptation is difficult"],
  ["domain-related", "Related material"],
];

function getArchitectureDomainSections(domain = activeArchitectureDomain) {
  if (domain === "observation-provenance") return observationDomainSections;
  if (domain === "memory-continuity") return memoryDomainSections;
  if (domain === "context-compilation") return contextDomainSections;
  if (domain === "reasoning-verification") return reasoningDomainSections;
  if (domain === "adaptive-systems") return adaptiveDomainSections;
  return architectureDomainSections;
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
    summary: "Memory & Continuity is the architecture that allows Sylara to persist beyond any individual model invocation. It separates temporary reasoning state from durable experience, preserves how knowledge changes over time, and keeps evidence, uncertainty, and superseded interpretations connected rather than flattening them into a single store.",
    figureTitle: "Continuity beyond the reasoner",
    figureIntro: "Models can enter, reason over bounded state, and leave. Sylara's continuity remains in a governed memory substrate that records experience, preserves lineage, and supports later work without making the model itself the owner of long-term state.",
    nodes: {
      input: "Ephemeral reasoner",
      core: "Recorded experience",
      state: "Memory fabric",
      output: "Continuing Sylara",
    },
    comments: [
      "A reasoner serves the current task",
      "Experience is recorded with lineage",
      "Durable state outlives the session",
      "Continuity remains model-independent",
    ],
    layers: {
      intro: "Memory is separated by responsibility, not merely by how long information is retained. Each layer answers a different question while remaining connected to the same recoverable history.",
      items: [
        {
          label: "01 / Active",
          title: "Working memory",
          body: "Short-lived task state: what is being considered now. It can be tightly bounded and released when the work ends.",
        },
        {
          label: "02 / Recorded",
          title: "Session memory",
          body: "A faithful account of what occurred during a session. It preserves history without deciding what that history means.",
        },
        {
          label: "03 / Durable",
          title: "Episodic memory",
          body: "Cross-session experiences—investigations, experiments, failures, recoveries, and the conditions surrounding them.",
        },
        {
          label: "04 / Interpreted",
          title: "Epistemic memory",
          body: "Claims, models, contradictions, uncertainty, and the evidence posture behind Sylara's current understanding.",
        },
      ],
      views: ["Domain views", "Capability memory", "Self-model"],
      rule: "Different responsibilities. One continuous, recoverable history.",
      maturity: [
        {
          label: "Present foundation",
          body: "Identity, time, provenance, session history, and explicit authority establish what can be remembered responsibly.",
        },
        {
          label: "Architecture direction",
          body: "A shared Memory Fabric connects durable experience, epistemic state, lineage, and governed views across domains.",
        },
        {
          label: "Research frontier",
          body: "Promotion, consolidation, reconsolidation, and sufficiency remain active questions rather than hidden claims of completion.",
        },
      ],
    },
    revisionFigureTitle: "Revision without erasure",
    revisionFigureIntro: "Long-term memory cannot mean that the first interpretation is preserved forever. New evidence may revise the current model while historical evidence and the model it challenged remain recoverable.",
    revisionComments: [
      "Historical evidence remains recoverable",
      "New evidence may challenge the model",
      "Current understanding changes explicitly",
      "Superseded models retain lineage",
    ],
    pressureHeading: "Why continuity is difficult",
    pressures: [
      {
        title: "Continuity cannot live in the model",
        body: "A reasoning model may serve one task and disappear. If it owns the history, identity, or working state, continuity disappears with it.",
      },
      {
        title: "Recording is not understanding",
        body: "A faithful session history says what occurred; it does not independently decide what is authoritative, believed, rejected, or unresolved.",
      },
      {
        title: "Consolidation is not deletion",
        body: "Many experiences may support one durable model, but reducing redundancy must not erase the evidence, contradictions, or lineage beneath it.",
      },
      {
        title: "Connection must preserve identity",
        body: "Related patterns may cross domains, but similarly named people, systems, or events must not collapse into the same identity merely because they resemble one another.",
      },
    ],
    relatedResearch: "Research continues the unresolved questions: how memory should consolidate, how knowledge should age, and how continuity can remain coherent across changing tools and models.",
  },
  "context-compilation": {
    index: "03",
    title: "Context Compilation",
    summary: "Context Compilation prepares a bounded, traceable working view for a particular task. The aim is not to give a reasoner everything Sylara knows, but to assemble the smallest context that remains sufficient while preserving the evidence, uncertainty, and relationships that could change the answer.",
    figureTitle: "From task boundary to reasoning package",
    figureIntro: "A task defines what the reasoner needs to accomplish. Candidate state is selected from governed memory, compiled with its required dependencies and opposing evidence, then emitted as an evidence-sufficient package—or marked insufficient when more detail is required.",
    nodes: {
      input: "Reasoning task",
      core: "Candidate context",
      state: "Context compiler",
      output: "Reasoning package",
    },
    comments: [
      "Define task, domain, scope, and authority",
      "Select relevant state and dependencies",
      "Preserve uncertainty, opposition, and source",
      "Emit a sufficient package—or say insufficient",
    ],
    preservation: {
      intro: "Compilation may reduce what a reasoner sees, but it must not flatten the distinctions that make the selected material trustworthy. These dimensions travel with the package or remain available through exact expansion.",
      items: [
        {
          label: "01 / Source",
          title: "Provenance",
          body: "Where the information came from and which evidence records can be recovered when the compact view is not enough.",
        },
        {
          label: "02 / Control",
          title: "Authority",
          body: "What the selected material may establish, advise, challenge, or leave unresolved inside the current task.",
        },
        {
          label: "03 / Time",
          title: "Temporal state",
          body: "What is current, historical, superseded, or valid only within a particular interval or occurrence.",
        },
        {
          label: "04 / Challenge",
          title: "Opposing evidence",
          body: "Contradictory and disconfirming material remains visible instead of disappearing behind a convenient summary.",
        },
        {
          label: "05 / Limits",
          title: "Uncertainty",
          body: "Known gaps, unresolved questions, and incomplete analysis stay explicit so absence is not mistaken for a negative result.",
        },
        {
          label: "06 / Recovery",
          title: "Exact expansion",
          body: "Compact representations retain a path back to canonical excerpts, observations, code, measurements, or full source artifacts.",
        },
      ],
      rule: "Minimum sufficient context—not minimum tokens.",
      maturity: [
        {
          label: "Present foundation",
          body: "Identity, time, provenance, authority, and explicit evidence state provide the boundaries that future compilation depends on.",
        },
        {
          label: "Architecture direction",
          body: "Task-specific packages preserve required relationships while preventing the reasoner from excavating the entire historical record.",
        },
        {
          label: "Research frontier",
          body: "Automatic sufficiency detection, expansion policy, dependency invalidation, and measurable efficiency gains remain open research.",
        },
      ],
    },
    expansionFigureTitle: "Progressive expansion",
    expansionFigureIntro: "The compiler can begin with a stable compact reference and reveal more exact material only when the task, model, or verifier cannot establish sufficiency at the current level. Expansion adds evidence; it does not rewrite the layers already traversed.",
    expansionComments: [
      "Begin with a stable reference",
      "Reveal the structured claim and its status",
      "Assemble a task-specific reasoning brief",
      "Expand to exact supporting material",
      "Load the complete source only when required",
    ],
    pressureHeading: "Why selection is difficult",
    pressures: [
      {
        title: "Volume is not sufficiency",
        body: "Giving a reasoner more material can obscure the evidence and decisions that matter. Context must be bounded by the task rather than accumulated without limit.",
      },
      {
        title: "Filtering can create false confidence",
        body: "A compact package is defective when omitted information would change the correct result. Efficiency cannot excuse an incomplete reasoning boundary.",
      },
      {
        title: "Incomplete is not absent",
        body: "A search or analysis still in progress must remain visible as incomplete. It cannot silently appear to the reasoner as evidence that nothing relevant exists.",
      },
      {
        title: "Compiled context can expire",
        body: "When source state, authority, or dependencies change, affected packages must be invalidated or rebuilt without discarding unaffected context.",
      },
    ],
    relatedResearch: "Research continues the unresolved questions: how sufficiency can be detected, how progressive expansion should be governed, and whether prepared context can reduce compute without changing the correct conclusion.",
  },
  "reasoning-verification": {
    index: "04",
    title: "Reasoning & Verification",
    summary: "Reasoning & Verification turns a compiled evidence package into a bounded, inspectable conclusion. Claims remain connected to their support, counterevidence stays visible, and a successful check establishes only what its scope and authority allow.",
    figureTitle: "From evidence to bounded conclusion",
    figureIntro: "A reasoning package supplies attributable support, opposition, and known limits. Sylara can then form a candidate claim, challenge it against the required boundary, and emit a result that says both what is established and what remains unresolved.",
    nodes: {
      input: "Evidence package",
      core: "Candidate claim",
      state: "Challenge & test",
      output: "Bounded result",
    },
    comments: [
      "Begin with attributable support, limits, and opposition",
      "State exactly what the evidence appears to support",
      "Test constraints, counterevidence, and required proof",
      "Report what is established—and what remains unresolved",
    ],
    outcomes: {
      intro: "Verification does not have to manufacture a binary answer. A trustworthy result preserves the evidence state it actually reached, including conflict and incompleteness.",
      items: [
        {
          label: "01 / Established",
          title: "Supported within scope",
          body: "The available evidence satisfies the stated obligation inside the boundary that was actually examined.",
        },
        {
          label: "02 / Not established",
          title: "Unsupported",
          body: "The required support was examined and was not established. The result remains tied to that evidence and scope.",
        },
        {
          label: "03 / Opposed",
          title: "Conflicting",
          body: "Material evidence points in opposing directions, so the conflict remains visible instead of being averaged away.",
        },
        {
          label: "04 / Open",
          title: "Incomplete",
          body: "Required evidence, execution, or authority is unavailable, so no substantive verdict is justified yet.",
        },
      ],
      rule: "Unresolved is a valid result—not an invitation to invent certainty.",
      maturity: [
        {
          label: "Present foundation",
          body: "Attributable evidence, explicit test boundaries, human-readable verdicts, and the separation of review from authority already shape the system.",
        },
        {
          label: "Architecture direction",
          body: "Structured reasoning artifacts keep claims, opposition, execution results, and bounded conclusions reconstructable across the pipeline.",
        },
        {
          label: "Research frontier",
          body: "Evidence sufficiency, uncertainty calibration, competing hypotheses, and probabilistic verification remain active research questions.",
        },
      ],
    },
    boundaryFigureTitle: "Do not collapse the layers",
    boundaryFigureIntro: "A claim, its evidence, a successful execution, the proof that execution supplies, and the authority to adopt a result are related—but they are not interchangeable. Each boundary limits what the next stage may honestly say.",
    boundaryComments: [
      "Define the exact statement under examination",
      "Recover the support, opposition, and known gaps",
      "Record what was actually run or observed",
      "Bound the result to the obligation it satisfies",
      "Keep adoption and action under explicit authority",
    ],
    pressureHeading: "Why verification is difficult",
    pressures: [
      {
        title: "Green is not closure",
        body: "A passing check establishes only the behavior and boundary that were actually tested. It does not silently prove every surrounding obligation.",
      },
      {
        title: "Missing evidence is a state",
        body: "Incomplete or unavailable proof must remain visible instead of being converted into success, failure, or evidence of absence.",
      },
      {
        title: "Conflict must survive synthesis",
        body: "A useful conclusion cannot hide material opposition merely because preserving it makes the answer less convenient.",
      },
      {
        title: "Review does not grant authority",
        body: "Verification can support a decision, but it does not silently become permission to adopt, persist, mutate, or act.",
      },
    ],
    relatedResearch: "Research continues the unresolved questions: how evidence sufficiency should be measured, how competing hypotheses should evolve, and how probabilistic reasoning can remain useful without overstating certainty or determinism.",
  },
  "adaptive-systems": {
    index: "05",
    title: "Adaptive Systems",
    summary: "Adaptive Systems closes Sylara's public intelligence loop without turning learning into unrestricted mutation. Observed behavior can inform a bounded proposal, but change remains versioned, testable, explicitly authorized, and recoverable.",
    figureTitle: "Learning without uncontrolled change",
    figureIntro: "The intelligence loop observes what happened, preserves the evidence, compiles the relevant boundary, reasons about a proposal, tests it, and learns from the result. Learning closes the loop; it does not bypass the adoption gate.",
    nodes: {
      input: "Observed behavior",
      core: "Bounded proposal",
      state: "Evaluation gate",
      output: "Versioned outcome",
    },
    comments: [
      "Observe behavior, outcomes, and operating conditions",
      "Preserve the evidence and the boundary it came from",
      "Compile only what the proposed change requires",
      "Form a bounded improvement claim",
      "Test against the baseline and required constraints",
      "Learn from adoption, rejection, and unresolved results",
    ],
    decisions: {
      intro: "Evaluation can end honestly in more than one state. Adoption is only one possible result, and every result remains attached to the proposal, evidence, baseline, and authority that produced it.",
      items: [
        {
          label: "01 / Authorized",
          title: "Adopted",
          body: "The candidate satisfied its stated evaluation boundary and received explicit authority to become a new version.",
        },
        {
          label: "02 / Declined",
          title: "Rejected",
          body: "The proposal failed a requirement, introduced unacceptable regression, or did not justify replacing the baseline.",
        },
        {
          label: "03 / Open",
          title: "Deferred",
          body: "Evidence, evaluation, resources, or decision authority remain incomplete, so the active system does not change.",
        },
        {
          label: "04 / Recovered",
          title: "Rolled back",
          body: "A version is withdrawn and a known-good state is restored while the failed revision and its evidence remain traceable.",
        },
      ],
      rule: "A system can learn from a proposal without adopting it.",
      maturity: [
        {
          label: "Present foundation",
          body: "Evidence, test scope, authority, auditability, and recovery are treated as separate responsibilities rather than one automatic decision.",
        },
        {
          label: "Architecture direction",
          body: "Those foundations converge into versioned change proposals evaluated in isolation, with explicit adoption and recovery paths.",
        },
        {
          label: "Research frontier",
          body: "Long-horizon adaptation must remain useful across changing tasks, environments, and models without identity drift or quiet policy erosion.",
        },
      ],
    },
    lineageFigureTitle: "Every change carries lineage",
    lineageFigureIntro: "A candidate remains separate from the known-good baseline while it is evaluated. Adoption creates a new attributable version; rejection, deferral, or rollback preserves the decision record without rewriting the history that led there.",
    lineageComments: [
      "Keep the known-good baseline active and recoverable",
      "Record the candidate as a separate revision",
      "Evaluate in isolation against explicit measures",
      "Adopt, reject, or defer through a visible gate",
      "Preserve the version, decision record, and recovery path",
    ],
    pressureHeading: "Why adaptation is difficult",
    pressures: [
      {
        title: "A proposal is not authority",
        body: "A system may generate, inspect, or evaluate a change without gaining permission to adopt it, persist it, or expand its own capabilities.",
      },
      {
        title: "Improvement is multidimensional",
        body: "A gain in one measure cannot silently excuse regression in accuracy, traceability, resource use, recovery, or policy boundaries.",
      },
      {
        title: "Failure must remain recoverable",
        body: "A rejected, interrupted, or harmful transition should leave the active system consistent and able to return to a known-good state.",
      },
      {
        title: "Lineage must survive change",
        body: "Each revision must retain what changed, why it was considered, what evidence was used, and which authority accepted or declined it.",
      },
    ],
    relatedResearch: "Research continues the unresolved questions: how improvement should be measured across competing objectives, how feedback remains safe over long horizons, and how identity and control survive revision across changing models and environments.",
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

/*
  JOURNAL CONTENT MODEL
  Keep writing here and presentation below. Entries can be added, revised, or
  marked readable without rebuilding the archive interface.
*/
const journalEntries = [
  {
    slug: "continuity-beyond-the-model",
    status: "Working note",
    readable: true,
    category: "engineering",
    topics: ["memory", "architecture"],
    date: "September 2026",
    readTime: "6 min read",
    title: "Continuity cannot live in the model",
    deck: "Why persistent intelligence needs a governed memory substrate beyond any individual reasoning session.",
    sections: [
      {
        id: "the-pressure",
        title: "The pressure",
        paragraphs: [
          "A reasoning model can be extraordinarily capable and still be temporary. It enters a bounded task, works with the context available to it, and eventually leaves. If the model also owns the history, identity, or working state of the system, continuity disappears with that session.",
          "That tension changed the architectural question. The problem was no longer how to make a single session remember more. It became how to let many bounded reasoning sessions participate in one recoverable history without quietly turning temporary context into permanent truth.",
        ],
      },
      {
        id: "separate-responsibilities",
        title: "Separate the responsibilities",
        paragraphs: [
          "Working memory, session records, durable experience, and current interpretations do different jobs. Treating them as one undifferentiated store makes it difficult to know what happened, what the system presently relies on, and what remains open to revision.",
          "Sylara's direction is to separate those responsibilities while preserving their lineage. A reasoner may use the current state, but it does not become the sole owner of that state or the history beneath it.",
        ],
      },
      {
        id: "revision-without-erasure",
        title: "Revision without erasure",
        paragraphs: [
          "Continuity is not the preservation of a single answer forever. New evidence may challenge a prior model, uncertainty may become better defined, and a working conclusion may be superseded. The important property is that revision remains explicit and the earlier evidence remains recoverable.",
          "This turns memory into a governed process rather than a pile of context. The system can change its understanding without pretending its history never happened.",
        ],
      },
      {
        id: "what-remains-open",
        title: "What remains open",
        paragraphs: [
          "The architecture establishes the boundary, not the final answer. Promotion, consolidation, forgetting, reconsolidation, and sufficiency remain active research questions. They belong in the open record precisely because the system is still being built.",
        ],
      },
    ],
  },
  {
    slug: "evidence-before-conclusion",
    status: "Forthcoming",
    readable: false,
    category: "research",
    topics: ["evidence", "architecture"],
    date: "Research queue",
    readTime: "Planned deep dive",
    title: "Evidence before conclusion",
    deck: "A closer look at why unavailable, unresolved, and known-empty evidence must remain distinct states.",
  },
  {
    slug: "learning-without-silent-authority",
    status: "Forthcoming",
    readable: false,
    category: "research",
    topics: ["adaptation", "evidence"],
    date: "Research queue",
    readTime: "Planned deep dive",
    title: "Learning without silent authority",
    deck: "How a system can propose and evaluate change without quietly granting itself permission to adopt it.",
  },
  {
    slug: "track-one-before-the-map",
    status: "Forthcoming",
    readable: false,
    category: "field-notes",
    topics: ["history", "architecture"],
    date: "Historical review",
    readTime: "Track 1 retrospective",
    title: "Track 1: before the architecture had a map",
    deck: "Returning to the earliest work to trace the obstacles, experiments, and discoveries that gave the architecture its shape.",
  },
  {
    slug: "the-first-continuity-break",
    status: "Forthcoming",
    readable: false,
    category: "field-notes",
    topics: ["history", "memory"],
    date: "Historical review",
    readTime: "Field record",
    title: "The first continuity break",
    deck: "A future field note about the moment a practical failure exposed a deeper architectural requirement.",
  },
  {
    slug: "public-map-private-machinery",
    status: "Forthcoming",
    readable: false,
    category: "engineering",
    topics: ["architecture", "evidence"],
    date: "Editorial queue",
    readTime: "Engineering note",
    title: "A public map for private machinery",
    deck: "Writing technically honest architecture material without exposing the implementation details that should remain internal.",
  },
];

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
let activeJournalCategory = "all";
let activeJournalTopic = "all";
let activeJournalArticle = null;
let journalReaderReturnFocus = null;
const architectureFigureTimers = new Map();
const manuallyPausedArchitectureFigures = new WeakSet();
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

/* ABOUT REVEALS — content never moves position; chapters only resolve into clarity. */
function setupAboutReveals() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion.matches) {
    aboutSteps.forEach((step) => step.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { root: aboutScroll, threshold: 0.22, rootMargin: "0px 0px -8%" });

  aboutSteps.forEach((step) => observer.observe(step));
}

function clearRouteTransition() {
  routeTimers.forEach((timer) => window.clearTimeout(timer));
  routeTimers = [];
  body.classList.remove("is-spatial-transition", "is-direct-transition");
  delete body.dataset.transitionTarget;
}

function formatJournalLabel(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getJournalHashState() {
  const rawHash = location.hash.slice(1);
  const articlePrefix = "journal/article/";

  if (rawHash.startsWith(articlePrefix)) {
    return {
      category: "all",
      topic: "all",
      article: decodeURIComponent(rawHash.slice(articlePrefix.length).split("?")[0]),
    };
  }

  const [, query = ""] = rawHash.split("?");
  const params = new URLSearchParams(query);
  const requestedCategory = params.get("category") || "all";
  const requestedTopic = params.get("topic") || "all";
  const validCategories = new Set(["all", ...journalEntries.map((entry) => entry.category)]);
  const validTopics = new Set(["all", ...journalEntries.flatMap((entry) => entry.topics)]);

  return {
    category: validCategories.has(requestedCategory) ? requestedCategory : "all",
    topic: validTopics.has(requestedTopic) ? requestedTopic : "all",
    article: null,
  };
}

function getJournalArchiveHash() {
  const params = new URLSearchParams();
  if (activeJournalCategory !== "all") params.set("category", activeJournalCategory);
  if (activeJournalTopic !== "all") params.set("topic", activeJournalTopic);
  const query = params.toString();
  return query ? `#journal?${query}` : "#journal";
}

function writeJournalHistory({ replace = false, article = activeJournalArticle } = {}) {
  const state = {
    view: "journal",
    journal: {
      category: activeJournalCategory,
      topic: activeJournalTopic,
      article,
      scrollTop: journalScroll.scrollTop,
    },
  };
  const hash = article ? `#journal/article/${encodeURIComponent(article)}` : getJournalArchiveHash();
  history[replace ? "replaceState" : "pushState"](state, "", hash);
}

function updateJournalFilterControls() {
  journalCategoryControls.forEach((control) => {
    control.setAttribute("aria-pressed", String(control.dataset.journalCategory === activeJournalCategory));
  });
  journalTopicControls.forEach((control) => {
    control.setAttribute("aria-pressed", String(control.dataset.journalTopic === activeJournalTopic));
  });
}

function renderJournalEntries() {
  const visibleEntries = journalEntries.filter((entry) => {
    const categoryMatches = activeJournalCategory === "all" || entry.category === activeJournalCategory;
    const topicMatches = activeJournalTopic === "all" || entry.topics.includes(activeJournalTopic);
    return categoryMatches && topicMatches;
  });
  const fragment = document.createDocumentFragment();

  visibleEntries.forEach((entry, index) => {
    const card = document.createElement("article");
    const meta = document.createElement("div");
    const category = document.createElement("span");
    const date = document.createElement("span");
    const title = document.createElement("h4");
    const deck = document.createElement("p");
    const topics = document.createElement("ul");
    const footer = document.createElement("footer");
    const status = document.createElement("span");

    card.className = `journal-entry${entry.readable ? " is-readable" : " is-forthcoming"}`;
    card.style.setProperty("--entry-order", index);
    meta.className = "journal-entry__meta";
    category.textContent = formatJournalLabel(entry.category);
    date.textContent = entry.date;
    meta.append(category, date);
    title.textContent = entry.title;
    deck.textContent = entry.deck;
    topics.className = "journal-entry__topics";
    entry.topics.forEach((topic) => {
      const item = document.createElement("li");
      item.textContent = topic;
      topics.appendChild(item);
    });
    footer.className = "journal-entry__footer";
    status.textContent = `${entry.status} / ${entry.readTime}`;
    footer.appendChild(status);

    if (entry.readable) {
      const open = document.createElement("button");
      open.type = "button";
      open.dataset.journalOpen = entry.slug;
      open.innerHTML = "Read entry <i aria-hidden=\"true\">→</i>";
      footer.appendChild(open);
    } else {
      const marker = document.createElement("span");
      marker.className = "journal-entry__forthcoming";
      marker.textContent = "In the archive queue";
      footer.appendChild(marker);
    }

    card.append(meta, title, deck, topics, footer);
    fragment.appendChild(card);
  });

  journalEntryGrid.replaceChildren(fragment);
  journalResults.textContent = `${String(visibleEntries.length).padStart(2, "0")} of ${String(journalEntries.length).padStart(2, "0")} entries shown`;
  updateJournalFilterControls();
}

function renderJournalArticle(entry) {
  journalReaderPath.textContent = formatJournalLabel(entry.category);
  journalReaderTitle.textContent = entry.title;
  journalReaderDeck.textContent = entry.deck;
  journalReaderMeta.replaceChildren();

  [formatJournalLabel(entry.category), entry.date, entry.readTime].forEach((label) => {
    const item = document.createElement("span");
    item.textContent = label;
    journalReaderMeta.appendChild(item);
  });

  const tocFragment = document.createDocumentFragment();
  const bodyFragment = document.createDocumentFragment();

  entry.sections.forEach((sectionData, index) => {
    const sectionId = `journal-${entry.slug}-${sectionData.id}`;
    const tocItem = document.createElement("li");
    const tocControl = document.createElement("button");
    const section = document.createElement("section");
    const marker = document.createElement("p");
    const heading = document.createElement("h3");

    tocControl.type = "button";
    tocControl.dataset.journalSection = sectionId;
    tocControl.textContent = sectionData.title;
    tocItem.appendChild(tocControl);
    tocFragment.appendChild(tocItem);

    section.id = sectionId;
    marker.className = "journal-reader__section-marker";
    marker.textContent = String(index + 1).padStart(2, "0");
    heading.textContent = sectionData.title;
    section.append(marker, heading);
    sectionData.paragraphs.forEach((textContent) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = textContent;
      section.appendChild(paragraph);
    });
    bodyFragment.appendChild(section);
  });

  journalReaderToc.replaceChildren(tocFragment);
  journalReaderBody.replaceChildren(bodyFragment);
}

function openJournalArticle(slug, { updateHistory = true, focusReader = true } = {}) {
  const entry = journalEntries.find((candidate) => candidate.slug === slug && candidate.readable);
  if (!entry) return;

  journalReaderReturnFocus = document.activeElement;
  activeJournalArticle = entry.slug;
  renderJournalArticle(entry);
  journalReaderScroll.scrollTop = 0;
  journalScene.classList.add("has-reader");
  journalReader.setAttribute("aria-hidden", "false");
  journalReader.removeAttribute("inert");
  if (updateHistory) writeJournalHistory({ article: entry.slug });
  if (focusReader) journalReaderPanel.focus({ preventScroll: true });
}

function closeJournalReader({ updateHistory = true, restoreFocus = true } = {}) {
  if (!journalScene.classList.contains("has-reader") && !activeJournalArticle) return;
  journalScene.classList.remove("has-reader");
  journalReader.setAttribute("aria-hidden", "true");
  journalReader.setAttribute("inert", "");
  activeJournalArticle = null;
  if (updateHistory) writeJournalHistory({ article: null });
  if (restoreFocus && journalReaderReturnFocus instanceof HTMLElement) {
    journalReaderReturnFocus.focus({ preventScroll: true });
  }
}

function restoreJournalHistoryState(journalState) {
  const hashState = getJournalHashState();
  activeJournalCategory = journalState?.category || hashState.category;
  activeJournalTopic = journalState?.topic || hashState.topic;
  renderJournalEntries();
  journalScroll.scrollTop = Math.max(0, Number(journalState?.scrollTop) || 0);

  const article = journalState?.article || hashState.article;
  if (article) openJournalArticle(article, { updateHistory: false, focusReader: false });
  else closeJournalReader({ updateHistory: false, restoreFocus: false });
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

function updateArchitecturePlaybackControl(figure) {
  const control = figure.querySelector("[data-architecture-playback]");
  if (!control) return;

  const isPaused = manuallyPausedArchitectureFigures.has(figure);
  control.setAttribute("aria-pressed", String(isPaused));
  control.setAttribute("aria-label", isPaused ? "Play animation" : "Pause animation");
  control.dataset.tooltip = isPaused ? "Play animation" : "Pause animation";
  control.classList.toggle("is-paused", isPaused);
}

function startArchitectureFigureAnimation(figure) {
  if (
    prefersReducedMotion.matches
    || manuallyPausedArchitectureFigures.has(figure)
    || architectureFigureTimers.has(figure)
  ) return;

  figure.classList.add("is-in-view");
  if (!/^\d$/.test(figure.dataset.stage || "")) figure.dataset.stage = "0";

  /*
    FIGURE TIMING — QUICK TUNING
    Figure 02 needs a longer settled beat so its purple comment marker remains
    synchronized and readable. Figure 01 keeps the quicker continuous rhythm.
  */
  const figureTiming = {
    "observation-flow": { arrivalHold: 320, destinationHold: 900 },
    "evidence-boundary": { arrivalHold: 900, destinationHold: 2100 },
    "memory-continuity": { arrivalHold: 620, destinationHold: 1450 },
    "memory-revision": { arrivalHold: 780, destinationHold: 1750 },
    "context-compilation": { arrivalHold: 620, destinationHold: 1500 },
    "context-expansion": { arrivalHold: 720, destinationHold: 1800 },
    "reasoning-flow": { arrivalHold: 680, destinationHold: 1650 },
    "reasoning-boundary": { arrivalHold: 760, destinationHold: 1900 },
    "adaptive-loop": { arrivalHold: 680, destinationHold: 1500 },
    "adaptive-lineage": { arrivalHold: 760, destinationHold: 1900 },
  }[figure.dataset.architectureAnimation] || { arrivalHold: 600, destinationHold: 1200 };
  const { arrivalHold, destinationHold } = figureTiming;
  const stageCount = Math.max(2, Number(figure.dataset.stageCount) || 4);
  const timers = { advance: null, travel: null, reveal: null };

  const scheduleTravel = () => {
    timers.advance = window.setTimeout(() => {
      const currentStage = Number(figure.dataset.stage);
      const nextStage = (currentStage + 1) % stageCount;
      /* The adaptive loop visibly closes; linear diagrams reset while hidden. */
      const isReset = nextStage === 0 && figure.dataset.architectureAnimation !== "adaptive-loop";

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
    }, Number(figure.dataset.stage) === stageCount - 1 ? destinationHold : arrivalHold);
  };

  architectureFigureTimers.set(figure, timers);
  scheduleTravel();
}

function resetArchitectureFigureAnimations() {
  architectureAnimatedFigures.forEach((figure) => {
    stopArchitectureFigureAnimation(figure);
    manuallyPausedArchitectureFigures.delete(figure);
    figure.classList.remove("is-manually-paused");
    figure.dataset.stage = prefersReducedMotion.matches ? "static" : "0";
    updateArchitecturePlaybackControl(figure);

    if (architectureFigureObserver) {
      architectureFigureObserver.unobserve(figure);
      architectureFigureObserver.observe(figure);
    }
  });
}

function setupArchitectureFigureAnimations() {
  architectureAnimatedFigures.forEach((figure) => {
    figure.dataset.stage = prefersReducedMotion.matches ? "static" : "0";
  });

  architectureFigureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.dataset.inViewport = String(entry.isIntersecting && entry.intersectionRatio >= 0.24);
      if (entry.isIntersecting && entry.intersectionRatio >= 0.24) {
        startArchitectureFigureAnimation(entry.target);
      } else {
        stopArchitectureFigureAnimation(entry.target);
      }
    });
  }, { root: architectureDomainScroll, threshold: [0, 0.24, 0.55] });

  architectureAnimatedFigures.forEach((figure) => architectureFigureObserver.observe(figure));

  architecturePlaybackControls.forEach((control) => {
    const figure = control.closest("[data-architecture-animation]");
    if (!figure) return;
    updateArchitecturePlaybackControl(figure);

    control.addEventListener("click", () => {
      const shouldPause = !manuallyPausedArchitectureFigures.has(figure);

      if (shouldPause) {
        manuallyPausedArchitectureFigures.add(figure);
        figure.classList.add("is-manually-paused");
        stopArchitectureFigureAnimation(figure);
      } else {
        manuallyPausedArchitectureFigures.delete(figure);
        figure.classList.remove("is-manually-paused");
        if (figure.dataset.inViewport === "true") startArchitectureFigureAnimation(figure);
      }

      updateArchitecturePlaybackControl(figure);
    });
  });
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
  architecturePrimaryFigure.dataset.architectureAnimation = domain === "observation-provenance"
    ? "observation-flow"
    : domain === "memory-continuity"
      ? "memory-continuity"
      : domain === "context-compilation"
        ? "context-compilation"
        : domain === "reasoning-verification"
          ? "reasoning-flow"
          : domain === "adaptive-systems" ? "adaptive-loop" : "generic-flow";
  architecturePrimaryFigure.dataset.stageCount = domain === "adaptive-systems" ? "6" : "4";
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
  const isMemoryDomain = domain === "memory-continuity";
  const isContextDomain = domain === "context-compilation";
  const isReasoningDomain = domain === "reasoning-verification";
  const isAdaptiveDomain = domain === "adaptive-systems";
  architectureObservationSections.forEach((section) => {
    section.hidden = !isObservationDomain;
  });
  architectureMemorySections.forEach((section) => {
    section.hidden = !isMemoryDomain;
  });
  architectureContextSections.forEach((section) => {
    section.hidden = !isContextDomain;
  });
  architectureReasoningSections.forEach((section) => {
    section.hidden = !isReasoningDomain;
  });
  architectureAdaptiveSections.forEach((section) => {
    section.hidden = !isAdaptiveDomain;
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

  if (isMemoryDomain) {
    architectureMemoryLayerIntro.textContent = domainData.layers.intro;
    architectureMemoryLayers.replaceChildren(
      ...domainData.layers.items.map((layer) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const heading = document.createElement("h4");
        const body = document.createElement("p");
        label.className = "memory-layer__label";
        label.textContent = layer.label;
        heading.textContent = layer.title;
        body.textContent = layer.body;
        article.append(label, heading, body);
        return article;
      }),
    );
    architectureMemoryViews.replaceChildren(
      ...domainData.layers.views.map((view) => {
        const item = document.createElement("span");
        item.textContent = view;
        return item;
      }),
    );
    architectureMemoryLayerRule.textContent = domainData.layers.rule;
    architectureMemoryMaturity.replaceChildren(
      ...domainData.layers.maturity.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const body = document.createElement("p");
        label.textContent = item.label;
        body.textContent = item.body;
        article.append(label, body);
        return article;
      }),
    );
    architectureMemoryRevisionTitle.textContent = domainData.revisionFigureTitle;
    architectureMemoryRevisionIntro.textContent = domainData.revisionFigureIntro;
    architectureMemoryRevisionComments.replaceChildren(
      ...domainData.revisionComments.map((comment) => {
        const item = document.createElement("li");
        item.textContent = comment;
        return item;
      }),
    );
  }

  if (isContextDomain) {
    architectureContextPreservationIntro.textContent = domainData.preservation.intro;
    architectureContextPreservationItems.replaceChildren(
      ...domainData.preservation.items.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const heading = document.createElement("h4");
        const body = document.createElement("p");
        label.className = "context-preservation__label";
        label.textContent = item.label;
        heading.textContent = item.title;
        body.textContent = item.body;
        article.append(label, heading, body);
        return article;
      }),
    );
    architectureContextPreservationRule.textContent = domainData.preservation.rule;
    architectureContextMaturity.replaceChildren(
      ...domainData.preservation.maturity.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const body = document.createElement("p");
        label.textContent = item.label;
        body.textContent = item.body;
        article.append(label, body);
        return article;
      }),
    );
    architectureContextExpansionTitle.textContent = domainData.expansionFigureTitle;
    architectureContextExpansionIntro.textContent = domainData.expansionFigureIntro;
    architectureContextExpansionComments.replaceChildren(
      ...domainData.expansionComments.map((comment) => {
        const item = document.createElement("li");
        item.textContent = comment;
        return item;
      }),
    );
  }

  if (isReasoningDomain) {
    architectureReasoningOutcomesIntro.textContent = domainData.outcomes.intro;
    architectureReasoningOutcomes.replaceChildren(
      ...domainData.outcomes.items.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const heading = document.createElement("h4");
        const body = document.createElement("p");
        label.className = "reasoning-outcome__label";
        label.textContent = item.label;
        heading.textContent = item.title;
        body.textContent = item.body;
        article.append(label, heading, body);
        return article;
      }),
    );
    architectureReasoningOutcomeRule.textContent = domainData.outcomes.rule;
    architectureReasoningMaturity.replaceChildren(
      ...domainData.outcomes.maturity.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const body = document.createElement("p");
        label.textContent = item.label;
        body.textContent = item.body;
        article.append(label, body);
        return article;
      }),
    );
    architectureReasoningBoundaryTitle.textContent = domainData.boundaryFigureTitle;
    architectureReasoningBoundaryIntro.textContent = domainData.boundaryFigureIntro;
    architectureReasoningBoundaryComments.replaceChildren(
      ...domainData.boundaryComments.map((comment) => {
        const item = document.createElement("li");
        item.textContent = comment;
        return item;
      }),
    );
  }

  if (isAdaptiveDomain) {
    architectureAdaptiveDecisionsIntro.textContent = domainData.decisions.intro;
    architectureAdaptiveDecisions.replaceChildren(
      ...domainData.decisions.items.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const heading = document.createElement("h4");
        const body = document.createElement("p");
        label.className = "adaptive-decision__label";
        label.textContent = item.label;
        heading.textContent = item.title;
        body.textContent = item.body;
        article.append(label, heading, body);
        return article;
      }),
    );
    architectureAdaptiveDecisionRule.textContent = domainData.decisions.rule;
    architectureAdaptiveMaturity.replaceChildren(
      ...domainData.decisions.maturity.map((item) => {
        const article = document.createElement("article");
        const label = document.createElement("p");
        const body = document.createElement("p");
        label.textContent = item.label;
        body.textContent = item.body;
        article.append(label, body);
        return article;
      }),
    );
    architectureAdaptiveLineageTitle.textContent = domainData.lineageFigureTitle;
    architectureAdaptiveLineageIntro.textContent = domainData.lineageFigureIntro;
    architectureAdaptiveLineageComments.replaceChildren(
      ...domainData.lineageComments.map((comment) => {
        const item = document.createElement("li");
        item.textContent = comment;
        return item;
      }),
    );
  }

  architectureDomainPressureTitle.textContent = domainData.pressureHeading || "Why this part of the architecture exists";
  architectureDomainPressures.classList.toggle(
    "architecture-domain-copy--turning-points",
    isObservationDomain || isMemoryDomain || isContextDomain || isReasoningDomain || isAdaptiveDomain,
  );
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
  resetArchitectureFigureAnimations();
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
  const validViews = ["home", "architecture", "research", "journal", "about"];
  const resolvedView = validViews.includes(nextView) ? nextView : "home";
  const isHome = resolvedView === "home";
  const isArchitecture = resolvedView === "architecture";
  const isResearch = resolvedView === "research";
  const isJournal = resolvedView === "journal";
  const isAbout = resolvedView === "about";
  const wasResearch = body.dataset.view === "research";
  const wasArchitecture = body.dataset.view === "architecture";
  const wasJournal = body.dataset.view === "journal";
  const wasAbout = body.dataset.view === "about";

  if (!isResearch && wasResearch && updateHistory) syncResearchHistoryState();
  if (!isArchitecture && wasArchitecture && updateHistory) syncArchitectureHistoryState();
  if (!isJournal && wasJournal && updateHistory) writeJournalHistory({ replace: true });
  if (!isAbout && wasAbout && updateHistory) {
    history.replaceState({ ...history.state, view: "about", about: { scrollTop: aboutScroll.scrollTop } }, "", location.href);
  }

  if (!isArchitecture) closeArchitectureIndexVisual({ restoreFocus: false });
  if (isArchitecture && !wasArchitecture && updateHistory) {
    showArchitectureLanding({ updateHistory: false, scrollTop: 0, focusMap: false });
  }
  if (isJournal && !wasJournal && updateHistory) {
    activeJournalCategory = "all";
    activeJournalTopic = "all";
    closeJournalReader({ updateHistory: false, restoreFocus: false });
    journalScroll.scrollTop = 0;
    renderJournalEntries();
  }
  if (isAbout && !wasAbout && updateHistory) aboutScroll.scrollTop = 0;

  body.dataset.view = resolvedView;

  if (!isHome) {
    body.style.setProperty("--pointer-x", "0px");
    body.style.setProperty("--pointer-y", "0px");
  }

  if (!isResearch) {
    closeResearchTablet({ restoreFocus: false, syncHistory: false });
  }

  if (!isJournal) {
    closeJournalReader({ updateHistory: false, restoreFocus: false });
  }

  homeScene.toggleAttribute("inert", !isHome);
  architectureScene.toggleAttribute("inert", !isArchitecture);
  researchScene.toggleAttribute("inert", !isResearch);
  journalScene.toggleAttribute("inert", !isJournal);
  aboutScene.toggleAttribute("inert", !isAbout);
  homeScene.setAttribute("aria-hidden", String(!isHome));
  architectureScene.setAttribute("aria-hidden", String(!isArchitecture));
  researchScene.setAttribute("aria-hidden", String(!isResearch));
  journalScene.setAttribute("aria-hidden", String(!isJournal));
  aboutScene.setAttribute("aria-hidden", String(!isAbout));

  const skipLinkTargets = {
    home: ["#home-map", "Skip to the Sylara map"],
    architecture: activeArchitectureDomain
      ? ["#domain-overview", `Skip to ${architectureDomainContent[activeArchitectureDomain].title}`]
      : ["#architecture-domain-map", "Skip to the Architecture map"],
    research: ["#research-title", "Skip to Research"],
    journal: ["#journal-index", "Skip to the Journal archive"],
    about: ["#about-trajectory", "Skip to the About research trajectory"],
  };
  [skipLink.href, skipLink.textContent] = skipLinkTargets[resolvedView];

  if (updateHistory) {
    history.pushState(
      {
        view: resolvedView,
        architecture: isArchitecture ? { page: "landing", domain: null, scrollTop: 0, indexOpen: false } : null,
        research: isResearch ? { subject: null, tabletOpen: false, scrollTop: 0 } : null,
        journal: isJournal ? { category: "all", topic: "all", article: null, scrollTop: 0 } : null,
        about: isAbout ? { scrollTop: 0 } : null,
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
      journal: journalScene.querySelector("[data-route='home']"),
      about: aboutScene.querySelector("[data-route='home']"),
    };
    const focusTarget = focusTargets[resolvedView];
    focusTarget?.focus({ preventScroll: true });
  }, prefersReducedMotion.matches ? 0 : focusDelay);
}

function navigateTo(nextView, { mode = "direct", updateHistory = true } = {}) {
  clearRouteTransition();

  const useSpatialTransition = mode === "spatial" && ["architecture", "research", "journal", "about"].includes(nextView) && !prefersReducedMotion.matches;

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
      if (control.dataset.route === "journal" && activeJournalArticle) {
        closeJournalReader();
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

aboutScrollTarget.addEventListener("click", () => {
  document.querySelector("#about-trajectory").scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start",
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

journalIndexLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#journal-index")?.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start",
  });
});

journalCategoryControls.forEach((control) => {
  control.addEventListener("click", () => {
    activeJournalCategory = control.dataset.journalCategory;
    renderJournalEntries();
    writeJournalHistory();
  });
});

journalTopicControls.forEach((control) => {
  control.addEventListener("click", () => {
    activeJournalTopic = control.dataset.journalTopic;
    renderJournalEntries();
    writeJournalHistory();
  });
});

journalEntryGrid.addEventListener("click", (event) => {
  const control = event.target.closest("[data-journal-open]");
  if (control) openJournalArticle(control.dataset.journalOpen);
});

journalReaderDismiss.addEventListener("click", () => closeJournalReader());
journalReaderClose.addEventListener("click", () => closeJournalReader());

journalReaderToc.addEventListener("click", (event) => {
  const control = event.target.closest("[data-journal-section]");
  if (!control) return;
  journalReaderBody.querySelector(`#${control.dataset.journalSection}`)?.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start",
  });
});

journalReader.addEventListener("keydown", (event) => {
  if (!journalScene.classList.contains("has-reader") || event.key !== "Tab") return;
  const focusable = [journalReaderClose, ...journalReaderToc.querySelectorAll("button")];
  const currentIndex = focusable.indexOf(document.activeElement);

  if (event.shiftKey && currentIndex <= 0) {
    event.preventDefault();
    focusable[focusable.length - 1]?.focus();
  } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
    event.preventDefault();
    focusable[0]?.focus();
  }
});

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

  if (event.key === "Escape" && body.dataset.view === "journal") {
    if (journalScene.classList.contains("has-reader")) closeJournalReader();
    else navigateTo("home");
    return;
  }

  if (event.key === "Escape" && body.dataset.view === "about") {
    navigateTo("home");
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
    || (hashView.startsWith("architecture")
      ? "architecture"
      : hashView === "research"
        ? "research"
        : hashView.startsWith("journal")
          ? "journal"
          : hashView === "about" ? "about" : "home");
  navigateTo(nextView, { updateHistory: false });

  if (nextView === "research") restoreResearchHistoryState(event.state?.research);
  if (nextView === "architecture") restoreArchitectureHistoryState(event.state?.architecture);
  if (nextView === "journal") restoreJournalHistoryState(event.state?.journal);
  if (nextView === "about") aboutScroll.scrollTop = event.state?.about?.scrollTop || 0;
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
setupAboutReveals();
setSubjectVisualState();
setArchitectureMapState();
renderJournalEntries();
const initialHashView = location.hash.slice(1);
const initialView = initialHashView.startsWith("architecture")
  ? "architecture"
  : initialHashView === "research"
    ? "research"
    : initialHashView.startsWith("journal")
      ? "journal"
      : initialHashView === "about" ? "about" : "home";
setScene(initialView, { updateHistory: false });

if (history.state?.view === initialView) {
  if (initialView === "research") restoreResearchHistoryState(history.state.research);
  if (initialView === "architecture") restoreArchitectureHistoryState(history.state.architecture);
  if (initialView === "journal") restoreJournalHistoryState(history.state.journal);
  if (initialView === "about") aboutScroll.scrollTop = history.state.about?.scrollTop || 0;
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
      journal: initialView === "journal" ? getJournalHashState() : null,
      about: initialView === "about" ? { scrollTop: 0 } : null,
    },
    "",
    location.href,
  );

  if (initialView === "architecture") restoreArchitectureHistoryState(initialArchitectureState);
  if (initialView === "journal") restoreJournalHistoryState(getJournalHashState());
}

setupArchitectureFigureAnimations();
