const body = document.body;
const homeScene = document.querySelector(".home-scene");
const architectureScene = document.querySelector(".architecture-scene");
const researchScene = document.querySelector(".research-scene");
const journalScene = document.querySelector(".journal-scene");
const aboutScene = document.querySelector(".about-scene");
const contactScene = document.querySelector(".contact-scene");
const architectureHeader = document.querySelector(".architecture-header");
const researchHeader = document.querySelector(".research-header");
const skipLink = document.querySelector(".skip-link");
const routeStatuses = [...document.querySelectorAll("[data-route-status]")];
const architectureScroll = document.querySelector("[data-architecture-scroll]");
const architectureDomainScroll = document.querySelector("[data-architecture-domain-scroll]");
const foundationSystemScroll = document.querySelector("[data-foundation-system-scroll]");
const foundationOverviewControl = document.querySelector("[data-foundation-overview]");
const foundationBlueprint = document.querySelector("[data-foundation-blueprint]");
const foundationRegions = document.querySelector("[data-foundation-regions]");
const foundationInterfaces = document.querySelector("[data-foundation-interfaces]");
const foundationConnectors = document.querySelector("[data-foundation-connectors]");
const foundationConnectionList = document.querySelector("[data-foundation-connection-list]");
const foundationMobileContext = document.querySelector("[data-foundation-mobile-context]");
const foundationMobileContextKicker = document.querySelector("[data-foundation-mobile-context-kicker]");
const foundationMobileContextTitle = document.querySelector("[data-foundation-mobile-context-title]");
const foundationMobileSchematic = document.querySelector("[data-foundation-mobile-schematic]");
const foundationMobileInterfacesSection = document.querySelector("[data-foundation-mobile-interfaces-section]");
const foundationMobileInterfaces = document.querySelector("[data-foundation-mobile-interfaces]");
const foundationMobileRelationships = document.querySelector("[data-foundation-mobile-relationships]");
const foundationInspector = document.querySelector("[data-foundation-inspector]");
const foundationInspectorKicker = document.querySelector("[data-foundation-inspector-kicker]");
const foundationInspectorTitle = document.querySelector("[data-foundation-inspector-title]");
const foundationInspectorAnchor = document.querySelector("[data-foundation-inspector-anchor]");
const foundationInspectorMaturity = document.querySelector("[data-foundation-inspector-maturity]");
const foundationInspectorBody = document.querySelector("[data-foundation-inspector-body]");
const foundationInspectorSelectors = document.querySelector("[data-foundation-inspector-selectors]");
const atlasCanvas = document.querySelector("[data-atlas-canvas]");
const atlasNodeLayer = document.querySelector("[data-atlas-node-layer]");
const atlasRelationships = document.querySelector("[data-atlas-relationships]");
const atlasIdentity = document.querySelector("[data-atlas-identity]");
const atlasStatus = document.querySelector("[data-atlas-status]");
const atlasIndexList = document.querySelector("[data-atlas-index-list]");
const atlasIndexToggle = document.querySelector("[data-atlas-index-toggle]");
const atlasIndexOverlay = document.querySelector("[data-atlas-index-overlay]");
const atlasIndexOverlayPanel = atlasIndexOverlay?.querySelector(".atlas-index-overlay__panel") || null;
const atlasIndexOverlayList = document.querySelector("[data-atlas-index-overlay-list]");
const atlasIndexDismiss = document.querySelector("[data-atlas-index-dismiss]");
const atlasIndexClose = document.querySelector("[data-atlas-index-close]");
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
const contactScroll = document.querySelector("[data-contact-scroll]");
const contactChannels = [...document.querySelectorAll("[data-contact-channel]")];
const contactDetailKicker = document.querySelector("[data-contact-detail-kicker]");
const contactDetailTitle = document.querySelector("[data-contact-detail-title]");
const contactDetailCopy = document.querySelector("[data-contact-detail-copy]");
const contactDetailEmail = document.querySelector("[data-contact-detail-email]");
const contactDetailAddress = document.querySelector("[data-contact-detail-address]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const atlasMobileMedia = window.matchMedia("(max-width: 760px)");
const foundationMobileMedia = window.matchMedia("(max-width: 900px)");
const researchTabletMobileMedia = window.matchMedia(
  "(max-width: 760px), (max-height: 590px) and (orientation: landscape) and (max-width: 960px)",
);

const starField = [
  [8, 20, 1, 8.5, -1.2], [22, 47, 1, 9.2, -3.2], [36, 80, 2, 8.1, -2.7],
  [51, 69, 1, 9.9, -4.8], [66, 58, 1, 8.6, -2.3], [81, 73, 1, 9.4, -3.6],
  [93, 58, 1, 9.2, -1.5], [18, 88, 1, 10.7, -6.8],
];

/*
  CONTACT CHANNEL COPY
  Replace these working descriptions as the public contact policy matures.
  The reserved detail panel keeps every selection from moving the composition.
*/
const contactChannelContent = {
  research: {
    kicker: "Channel 01 / Research",
    title: "Research & collaboration",
    copy: "For aligned technical or scientific inquiry, research partnerships, and exploratory collaboration around sustained intelligent systems.",
    email: "hello@sylaratech.com",
    subject: "Research and collaboration inquiry",
  },
  platform: {
    kicker: "Channel 02 / Platform",
    title: "Platform interest",
    copy: "For conversations about persistent intelligence, long-duration research workflows, and the future direction of the Sylara platform.",
    email: "hello@sylaratech.com",
    subject: "Sylara platform interest",
  },
  general: {
    kicker: "Channel 03 / General",
    title: "General correspondence",
    copy: "For thoughtful questions, introductions, and messages that do not belong to a specific research or platform pathway.",
    email: "hello@sylaratech.com",
    subject: "General Sylara inquiry",
  },
};

let activeContactChannel = "research";

const subjectOrder = ["foundations", "memory-context", "reasoning-evidence", "adaptive-systems"];

/*
  HOME SYSTEM ATLAS
  This is the single structural source for cards, indexes, relationship paths,
  and future route activation. A null route is intentionally inspectable only.
*/
const atlasSystems = [
  {
    id: "system-foundation",
    number: "01",
    title: "System & Foundation",
    accent: "#D8C4FF",
    glyph: "foundation",
    route: "#architecture/system-foundation",
    position: { x: 50, y: 11.5 },
    compactY: 8,
    mobile: { column: 1, row: 1 },
    relationships: {
      input: [],
      shared: ["ingress-observation", "identity-state-lifecycle", "trust-evidence-provenance", "runtime-execution-resources", "memory-persistence", "time-temporal-semantics", "cognition-meaning-epistemic", "research-orchestration", "models-operator-surfaces"],
      output: [],
    },
  },
  {
    id: "ingress-observation",
    number: "02",
    title: "Ingress & Observation",
    accent: "#9EDBFF",
    glyph: "observation",
    route: null,
    position: { x: 72, y: 18.5 },
    compactY: 13,
    mobile: { column: 2, row: 1 },
    relationships: {
      input: ["time-temporal-semantics"],
      shared: ["system-foundation", "identity-state-lifecycle", "trust-evidence-provenance", "runtime-execution-resources"],
      output: ["memory-persistence", "cognition-meaning-epistemic"],
    },
  },
  {
    id: "identity-state-lifecycle",
    number: "03",
    title: "Identity, State & Lifecycle",
    accent: "#B8ACFF",
    glyph: "identity",
    route: null,
    position: { x: 88, y: 34.5 },
    compactY: 31,
    mobile: { column: 1, row: 2 },
    relationships: {
      input: [],
      shared: ["system-foundation", "ingress-observation", "trust-evidence-provenance", "runtime-execution-resources", "time-temporal-semantics"],
      output: ["memory-persistence", "cognition-meaning-epistemic", "research-orchestration"],
    },
  },
  {
    id: "trust-evidence-provenance",
    number: "04",
    title: "Trust, Evidence & Provenance",
    accent: "#91CFC5",
    glyph: "provenance",
    route: null,
    position: { x: 90, y: 62 },
    compactY: 58,
    mobile: { column: 2, row: 2 },
    relationships: {
      input: ["time-temporal-semantics"],
      shared: ["system-foundation", "ingress-observation", "identity-state-lifecycle", "research-orchestration"],
      output: ["runtime-execution-resources", "memory-persistence", "cognition-meaning-epistemic"],
    },
  },
  {
    id: "runtime-execution-resources",
    number: "05",
    title: "Runtime, Execution & Resources",
    accent: "#9D5CFF",
    glyph: "runtime",
    route: null,
    position: { x: 76, y: 77.5 },
    compactY: 82,
    mobile: { column: 1, row: 4 },
    relationships: {
      input: ["trust-evidence-provenance"],
      shared: ["system-foundation", "ingress-observation", "identity-state-lifecycle", "time-temporal-semantics", "research-orchestration"],
      output: ["memory-persistence", "cognition-meaning-epistemic", "models-operator-surfaces"],
    },
  },
  {
    id: "memory-persistence",
    number: "06",
    title: "Memory & Persistence",
    accent: "#B78AF2",
    glyph: "memory",
    route: null,
    position: { x: 50, y: 88.5 },
    compactY: 92,
    mobile: { column: 2, row: 4 },
    relationships: {
      input: ["ingress-observation", "identity-state-lifecycle", "trust-evidence-provenance", "runtime-execution-resources", "time-temporal-semantics"],
      shared: ["system-foundation", "cognition-meaning-epistemic", "research-orchestration"],
      output: [],
    },
  },
  {
    id: "time-temporal-semantics",
    number: "07",
    title: "Time & Temporal Semantics",
    accent: "#B4DEFF",
    glyph: "time",
    route: null,
    position: { x: 24, y: 77.5 },
    compactY: 82,
    mobile: { column: 1, row: 5 },
    relationships: {
      input: [],
      shared: ["system-foundation", "identity-state-lifecycle", "runtime-execution-resources"],
      output: ["ingress-observation", "trust-evidence-provenance", "memory-persistence", "cognition-meaning-epistemic", "research-orchestration"],
    },
  },
  {
    id: "cognition-meaning-epistemic",
    number: "08",
    title: "Cognition, Meaning & Epistemic State",
    accent: "#B275FF",
    glyph: "cognition",
    route: null,
    position: { x: 10, y: 62 },
    compactY: 58,
    mobile: { column: 2, row: 5 },
    relationships: {
      input: ["ingress-observation", "identity-state-lifecycle", "trust-evidence-provenance", "runtime-execution-resources", "time-temporal-semantics"],
      shared: ["system-foundation", "memory-persistence", "research-orchestration", "models-operator-surfaces"],
      output: [],
    },
  },
  {
    id: "research-orchestration",
    number: "09",
    title: "Research & Orchestration",
    accent: "#6CC7B9",
    glyph: "research",
    route: null,
    position: { x: 12, y: 34.5 },
    compactY: 31,
    mobile: { column: 1, row: 6 },
    relationships: {
      input: ["identity-state-lifecycle", "time-temporal-semantics"],
      shared: ["system-foundation", "trust-evidence-provenance", "runtime-execution-resources", "memory-persistence", "cognition-meaning-epistemic", "models-operator-surfaces"],
      output: [],
    },
  },
  {
    id: "models-operator-surfaces",
    number: "10",
    title: "Models & Operator Surfaces",
    accent: "#E7D8FF",
    glyph: "surfaces",
    route: null,
    position: { x: 28, y: 18.5 },
    compactY: 13,
    mobile: { column: 2, row: 6 },
    relationships: {
      input: ["runtime-execution-resources"],
      shared: ["system-foundation", "cognition-meaning-epistemic", "research-orchestration"],
      output: [],
    },
  },
];

const atlasSystemsById = new Map(atlasSystems.map((system) => [system.id, system]));

/*
  SYSTEM 01 / FOUNDATION BLUEPRINT
  Regions, modules, inspector language, interfaces, and connector semantics
  share one source so the schematic and accessible inspection surface agree.
*/
const foundationDefaultInspector = {
  id: "foundation",
  kicker: "FOUNDATION CONTRACTS",
  title: "Foundation Contracts",
  anchor: "System 01",
  maturity: "GOVERNING FRAME",
  summary: "System 01 establishes the contracts that keep authority, identity, provenance, current state, historical recording, and presentation distinct across Sylara. Select a region to inspect its responsibilities and implementation posture.",
  legend: true,
};

const foundationRegionsData = [
  {
    id: "admission-provenance",
    code: "A",
    title: "ADMISSION & PROVENANCE",
    topologyOrder: 1,
    maturity: "ACTIVE BOUNDED RUNTIME",
    anchors: ["ObservationService", "AdapterCoupler", "RuntimeAdmissionGuard"],
    mobileLayout: "zones",
    interfaceIds: ["governed-rule-processing"],
    owns: "Layer 02 owns source-specific collection/normalization, attribution, and observation admission within its declared scope. Layer 04 owns minimum provenance validation and provenance-based quarantine/admission policy.",
    consumes: "Source-local records/metadata, attributed observation context, and enriched trust metadata with required source-provenance identity where applicable.",
    produces: "Admitted attributed observations; bounded admission/quarantine/rejection outcomes at the owner that issues each decision; applicable diagnostics/references.",
    contract: "Preserve source identity, lane/subject attribution, and trust-boundary context through governed handoffs. Do not imply that provenance admission establishes condition truth, memory-write authority, source health, or operator action authority.",
    modules: [
      {
        id: "observation-entry",
        title: "OBSERVATION ENTRY",
        maturity: "ACTIVE BOUNDED RUNTIME",
        anchors: ["ObservationService", "AdapterCoupler"],
        owns: "Source-specific collection, normalization, attribution, and observation admission within the Layer 02 contract.",
        consumes: "Source-local records and metadata with the context needed to preserve origin, subject, lane, and scope.",
        produces: "Attributed observations admitted within its declared boundary.",
        contract: "Preserve source identity and attribution through the observation-entry handoff without claiming provenance-policy or condition-truth authority.",
      },
      {
        id: "provenance-admission",
        title: "PROVENANCE ADMISSION",
        maturity: "ACTIVE BOUNDED RUNTIME",
        anchors: ["RuntimeAdmissionGuard"],
        owns: "Minimum provenance validation and provenance-based quarantine or admission policy within the Layer 04 boundary.",
        consumes: "Attributed observation context and enriched trust metadata with required source-provenance identity where applicable.",
        produces: "Bounded admission, quarantine, or rejection outcomes with applicable diagnostics and references.",
        contract: "Apply provenance admission policy without inheriting source-collection, present-condition, memory-write, or operator-action authority.",
      },
    ],
  },
  {
    id: "present-state-health",
    code: "B",
    title: "PRESENT STATE & HEALTH",
    topologyOrder: 2,
    maturity: "ACTIVE IMPLEMENTATION",
    anchors: ["ConditionRegistry", "HealthAuthority"],
    mobileLayout: "flow",
    interfaceIds: ["governed-rule-processing"],
    owns: "ConditionRegistry owns current condition identity, occurrence and episode state, lifecycle truth, and present condition truth. Health Authority owns current Sylara operational-health classification.",
    consumes: "Governed condition-producing inputs and lifecycle material, then authoritative active condition truth for health classification.",
    produces: "Current condition records, lifecycle and episode state, current/recent condition projections, lifecycle mutation facts, and one current operational-health class.",
    contract: "Keep condition identity and lifecycle ownership separate from the health classification derived from authoritative active condition state.",
    modules: [
      {
        id: "condition-registry",
        title: "CONDITION REGISTRY",
        maturity: "ACTIVE IMPLEMENTATION",
        anchors: ["ConditionRegistry"],
        owns: "Current condition identity, occurrence/episode state, lifecycle truth, and present condition truth.",
        consumes: "Governed condition-producing inputs and lifecycle-mutation material admitted through appropriate upstream contracts.",
        produces: "Current condition records, lifecycle state, episode continuity, current/recent condition projections, and lifecycle mutation facts within scope.",
        contract: "Maintain authoritative current condition and lifecycle state under explicit identity, occurrence, and transition semantics.",
      },
      {
        id: "health-authority",
        title: "HEALTH AUTHORITY",
        maturity: "ACTIVE IMPLEMENTATION",
        anchors: ["HealthAuthority"],
        owns: "Current Sylara operational-health classification.",
        consumes: "Governed active condition truth.",
        produces: "One current health class according to accepted health semantics and precedence.",
        contract: "Derive current operational health from authoritative active condition state while keeping health classification separate from condition identity and lifecycle ownership.",
        vocabularyLabel: "OPERATIONAL HEALTH CLASSES",
        vocabulary: ["STABLE", "RECOVERING", "WATCHFUL", "DEGRADED", "CRITICAL", "FAILED"],
        note: "These labels apply only to Sylara's operational/system health. They are not general statuses for hypotheses, experiments, simulations, research tasks, claims, or epistemic objects.",
      },
    ],
  },
  {
    id: "memory-qualification",
    code: "C",
    title: "MEMORY QUALIFICATION",
    topologyOrder: 4,
    maturity: "ACTIVE CLASSIFICATION · REPORT-ONLY",
    anchors: ["MemoryEligibilityGate"],
    mobileLayout: "flow",
    interfaceIds: ["evidence-diagnostic"],
    owns: "Bounded memory-candidacy classification and assignment of an applicable memory class.",
    consumes: "Governed evidence diagnostics or lifecycle-finalization eligibility inputs with preserved subject/source references and required decision context.",
    produces: "Structured Memory Eligibility Decisions containing candidacy status, memory class, decision rationale, qualification basis, subject reference, evaluation context/time, and policy/schema information.",
    contract: "Evaluate memory candidacy while preserving source identity and provenance. Recording, persistence, and durable publication remain separately governed.",
    modules: [
      {
        id: "memory-eligibility-gate",
        title: "MEMORY ELIGIBILITY GATE",
        maturity: "ACTIVE CLASSIFICATION · REPORT-ONLY",
        anchors: ["MemoryEligibilityGate"],
        owns: "Bounded memory-candidacy classification and assignment of an applicable memory class.",
        consumes: "An Evidence Diagnostic with Candidate Identity and a Lifecycle Reference with Lifecycle Bridge Reference as visibly distinct governed inputs.",
        produces: "A structured Memory Eligibility Decision with rationale, basis, references, evaluation context/time, and policy/schema information.",
        contract: "Evaluate both governed inputs without merging their identity authorities. Recording, persistence, and durable publication remain separately governed.",
        vocabularyLabel: "APPLICABLE MEMORY CLASSES",
        vocabulary: ["WORKING OBSERVATIONAL MEMORY", "SESSION MEMORY", "PERSISTENT EPISODIC MEMORY"],
        note: "For an ineligible result, no memory class is assigned.",
      },
      {
        id: "memory-eligibility-decision",
        title: "MEMORY ELIGIBILITY DECISION",
        maturity: "ACTIVE CLASSIFICATION · REPORT-ONLY",
        anchors: ["MemoryEligibilityGate"],
        owns: "The bounded classification outcome issued by Memory Qualification.",
        consumes: "The gate's preserved qualification basis, subject reference, context, and policy/schema information.",
        produces: "A reportable candidacy decision and applicable memory class, or an explicit ineligible result with no memory class assigned.",
        contract: "Carry the qualification outcome into the shared Cycle Report without acting as a recording or persistence authorization.",
      },
    ],
  },
  {
    id: "recording-persistence",
    code: "D",
    title: "RECORDING & PERSISTENCE",
    topologyOrder: 5,
    maturity: "MIXED CURRENT, GATED, AND OPEN CONTRACTS",
    anchors: ["SessionMemoryService", "InsightHistory", "F2 / Schema 2", "RG1"],
    mobileLayout: "bands",
    interfaceIds: ["observation-references"],
    owns: "Memory-local historical record structures, accepted occurrence-correct recording semantics, version-aware history interpretation, and separately governed durability responsibilities within their declared contracts.",
    consumes: "Completed cycle/report state for current history, plus coherent Registry-owned census material and authorized occurrence, condition, observation/reference, temporal, completeness, and currentness information for governed recording.",
    produces: "Session history, derived insight history, attributed occurrence snapshots, session summaries, explicit recording coverage, Memory record identity, and logical finalization state according to the active or accepted contract.",
    contract: "Keep present truth, logical recording state, compatibility, and durable commit/recovery as distinct responsibilities. Recording does not become the owner of upstream truth.",
    modules: [
      {
        id: "session-memory-v1",
        group: "CURRENT HISTORY",
        title: "SESSION MEMORY V1",
        maturity: "ACTIVE HISTORICAL RECORDING",
        anchors: ["SessionMemoryService"],
        owns: "V1 session-scoped historical recording behavior and Memory-local historical record structures.",
        consumes: "Completed cycle/report state supplied through the current runtime contract.",
        produces: "Historical condition-episode records and session-summary records.",
        contract: "Record already-established runtime state after cycle processing without becoming a present-truth owner.",
      },
      {
        id: "insight-history",
        group: "CURRENT HISTORY",
        title: "INSIGHT HISTORY",
        maturity: "ACTIVE DERIVED HISTORY",
        anchors: ["InsightHistory"],
        owns: "Persistence of emitted, unsuppressed cognition insights as derived history.",
        consumes: "Emitted, unsuppressed cognition insights through the current contract.",
        produces: "Derived insight history distinct from session history and governed long-term epistemic memory.",
        contract: "Retain derived insight history without presenting it as Session Memory V1 or governed long-term epistemic memory.",
      },
      {
        id: "governed-recording",
        group: "GOVERNED RECORDING",
        title: "GOVERNED RECORDING",
        maturity: "ACCEPTED · ACTIVATION GATED",
        anchors: ["F2 / Schema 2"],
        owns: "Accepted occurrence-correct SessionMemory recording semantics and independent Memory record identity.",
        consumes: "Coherent Registry-owned census material plus authorized occurrence, condition, observation/reference, temporal, completeness, and currentness information from governing producers.",
        produces: "Attributed condition-occurrence snapshots, session summaries, explicit recording-coverage state, Memory record identity, and logical finalization state.",
        contract: "Bind historical records to exact recording sessions, authoritative occurrences, and canonical condition identity while preserving producer ownership of the truth being recorded.",
        note: "Recording session identity + authoritative Registry episode reference + canonical condition identity form the core binding. Memory supplies its own independent memory_record_id.",
      },
      {
        id: "logical-finalization",
        group: "GOVERNED RECORDING",
        title: "LOGICAL FINALIZATION",
        maturity: "ACCEPTED · ACTIVATION GATED",
        anchors: ["F2 / Schema 2"],
        owns: "The accepted logical recording state within the governed recording contract.",
        consumes: "A coherent, contract-complete governed recording decision.",
        produces: "Explicit logical finalization state, separately from durable commit status.",
        contract: "Logical finalization establishes the accepted recording state. Durability governs how that state is committed and recovered.",
      },
      {
        id: "version-aware-history",
        group: "DURABILITY & COMPATIBILITY",
        title: "VERSION-AWARE HISTORY",
        maturity: "GATED PREREQUISITE",
        anchors: ["RG1"],
        owns: "Version-aware interpretation and coexistence rules for legacy V1 history and future schema-2 history.",
        consumes: "History carrying its declared version and contract context.",
        produces: "Version-appropriate interpretation without rewriting older records into newer semantics.",
        contract: "Preserve coexistence and interpretation boundaries. RG1 does not own durability.",
      },
      {
        id: "durability-contract",
        group: "DURABILITY & COMPATIBILITY",
        title: "DURABILITY CONTRACT",
        maturity: "OPEN CONTRACT · SEPARATELY GOVERNED",
        anchors: [],
        owns: "Separately governed durable commit, retry, and recovery semantics when that contract is established.",
        consumes: "Logically accepted recording state under the future durability contract.",
        produces: "Durable commit and recovery outcomes without changing upstream source truth or recording semantics.",
        contract: "Durable-write success does not change logical recording coverage, source truth, or accepted recording semantics.",
      },
    ],
  },
  {
    id: "governed-projection",
    code: "E",
    title: "GOVERNED PROJECTION",
    topologyOrder: 3,
    maturity: "ACTIVE PROJECTION SURFACES",
    anchors: ["build_view_model()", "build_interpreted_summary()", "render_view_model()", "adapt_vm_for_web()"],
    mobileLayout: "grid",
    interfaceIds: ["temporal-interpretation", "cognition-decision-context", "recent-observations"],
    owns: "Projection assembly, presentation transformation, and operator-facing representation within the Layer-10 projection contract.",
    consumes: "Shared Cycle Report material plus governed system state, observations, diagnostics, temporal interpretation, cognition/decision material, and trace references from their respective source authorities.",
    produces: "View-model structures, interpreted summaries, readable display fields, CLI output, web-dashboard projections, trace-linked operator guidance, and other authorized presentation artifacts.",
    contract: "Transform governed information for inspection and comprehension while preserving upstream semantics and authority. Recommendation text remains advisory presentation, separate from request, approval, authorization, and execution authority.",
    note: "Readable presentation retains governed references where available while upstream identity, state, and evidence remain authoritative. A latest raw metric may be normal while an authoritative active condition remains degraded or critical. Projection should preserve both meanings rather than force display consistency.",
    modules: [
      {
        id: "projection-assembly",
        title: "PROJECTION ASSEMBLY",
        maturity: "ACTIVE PROJECTION",
        anchors: ["build_view_model()"],
        owns: "Projection-only assembly of governed runtime and report material.",
        consumes: "Governed runtime/report state, conditions, activity, observations, cognition insights, decisions/policy results, temporal interpretations, rule metrics, evidence diagnostics, summary material, and trace references.",
        produces: "A projection-only representation for authorized presentation consumers.",
        contract: "Combine governed inputs without inheriting or rewriting their source authority.",
      },
      {
        id: "interpreted-summary",
        title: "INTERPRETED SUMMARY",
        maturity: "ACTIVE OPERATOR PROJECTION",
        anchors: ["build_interpreted_summary()"],
        owns: "Operator-readable interpretation and display prioritization within the projection contract.",
        consumes: "Governed projection material and available context from source authorities.",
        produces: "Signal messages, lifecycle/context text, temporal context, display prioritization, and advisory recommendation strings.",
        contract: "Keep recommendation text advisory and separate from request, approval, authorization, and execution authority.",
      },
      {
        id: "cli",
        title: "CLI",
        maturity: "ACTIVE PRESENTATION",
        anchors: ["render_view_model()"],
        owns: "CLI presentation of the governed view model.",
        consumes: "Authorized view-model structures and interpreted display fields.",
        produces: "Readable CLI output with governed references where available.",
        contract: "Present governed meaning without becoming an upstream truth or action authority.",
      },
      {
        id: "web-dashboard",
        title: "WEB DASHBOARD",
        maturity: "ACTIVE READ-ONLY PRESENTATION",
        anchors: ["adapt_vm_for_web()", "current FastAPI dashboard surface"],
        owns: "Read-only web presentation adaptation within the Layer-10 projection contract.",
        consumes: "Authorized view-model structures and interpreted display fields.",
        produces: "Web-dashboard projections and trace-linked operator guidance.",
        contract: "Remain a read-only presentation surface while preserving upstream semantics and authority.",
      },
    ],
  },
];

const foundationInterfacesData = [
  { id: "governed-rule-processing", label: "GOVERNED RULE PROCESSING", position: "rule" },
  { id: "evidence-diagnostic", label: "EVIDENCE DIAGNOSTIC", detail: "Candidate Identity", position: "evidence" },
  { id: "temporal-interpretation", label: "TEMPORAL INTERPRETATION / L07", position: "temporal" },
  { id: "cognition-decision-context", label: "COGNITION / DECISION CONTEXT / L08", position: "cognition" },
  { id: "recent-observations", label: "RECENT OBSERVATIONS / L02", position: "observations" },
  { id: "observation-references", label: "OBSERVATION REFERENCES", position: "references" },
];

const foundationConnectionsData = [
  { from: "admission-provenance", fromSide: "right", to: "governed-rule-processing", toSide: "left", label: "ADMITTED OBSERVATION CONTEXT", state: "active" },
  { from: "governed-rule-processing", fromSide: "right", to: "present-state-health", toSide: "left", label: "GOVERNED CONDITION INPUT", state: "active" },
  { from: "condition-registry", fromSide: "right", to: "health-authority", toSide: "left", label: "ACTIVE CONDITION TRUTH", state: "active" },
  { from: "present-state-health", fromSide: "bottom", to: "memory-qualification", toSide: "top", label: "LIFECYCLE REFERENCE", state: "active" },
  { from: "evidence-diagnostic", fromSide: "right", to: "memory-eligibility-gate", toSide: "left", label: "EVIDENCE DIAGNOSTIC", state: "active" },
  { from: "memory-eligibility-decision", fromSide: "top", to: "cycle-report", toSide: "left", label: "MEMORY ELIGIBILITY DECISION", state: "active" },
  { from: "present-state-health", fromSide: "bottom", to: "cycle-report", toSide: "top", label: "CONDITION / HEALTH REPORT", state: "active" },
  { from: "temporal-interpretation", fromSide: "left", to: "cycle-report", toSide: "right", label: "TEMPORAL INTERPRETATION", state: "active" },
  { from: "cycle-report", fromSide: "bottom", to: "session-memory-v1", toSide: "top", label: "COMPLETED CYCLE STATE", state: "active" },
  { from: "cycle-report", fromSide: "right", to: "projection-assembly", toSide: "bottom", label: "GOVERNED REPORT STATE", state: "active" },
  { from: "recent-observations", fromSide: "left", to: "governed-projection", toSide: "right", label: "RECENT OBSERVATIONS", state: "active" },
  { from: "cognition-decision-context", fromSide: "left", to: "governed-projection", toSide: "right", label: "COGNITION / DECISION CONTEXT", state: "active" },
  { from: "present-state-health", fromSide: "bottom", to: "governed-recording", toSide: "top", label: "REGISTRY CENSUS", state: "gated" },
  { from: "observation-references", fromSide: "right", to: "governed-recording", toSide: "left", label: "OBSERVATION REFERENCES", state: "gated" },
];

const foundationItemsById = new Map([[foundationDefaultInspector.id, foundationDefaultInspector]]);
foundationRegionsData.forEach((region) => {
  foundationItemsById.set(region.id, { ...region, kicker: `${region.code} / REPRESENTATIVE CONTRACT` });
  region.modules.forEach((module) => foundationItemsById.set(module.id, {
    ...module,
    kicker: `${region.code} / ${region.title}`,
    regionId: region.id,
  }));
});

const atlasGlyphs = {
  foundation: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="7.5" y="7.5" width="9" height="9" rx="1"></rect><path d="M4 9h3.5M16.5 15H20"></path>',
  observation: '<circle cx="12" cy="12" r="2.4"></circle><path d="M5.7 8.4a7.2 7.2 0 0 0 0 7.2M18.3 8.4a7.2 7.2 0 0 1 0 7.2M2.8 5.9a10.4 10.4 0 0 0 0 12.2M21.2 5.9a10.4 10.4 0 0 1 0 12.2"></path>',
  identity: '<circle cx="7" cy="7" r="2.2"></circle><path d="M7 9.2v4.2c0 2.2 1.8 4 4 4h6M12 7h4.5a2.5 2.5 0 0 1 2.5 2.5V12M15.5 14.5 18 12l2.5 2.5"></path>',
  provenance: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"></rect><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="9" r="2"></circle><circle cx="16" cy="15" r="2"></circle><path d="m9.8 11.1 4.3-1.3M9.8 12.9l4.3 1.3"></path>',
  runtime: '<rect x="3.5" y="7" width="7" height="7" rx="1.5"></rect><rect x="13.5" y="10" width="7" height="7" rx="1.5"></rect><path d="M10.5 9h3M10.5 12h3M7 14v3h6.5"></path><circle cx="7" cy="17" r="1"></circle>',
  memory: '<path d="m4 8 8-3 8 3-8 3-8-3Z"></path><path d="m4 12 8 3 8-3M4 16l8 3 8-3"></path><circle cx="12" cy="11" r="1.6"></circle>',
  time: '<circle cx="12" cy="12" r="7.5"></circle><circle cx="17.4" cy="6.8" r="1.5"></circle><path d="M12 8.5V12l2.5 2M4.5 12H2.8M21.2 12h-1.7"></path>',
  cognition: '<circle cx="6" cy="12" r="1.8"></circle><circle cx="12" cy="6" r="1.8"></circle><circle cx="18" cy="10" r="1.8"></circle><circle cx="13" cy="18" r="1.8"></circle><path d="m7.4 10.8 3.2-3.5M13.7 6.8l2.7 2.4M17.3 11.7l-3.1 4.7M11.3 16.4l-4-3.2"></path>',
  research: '<circle cx="5" cy="7" r="1.5"></circle><circle cx="5" cy="17" r="1.5"></circle><circle cx="19" cy="12" r="1.5"></circle><path d="M6.5 7h3.2c2.5 0 3.2 2.2 4.2 3.5M6.5 17h3.2c2.5 0 3.2-2.2 4.2-3.5M13.9 10.5c.8 1.1 1.7 1.5 3.6 1.5"></path>',
  surfaces: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"></rect><path d="M3.5 8h17M8 8v11"></path><circle cx="14.2" cy="13" r="2.2"></circle><path d="m15.8 14.6 2 2"></path>',
};

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
    title: "Foundations of Continuity",
    domain: "Core Models",
    summary: "What has to remain intact for intelligent work to continue across sessions, models, tools, failures, and time?",
    sections: [
      {
        title: "Overview",
        body: "Persistent intelligence requires more than remembering previous information. A continuing system has to preserve the identity of what happened, distinguish recorded events from later interpretations, and know which state can still be relied upon as conditions change.\n\nThe questions underneath that continuity reach into identity, occurrence, time, authority, state, and change.",
      },
      {
        title: "Enduring Questions",
        items: [
          "When does continuing work remain the same investigation, and when has a new occurrence begun?",
          "What must survive when the model performing the reasoning is replaced, restarted, or given different context?",
          "How should observation, evidence, interpretation, decision, and authority remain distinct while still participating in one history?",
          "What does it actually mean for a system to continue, rather than merely remember?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "A common ontology for observations, occurrences, evidence, hypotheses, commands, results, failures, and decisions.",
          "How event time, observation time, processing time, and state-transition time should coexist without being collapsed into one timestamp.",
          "Boundaries between temporary reasoning, governed system state, and the authority to change that state.",
          "Identity rules that prevent a familiar condition from being mistaken for the same occurrence simply because it looks similar.",
        ],
      },
      {
        title: "Findings So Far",
        items: [
          "Continuity is not memory.\nA system can retain information and still lose the identity and relationships that made that information meaningful.",
          "Similarity does not establish identity.\nThe same condition can occur twice while representing two different events with different evidence, history, and consequences.",
          "History and authority are different things.\nPreserving a previous conclusion does not require treating that conclusion as presently true.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "memory-context": {
    title: "Memory & Context",
    domain: "Continuity Infrastructure",
    summary: "How can an intelligent system preserve enough of its past to continue meaningful work without carrying its entire history into every new reasoning step?",
    sections: [
      {
        title: "Overview",
        body: "Long-term memory and active context solve different problems. Memory has to preserve what happened, what was learned, what failed, what remains unresolved, and how those records changed over time. Context has to decide what part of that history is actually useful now.\n\nThe challenge is making those systems work together without turning retrieval into noise, temporary reasoning into permanent knowledge, or missing context into lost continuity.",
      },
      {
        title: "Enduring Questions",
        items: [
          "What should become durable memory, and what should remain temporary working state?",
          "How can an unfinished investigation become relevant again when new evidence appears weeks or months later?",
          "How much historical context does a reasoner actually need before additional information begins to reduce rather than improve understanding?",
          "How should context expand when the system discovers that the information it was initially given is insufficient?",
          "How should unresolved analyses, abandoned hypotheses, failed approaches, and pending work remain available without dominating every future task?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Layered memory that separates immediate working state, recorded experience, durable episodes, and evolving knowledge.",
          "A context compiler that assembles minimum-sufficient context for the current task instead of simply retrieving everything related to it.",
          "Rules for promoting information into durable memory while retaining provenance, uncertainty, and the reason it was preserved.",
          "Mechanisms for reconnecting new evidence with older unresolved questions, failed experiments, and suspended work.",
          "Representations for pending analysis so a planner can continue useful work while deeper examination is still underway.",
        ],
      },
      {
        title: "Findings So Far",
        items: [
          "Memory and context are not the same thing.\nA system may remember something without needing it in the current reasoning window.",
          "Durable does not mean true.\nSomething can deserve preservation because it happened, influenced a decision, or remains unresolved without becoming an accepted fact.",
          "More context is not automatically better context.\nContinuity depends on preserving access to history while still selecting what matters for the present problem.",
          "Shared state does not require shared context.\nMultiple reasoners can participate in the same continuing system while receiving different views of the underlying history according to the work they are performing.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "reasoning-evidence": {
    title: "Reasoning & Evidence",
    domain: "Epistemic Assurance",
    summary: "How can an intelligent system continue reasoning when evidence is incomplete, contradictory, delayed, or unavailable without turning uncertainty into certainty simply because an answer is expected?",
    sections: [
      {
        title: "Overview",
        body: "Useful reasoning rarely begins with complete information. Evidence can arrive from different sources, disagree with itself, become outdated, or expose questions that were not visible when an investigation began.\n\nThe work here focuses on forming hypotheses, testing explanations, identifying what is still missing, and revising understanding without separating a conclusion from the evidence that supports it.",
      },
      {
        title: "Enduring Questions",
        items: [
          "What constitutes sufficient evidence for a particular conclusion, decision, or next action?",
          "How should the system distinguish false, unsupported, unresolved, unknown, and currently unverifiable?",
          "When should contradictory evidence weaken a hypothesis, suspend it, split the investigation, or trigger a search for another explanation?",
          "How can evidence gathered by different tools, workers, and reasoning sessions remain part of one inspectable chain?",
          "When an investigation fails, what should be learned from the failure without turning one unsuccessful attempt into a universal rule?",
          "How should the system recognize that the most important result of a reasoning step is sometimes a newly discovered question rather than an answer?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Explicit hypothesis lifecycles that preserve proposed explanations, supporting evidence, contradictions, assumptions, tests, and unresolved dependencies.",
          "Knowledge-gap detection that can identify what the system would need to know before a stronger conclusion becomes justified.",
          "Evidence structures that preserve provenance and allow later reasoning to distinguish direct observations from derived interpretations.",
          "Ways to retain anomalies, failed experiments, and negative results so they can become useful when later evidence changes the surrounding picture.",
          "Verification across multiple reasoning processes without allowing agreement between models to substitute for independent evidence.",
          "Priority mechanisms for deeper analysis when several unresolved questions compete for limited time or compute.",
        ],
      },
      {
        title: "Findings So Far",
        items: [
          "Absence of evidence is not evidence of absence.\nUnavailable, unresolved, and known-empty evidence must remain different states.",
          "A hypothesis is not a belief simply because it is useful.\nThe system should be able to explore an explanation aggressively without silently promoting it into accepted state.",
          "Failure is information, not prohibition.\nA failed approach should preserve the conditions, assumptions, and reason for failure so later work can determine whether those conditions still apply.",
          "Contradiction should remain visible.\nConflicting evidence is often the beginning of a better question. Simply choosing one side can destroy the information that matters most.",
          "Sometimes the correct result is that the evidence is insufficient.\nA reasoning system should be capable of reaching that state deliberately instead of manufacturing confidence to complete the task.",
        ],
      },
      buildRelatedSkeleton(),
    ],
  },
  "adaptive-systems": {
    title: "Adaptive Systems",
    domain: "Governed Evolution",
    summary: "How can an intelligent system change its plans, behavior, tools, and internal models as conditions evolve without losing control of what it is becoming?",
    sections: [
      {
        title: "Overview",
        body: "A persistent intelligent system cannot remain static. New evidence arrives, assumptions fail, environments change, tools become unavailable, models are replaced, and long-running investigations expose problems that were invisible when they began.\n\nThe problem is how Sylara responds to those changes without allowing adaptation to become uncontrolled drift. Change should be something the system can recognize, propose, evaluate, recover from, and explain afterward.",
      },
      {
        title: "Enduring Questions",
        items: [
          "Which changes may happen autonomously, and which require renewed authority?",
          "How should the system distinguish useful adaptation from gradual drift away from its original constraints or objectives?",
          "When new evidence undermines an active investigation, should the system revise the current plan, suspend it, fork a competing line of inquiry, or abandon it?",
          "How can multiple workers adapt their own local strategies while still participating in one coherent system?",
          "What must remain invariant when models, tools, representations, or execution environments are replaced?",
          "How should a system learn from failure without allowing one failure to permanently constrain situations that only appear similar?",
          "When adaptation produces a worse state, what must have been preserved for meaningful recovery to remain possible?",
          "How much autonomy can a system gain while keeping its actions observable, interruptible, and attributable?",
        ],
      },
      {
        title: "Currently Exploring",
        items: [
          "Durable task and investigation state that survives beyond the reasoning process currently working on it.",
          "Evidence-triggered replanning, where new information can reopen, suspend, redirect, or reprioritize ongoing work.",
          "Bounded worker and child-reasoning lanes that can pursue different problems without silently diverging from shared system state.",
          "Explicit transitions from proposal to authorization, command, action, and result, keeping the ability to reason about change separate from permission to perform it.",
          "Checkpoints and telemetry that preserve not only where work currently stands, but what the system believes it is doing and how stable that understanding is.",
          "Recovery mechanisms that preserve failed paths, abandoned assumptions, anomalies, and prior states instead of simply replacing them with the latest result.",
          "Ways for the underlying reasoning model to change without making the model itself the identity or long-term authority of the system.",
        ],
      },
      {
        title: "Findings So Far",
        items: [
          "Adaptation is not authority.\nA system may recognize a better course of action without automatically gaining permission to take it.",
          "Change without lineage is drift.\nIf the system cannot reconstruct what changed, why it changed, and what evidence supported the transition, improvement and corruption become difficult to distinguish.",
          "Continuity does not require the components to remain identical.\nModels, tools, workers, and representations can change while the continuing system remains anchored in governed state and recoverable history.",
          "Recovery is part of adaptation, not merely a response to failure.\nA system capable of meaningful change must also preserve enough structure to reverse, revise, or branch from that change when later evidence demands it.",
          "Autonomy is not the absence of boundaries.\nUseful autonomy depends on knowing where independent action is permitted, where escalation is required, and how the consequences of both remain visible afterward.",
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
let activeAtlasSystem = null;
let activeArchitectureSystem = null;
let foundationLockedItem = null;
let foundationPreviewItem = null;
let foundationDrawFrame = null;
let isFoundationBlueprintReady = false;
let atlasNodes = [];
let atlasDrawFrame = null;
let atlasPathHideTimer = null;
let atlasIndexReturnFocus = null;
let atlasIndexScrollPosition = 0;
let isSystemAtlasReady = false;
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

/* CONTACT CHANNEL STATE — light the selected path and update only the reserved copy panel. */
function setContactChannel(channel) {
  const resolvedChannel = contactChannelContent[channel] ? channel : "research";
  const content = contactChannelContent[resolvedChannel];
  activeContactChannel = resolvedChannel;

  contactChannels.forEach((control) => {
    const isActive = control.dataset.contactChannel === resolvedChannel;
    control.classList.toggle("is-active", isActive);
    control.setAttribute("aria-pressed", String(isActive));
  });

  contactDetailKicker.textContent = content.kicker;
  contactDetailTitle.textContent = content.title;
  contactDetailCopy.textContent = content.copy;
  contactDetailAddress.textContent = `Write to ${content.email}`;
  contactDetailEmail.href = `mailto:${content.email}?subject=${encodeURIComponent(content.subject)}`;
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

function createAtlasGlyph(glyph, className = "atlas-node__glyph") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add(className);
  svg.innerHTML = atlasGlyphs[glyph];
  return svg;
}

function createAtlasIndexEntry(system, compact = false) {
  const entry = system.route ? document.createElement("a") : document.createElement("div");
  entry.className = compact ? "atlas-index-entry atlas-index-entry--compact" : "atlas-index-entry";
  entry.style.setProperty("--atlas-accent", system.accent);
  if (system.route) {
    entry.href = system.route;
    entry.addEventListener("click", (event) => {
      event.preventDefault();
      showArchitectureSystem(system.id);
    });
  }

  const number = document.createElement("span");
  const label = document.createElement("span");
  number.className = "atlas-index-entry__number";
  label.className = "atlas-index-entry__label";
  number.textContent = system.number;
  label.textContent = system.title;
  entry.append(number, label);
  return entry;
}

function renderSystemAtlas() {
  const nodeFragment = document.createDocumentFragment();

  atlasSystems.forEach((system) => {
    const card = document.createElement("div");
    card.className = "atlas-node";
    card.dataset.atlasSystem = system.id;
    card.style.setProperty("--atlas-accent", system.accent);
    card.style.setProperty("--atlas-x", `${system.position.x}%`);
    card.style.setProperty("--atlas-y", `${system.position.y}%`);
    card.style.setProperty("--atlas-compact-y", `${system.compactY}%`);
    card.style.setProperty("--atlas-mobile-column", system.mobile.column);
    card.style.setProperty("--atlas-mobile-row", system.mobile.row);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `${system.number} / ${system.title}. Inspect architectural relationships.`);

    const heading = document.createElement("span");
    const number = document.createElement("span");
    const title = document.createElement("span");
    const ports = document.createElement("span");
    heading.className = "atlas-node__heading";
    number.className = "atlas-node__number";
    title.className = "atlas-node__title";
    ports.className = "atlas-node__ports";
    number.textContent = system.number;
    title.textContent = system.title;
    heading.append(number, createAtlasGlyph(system.glyph), title);

    ["input", "shared", "output"].forEach((portName) => {
      const port = document.createElement("i");
      port.dataset.atlasPort = portName;
      port.setAttribute("aria-hidden", "true");
      ports.appendChild(port);
    });

    card.append(heading, ports);

    if (system.route) {
      const enter = document.createElement("a");
      enter.className = "atlas-node__enter";
      enter.href = system.route;
      enter.textContent = "ENTER";
      enter.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        showArchitectureSystem(system.id);
      });
      card.appendChild(enter);
    }

    nodeFragment.appendChild(card);
  });

  atlasNodeLayer.replaceChildren(nodeFragment);
  atlasIndexList.replaceChildren(...atlasSystems.map((system) => createAtlasIndexEntry(system)));
  atlasIndexOverlayList.replaceChildren(...atlasSystems.map((system) => createAtlasIndexEntry(system, true)));
  atlasNodes = [...atlasNodeLayer.querySelectorAll("[data-atlas-system]")];
}

function describeAtlasSystem(system) {
  const names = (ids) => ids.map((id) => atlasSystemsById.get(id)?.title).filter(Boolean).join(", ");
  const parts = [`${system.number} / ${system.title}.`];
  if (system.relationships.input.length) parts.push(`Input from ${names(system.relationships.input)}.`);
  if (system.relationships.shared.length) parts.push(`Shared with ${names(system.relationships.shared)}.`);
  if (system.relationships.output.length) parts.push(`Output to ${names(system.relationships.output)}.`);
  return parts.join(" ");
}

function setActiveAtlasSystem(systemId = null, { announce = true } = {}) {
  if (!isSystemAtlasReady) return;

  const nextSystem = systemId ? atlasSystemsById.get(systemId) : null;
  activeAtlasSystem = nextSystem?.id || null;

  atlasNodes.forEach((node) => {
    const isSelected = node.dataset.atlasSystem === activeAtlasSystem;
    node.classList.toggle("is-selected", isSelected);
    node.setAttribute("aria-pressed", String(isSelected));
  });

  if (announce) atlasStatus.textContent = nextSystem ? describeAtlasSystem(nextSystem) : "System Atlas relationships cleared.";
  scheduleAtlasRelationships();
}

function atlasElementBox(element, canvasBox) {
  const box = element.getBoundingClientRect();
  return {
    left: box.left - canvasBox.left,
    right: box.right - canvasBox.left,
    top: box.top - canvasBox.top,
    bottom: box.bottom - canvasBox.top,
    width: box.width,
    height: box.height,
    centerX: box.left - canvasBox.left + box.width / 2,
    centerY: box.top - canvasBox.top + box.height / 2,
  };
}

function atlasPortPoint(systemId, portName, canvasBox) {
  const port = atlasNodeLayer.querySelector(`[data-atlas-system="${systemId}"] [data-atlas-port="${portName}"]`);
  const box = port.getBoundingClientRect();
  return {
    x: box.left - canvasBox.left + box.width / 2,
    y: box.top - canvasBox.top + box.height / 2,
  };
}

function roundedAtlasPath(points, radius = 9) {
  const filtered = points.filter((point, index) => {
    if (!index) return true;
    const previous = points[index - 1];
    return Math.abs(point.x - previous.x) > 0.1 || Math.abs(point.y - previous.y) > 0.1;
  });
  if (filtered.length < 2) return "";

  const round = (value) => Math.round(value * 10) / 10;
  let path = `M ${round(filtered[0].x)} ${round(filtered[0].y)}`;

  for (let index = 1; index < filtered.length - 1; index += 1) {
    const previous = filtered[index - 1];
    const point = filtered[index];
    const next = filtered[index + 1];
    const incomingLength = Math.hypot(point.x - previous.x, point.y - previous.y);
    const outgoingLength = Math.hypot(next.x - point.x, next.y - point.y);
    const bend = Math.min(radius, incomingLength / 2, outgoingLength / 2);
    const before = {
      x: point.x - ((point.x - previous.x) / incomingLength) * bend,
      y: point.y - ((point.y - previous.y) / incomingLength) * bend,
    };
    const after = {
      x: point.x + ((next.x - point.x) / outgoingLength) * bend,
      y: point.y + ((next.y - point.y) / outgoingLength) * bend,
    };
    path += ` L ${round(before.x)} ${round(before.y)} Q ${round(point.x)} ${round(point.y)} ${round(after.x)} ${round(after.y)}`;
  }

  const last = filtered[filtered.length - 1];
  return `${path} L ${round(last.x)} ${round(last.y)}`;
}

function routeAtlasPath(start, end, sourceBox, targetBox, avatarBox, canvasBox, pathIndex) {
  const lead = atlasMobileMedia.matches ? 12 : 16;
  const startLead = { x: start.x, y: start.y + lead };
  const endLead = { x: end.x, y: end.y + lead };
  const laneOffset = (pathIndex % 4) * (atlasMobileMedia.matches ? 1 : 4);
  const sameRow = Math.abs(sourceBox.centerY - targetBox.centerY) < Math.max(sourceBox.height, targetBox.height) * 0.55;
  const crossesAvatar = Math.min(sourceBox.centerY, targetBox.centerY) < avatarBox.bottom + 32
    && Math.max(sourceBox.centerY, targetBox.centerY) > avatarBox.top - 32;

  if (sameRow && !crossesAvatar) {
    const laneY = Math.max(sourceBox.bottom, targetBox.bottom) + lead + laneOffset;
    return [start, { x: start.x, y: laneY }, { x: end.x, y: laneY }, end];
  }

  const bothLeft = sourceBox.centerX < canvasBox.width / 2 && targetBox.centerX < canvasBox.width / 2;
  const bothRight = sourceBox.centerX > canvasBox.width / 2 && targetBox.centerX > canvasBox.width / 2;
  const useOuterRail = crossesAvatar || bothLeft || bothRight;
  let railX;

  if (useOuterRail) {
    const leftDistance = sourceBox.centerX + targetBox.centerX;
    const rightDistance = (canvasBox.width - sourceBox.centerX) + (canvasBox.width - targetBox.centerX);
    const useLeft = bothLeft || (!bothRight && leftDistance <= rightDistance);
    railX = atlasMobileMedia.matches
      ? (useLeft ? 1 : canvasBox.width - 1)
      : (useLeft ? 7 + laneOffset : canvasBox.width - 7 - laneOffset);
  } else {
    railX = canvasBox.width / 2 + (pathIndex % 2 ? laneOffset : -laneOffset);
  }

  return [
    start,
    startLead,
    { x: railX, y: startLead.y },
    { x: railX, y: endLead.y },
    endLead,
    end,
  ];
}

function hideAtlasRelationships() {
  if (!isSystemAtlasReady) return;

  window.clearTimeout(atlasPathHideTimer);
  atlasRelationships.classList.remove("is-visible");
  if (prefersReducedMotion.matches) {
    atlasRelationships.replaceChildren();
    return;
  }
  atlasPathHideTimer = window.setTimeout(() => atlasRelationships.replaceChildren(), 210);
}

function drawAtlasRelationships() {
  if (!isSystemAtlasReady) return;

  window.clearTimeout(atlasPathHideTimer);
  if (!activeAtlasSystem || body.dataset.view !== "architecture" || architectureScene.dataset.architectureView !== "landing") {
    hideAtlasRelationships();
    return;
  }

  const system = atlasSystemsById.get(activeAtlasSystem);
  const canvasBox = atlasCanvas.getBoundingClientRect();
  if (!canvasBox.width || !canvasBox.height) return;

  const avatarBox = atlasElementBox(atlasIdentity, canvasBox);
  const relationships = [
    ...system.relationships.input.map((sourceId) => ({ sourceId, sourcePort: "output", targetId: system.id, targetPort: "input", kind: "input" })),
    ...system.relationships.shared.map((targetId) => ({ sourceId: system.id, sourcePort: "shared", targetId, targetPort: "shared", kind: "shared" })),
    ...system.relationships.output.map((targetId) => ({ sourceId: system.id, sourcePort: "output", targetId, targetPort: "input", kind: "output" })),
  ];

  atlasRelationships.setAttribute("viewBox", `0 0 ${canvasBox.width} ${canvasBox.height}`);
  atlasRelationships.style.setProperty("--atlas-path-accent", system.accent);
  const fragment = document.createDocumentFragment();

  relationships.forEach((relationship, index) => {
    const sourceElement = atlasNodeLayer.querySelector(`[data-atlas-system="${relationship.sourceId}"]`);
    const targetElement = atlasNodeLayer.querySelector(`[data-atlas-system="${relationship.targetId}"]`);
    const sourceBox = atlasElementBox(sourceElement, canvasBox);
    const targetBox = atlasElementBox(targetElement, canvasBox);
    const start = atlasPortPoint(relationship.sourceId, relationship.sourcePort, canvasBox);
    const end = atlasPortPoint(relationship.targetId, relationship.targetPort, canvasBox);
    const points = routeAtlasPath(start, end, sourceBox, targetBox, avatarBox, canvasBox, index);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.dataset.relationshipKind = relationship.kind;
    path.dataset.sourceSystem = relationship.sourceId;
    path.dataset.targetSystem = relationship.targetId;
    path.setAttribute("d", roundedAtlasPath(points));
    fragment.appendChild(path);
  });

  atlasRelationships.replaceChildren(fragment);
  atlasRelationships.classList.remove("is-visible");
  window.requestAnimationFrame(() => atlasRelationships.classList.add("is-visible"));
}

function scheduleAtlasRelationships() {
  if (!isSystemAtlasReady) return;

  window.cancelAnimationFrame(atlasDrawFrame);
  atlasDrawFrame = window.requestAnimationFrame(drawAtlasRelationships);
}

function openAtlasIndex() {
  if (!isSystemAtlasReady) return;
  if (architectureScene.dataset.architectureView !== "landing" || architectureScene.classList.contains("has-atlas-index")) return;
  atlasIndexReturnFocus = atlasIndexToggle;
  atlasIndexScrollPosition = architectureScroll.scrollTop;
  architectureScene.classList.add("has-atlas-index");
  atlasIndexOverlay.setAttribute("aria-hidden", "false");
  atlasIndexOverlay.removeAttribute("inert");
  atlasIndexToggle.setAttribute("aria-expanded", "true");
  architectureScroll.setAttribute("inert", "");
  architectureHeader.setAttribute("inert", "");
  atlasIndexOverlayPanel.focus({ preventScroll: true });
}

function closeAtlasIndex({ restoreFocus = true } = {}) {
  if (!isSystemAtlasReady) return;
  if (!architectureScene.classList.contains("has-atlas-index")) return;
  architectureScene.classList.remove("has-atlas-index");
  atlasIndexOverlay.setAttribute("aria-hidden", "true");
  atlasIndexOverlay.setAttribute("inert", "");
  atlasIndexToggle.setAttribute("aria-expanded", "false");
  architectureScroll.removeAttribute("inert");
  architectureHeader.removeAttribute("inert");
  architectureScroll.scrollTop = atlasIndexScrollPosition;
  if (restoreFocus) atlasIndexReturnFocus?.focus({ preventScroll: true });
  atlasIndexReturnFocus = null;
}

function setupSystemAtlas() {
  const requiredElements = [
    ["canvas", atlasCanvas],
    ["node layer", atlasNodeLayer],
    ["relationships layer", atlasRelationships],
    ["central identity", atlasIdentity],
    ["status region", atlasStatus],
    ["desktop index", atlasIndexList],
    ["index toggle", atlasIndexToggle],
    ["index overlay", atlasIndexOverlay],
    ["index overlay panel", atlasIndexOverlayPanel],
    ["index overlay list", atlasIndexOverlayList],
    ["index dismiss control", atlasIndexDismiss],
    ["index close control", atlasIndexClose],
  ];
  const missingElements = requiredElements.filter(([, element]) => !element).map(([name]) => name);
  if (missingElements.length) {
    throw new Error(`System Atlas markup is incomplete. Missing: ${missingElements.join(", ")}.`);
  }

  renderSystemAtlas();

  atlasNodes.forEach((node) => {
    const systemId = node.dataset.atlasSystem;
    node.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch" && !atlasMobileMedia.matches) setActiveAtlasSystem(systemId, { announce: false });
    });
    node.addEventListener("pointerleave", () => {
      if (!atlasMobileMedia.matches) {
        const focusedSystem = atlasNodeLayer.querySelector(".atlas-node:focus-within")?.dataset.atlasSystem || null;
        setActiveAtlasSystem(focusedSystem, { announce: false });
      }
    });
    node.addEventListener("focus", () => setActiveAtlasSystem(systemId));
    node.addEventListener("blur", () => {
      window.requestAnimationFrame(() => {
        if (
          activeAtlasSystem === systemId
          && !atlasMobileMedia.matches
          && !node.matches(":hover")
          && !node.contains(document.activeElement)
        ) {
          setActiveAtlasSystem(null, { announce: false });
        }
      });
    });
    node.addEventListener("click", (event) => {
      if (event.target.closest(".atlas-node__enter")) return;
      event.stopPropagation();
      setActiveAtlasSystem(systemId);
      node.focus({ preventScroll: true });
    });
    node.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest(".atlas-node__enter")) return;
      event.preventDefault();
      setActiveAtlasSystem(systemId);
    });
  });

  atlasCanvas.addEventListener("click", (event) => {
    if (event.target.closest(".atlas-node") || event.target.closest(".atlas-identity")) return;
    if (atlasMobileMedia.matches) setActiveAtlasSystem(null);
  });

  atlasIndexToggle.addEventListener("click", openAtlasIndex);
  atlasIndexDismiss.addEventListener("click", () => closeAtlasIndex());
  atlasIndexClose.addEventListener("click", () => closeAtlasIndex());

  atlasIndexOverlay.addEventListener("keydown", (event) => {
    if (!architectureScene.classList.contains("has-atlas-index")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeAtlasIndex();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [atlasIndexClose, ...atlasIndexOverlayList.querySelectorAll("a[href]")];
    const currentIndex = focusable.indexOf(document.activeElement);
    if (event.shiftKey && currentIndex <= 0) {
      event.preventDefault();
      focusable[focusable.length - 1]?.focus();
    } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
      event.preventDefault();
      focusable[0]?.focus();
    }
  });

  atlasMobileMedia.addEventListener("change", () => {
    setActiveAtlasSystem(null, { announce: false });
    scheduleAtlasRelationships();
  });

  const atlasResizeObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver(scheduleAtlasRelationships)
    : null;
  isSystemAtlasReady = true;

  if (atlasResizeObserver) {
    atlasResizeObserver.observe(atlasCanvas);
    atlasNodes.forEach((node) => atlasResizeObserver.observe(node));
  } else {
    window.addEventListener("resize", scheduleAtlasRelationships, { passive: true });
  }
}

function foundationElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent !== undefined) element.textContent = textContent;
  return element;
}

function foundationAnchorLabel(id) {
  if (id === "cycle-report") return "Cycle Report";
  const item = foundationItemsById.get(id);
  if (item) return item.title;
  return foundationInterfacesData.find((entry) => entry.id === id)?.label || id;
}

function renderFoundationBlueprint() {
  const regionFragment = document.createDocumentFragment();

  [...foundationRegionsData]
    .sort((left, right) => left.topologyOrder - right.topologyOrder)
    .forEach((region) => {
      const article = foundationElement("article", "foundation-region");
      article.dataset.foundationRegion = region.id;
      article.dataset.foundationAnchor = region.id;

      const control = foundationElement("button", "foundation-region__control");
      control.type = "button";
      control.dataset.foundationSelect = region.id;
      control.setAttribute("aria-pressed", "false");
      const code = foundationElement("span", "foundation-region__code", region.code);
      const title = foundationElement("span", "foundation-region__title", region.title);
      control.append(code, title);

      const modules = foundationElement("div", "foundation-region__modules");
      let currentGroup = null;
      region.modules.forEach((module) => {
        if (module.group && module.group !== currentGroup) {
          modules.appendChild(foundationElement("p", "foundation-region__group", module.group));
          currentGroup = module.group;
        }
        const moduleControl = foundationElement("button", "foundation-module", module.title);
        moduleControl.type = "button";
        moduleControl.dataset.foundationSelect = module.id;
        moduleControl.dataset.foundationAnchor = module.id;
        moduleControl.setAttribute("aria-pressed", "false");
        modules.appendChild(moduleControl);
      });

      article.append(control, modules);
      regionFragment.appendChild(article);
    });

  const interfaceFragment = document.createDocumentFragment();
  foundationInterfacesData.forEach((entry) => {
    const reference = foundationElement("div", "foundation-interface");
    reference.dataset.foundationInterface = entry.position;
    reference.dataset.foundationAnchor = entry.id;
    reference.appendChild(foundationElement("span", "", entry.label));
    if (entry.detail) reference.appendChild(foundationElement("small", "", entry.detail));
    interfaceFragment.appendChild(reference);
  });

  const connectionFragment = document.createDocumentFragment();
  foundationConnectionsData.forEach((connection) => {
    const item = foundationElement("li", `foundation-connection-list__item is-${connection.state}`);
    const state = connection.state === "active" ? "Solid, active" : "Dashed, accepted or gated";
    item.textContent = `${state}: ${foundationAnchorLabel(connection.from)} to ${foundationAnchorLabel(connection.to)} through ${connection.label}.`;
    connectionFragment.appendChild(item);
  });

  foundationRegions.replaceChildren(regionFragment);
  foundationInterfaces.replaceChildren(interfaceFragment);
  foundationConnectionList.replaceChildren(connectionFragment);
}

function foundationConnectionsForRegion(regionId) {
  return foundationConnectionsData.filter((connection) => (
    foundationRegionForItem(connection.from) === regionId
    || foundationRegionForItem(connection.to) === regionId
  ));
}

function foundationMobileModuleControl(module, inspectedId) {
  const control = foundationElement("button", "foundation-mobile-module", module.title);
  control.type = "button";
  control.dataset.foundationSelect = module.id;
  control.setAttribute("aria-controls", "foundation-inspector");
  control.setAttribute("aria-pressed", String(foundationLockedItem === module.id));
  control.classList.toggle("is-inspected", inspectedId === module.id);
  return control;
}

function renderFoundationMobileContext(itemId = "foundation") {
  const regionId = foundationRegionForItem(itemId);
  const region = foundationRegionsData.find((entry) => entry.id === regionId);
  const isAvailable = foundationMobileMedia.matches && Boolean(region);
  foundationMobileContext.hidden = !isAvailable;
  if (!isAvailable) return;

  foundationMobileContextKicker.textContent = `${region.code} / REGION DETAIL`;
  foundationMobileContextTitle.textContent = region.title;
  foundationMobileSchematic.dataset.layout = region.mobileLayout;

  const schematicFragment = document.createDocumentFragment();
  if (region.mobileLayout === "bands") {
    const groups = new Map();
    region.modules.forEach((module) => {
      const group = module.group || "CONTRACT MODULES";
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(module);
    });
    groups.forEach((modules, group) => {
      const band = foundationElement("section", "foundation-mobile-band");
      band.appendChild(foundationElement("p", "foundation-mobile-band__label", group));
      const moduleGrid = foundationElement("div", "foundation-mobile-band__modules");
      modules.forEach((module) => moduleGrid.appendChild(foundationMobileModuleControl(module, itemId)));
      band.appendChild(moduleGrid);
      schematicFragment.appendChild(band);
    });
  } else if (region.mobileLayout === "flow") {
    region.modules.forEach((module, index) => {
      schematicFragment.appendChild(foundationMobileModuleControl(module, itemId));
      if (index >= region.modules.length - 1) return;
      const nextModule = region.modules[index + 1];
      const internalConnection = foundationConnectionsData.find((connection) => (
        connection.from === module.id && connection.to === nextModule.id
      ));
      const connector = foundationElement("div", "foundation-mobile-flow-connector");
      connector.setAttribute("aria-hidden", "true");
      connector.appendChild(foundationElement("i"));
      if (internalConnection) connector.appendChild(foundationElement("span", "", internalConnection.label));
      schematicFragment.appendChild(connector);
    });
  } else {
    const moduleGrid = foundationElement("div", "foundation-mobile-schematic__grid");
    region.modules.forEach((module) => moduleGrid.appendChild(foundationMobileModuleControl(module, itemId)));
    schematicFragment.appendChild(moduleGrid);
  }
  foundationMobileSchematic.replaceChildren(schematicFragment);

  const interfaceFragment = document.createDocumentFragment();
  (region.interfaceIds || []).forEach((interfaceId) => {
    const entry = foundationInterfacesData.find((candidate) => candidate.id === interfaceId);
    if (!entry) return;
    const reference = foundationElement("div", "foundation-mobile-interface");
    reference.appendChild(foundationElement("span", "", entry.label));
    if (entry.detail) reference.appendChild(foundationElement("small", "", entry.detail));
    interfaceFragment.appendChild(reference);
  });
  foundationMobileInterfaces.replaceChildren(interfaceFragment);
  foundationMobileInterfacesSection.hidden = !foundationMobileInterfaces.childElementCount;

  const relationshipFragment = document.createDocumentFragment();
  foundationConnectionsForRegion(region.id).forEach((connection) => {
    const fromRegion = foundationRegionForItem(connection.from);
    const toRegion = foundationRegionForItem(connection.to);
    const relationship = foundationElement("article", `foundation-mobile-relationship is-${connection.state}`);
    const header = foundationElement("header");
    const direction = fromRegion === region.id && toRegion === region.id
      ? "INTERNAL"
      : toRegion === region.id ? "RECEIVES" : "PRODUCES";
    const posture = connection.state === "active" ? "ACTIVE" : "ACCEPTED / GATED";
    header.append(
      foundationElement("strong", "", direction),
      foundationElement("span", "", posture),
    );
    let description;
    if (direction === "INTERNAL") {
      description = `${connection.label} between ${foundationAnchorLabel(connection.from)} and ${foundationAnchorLabel(connection.to)}.`;
    } else if (direction === "RECEIVES") {
      description = `${connection.label} from ${foundationAnchorLabel(connection.from)}.`;
    } else {
      description = `${connection.label} to ${foundationAnchorLabel(connection.to)}.`;
    }
    relationship.append(header, foundationElement("p", "", description));
    relationshipFragment.appendChild(relationship);
  });
  foundationMobileRelationships.replaceChildren(relationshipFragment);
}

function renderFoundationInspector(itemId = "foundation") {
  const item = foundationItemsById.get(itemId) || foundationDefaultInspector;
  const region = item.regionId
    ? foundationRegionsData.find((entry) => entry.id === item.regionId)
    : foundationRegionsData.find((entry) => entry.id === item.id);

  foundationInspectorKicker.textContent = item.kicker || "FOUNDATION CONTRACTS";
  foundationInspectorTitle.textContent = item.title;
  foundationInspectorAnchor.textContent = item.anchors?.length ? item.anchors.join(" · ") : item.anchor || "System 01";
  foundationInspectorMaturity.textContent = item.maturity;

  const bodyFragment = document.createDocumentFragment();
  if (item.summary) bodyFragment.appendChild(foundationElement("p", "foundation-inspector__summary", item.summary));

  if (item.legend) {
    const legend = foundationElement("div", "foundation-connector-legend");
    legend.setAttribute("aria-label", "Connector legend");
    const active = foundationElement("span");
    const activeMark = foundationElement("i");
    activeMark.setAttribute("aria-hidden", "true");
    active.append(activeMark, document.createTextNode(" SOLID / ACTIVE CURRENT RELATIONSHIP"));
    const gated = foundationElement("span");
    const gatedMark = foundationElement("i", "is-dashed");
    gatedMark.setAttribute("aria-hidden", "true");
    gated.append(gatedMark, document.createTextNode(" DASHED / ACCEPTED OR GATED RELATIONSHIP"));
    legend.append(active, gated);
    bodyFragment.append(legend, foundationElement("p", "", "Connections represent governed handoffs or references, not transfer of authority."));
  } else {
    [
      ["OWNS", item.owns],
      ["CONSUMES", item.consumes],
      ["PRODUCES", item.produces],
      ["CONTRACT", item.contract],
    ].forEach(([label, value]) => {
      if (!value) return;
      const section = foundationElement("section", "foundation-inspector__section");
      section.append(foundationElement("h5", "", label), foundationElement("p", "", value));
      bodyFragment.appendChild(section);
    });

    if (item.vocabulary?.length) {
      const vocabulary = foundationElement("section", "foundation-inspector__section foundation-inspector__section--vocabulary");
      vocabulary.appendChild(foundationElement("h5", "", item.vocabularyLabel));
      const list = foundationElement("ul");
      item.vocabulary.forEach((entry) => list.appendChild(foundationElement("li", "", entry)));
      vocabulary.appendChild(list);
      bodyFragment.appendChild(vocabulary);
    }
    if (item.note) bodyFragment.appendChild(foundationElement("p", "foundation-inspector__note", item.note));
  }

  foundationInspectorBody.replaceChildren(bodyFragment);

  if (!region) {
    foundationInspectorSelectors.replaceChildren();
    return;
  }

  const selectorLabel = foundationElement("p", "foundation-inspector__selector-label", "INSPECT CONTRACT PARTS");
  const selectorList = foundationElement("div", "foundation-inspector__selector-list");
  const regionControl = foundationElement("button", "foundation-inspector__selector", "REGION CONTRACT");
  regionControl.type = "button";
  regionControl.dataset.foundationSelect = region.id;
  regionControl.setAttribute("aria-pressed", String(foundationLockedItem === region.id));
  selectorList.appendChild(regionControl);
  region.modules.forEach((module) => {
    const control = foundationElement("button", "foundation-inspector__selector", module.title);
    control.type = "button";
    control.dataset.foundationSelect = module.id;
    control.setAttribute("aria-pressed", String(foundationLockedItem === module.id));
    selectorList.appendChild(control);
  });
  foundationInspectorSelectors.replaceChildren(selectorLabel, selectorList);
}

function foundationRegionForItem(itemId) {
  const item = foundationItemsById.get(itemId);
  return item?.regionId || (foundationRegionsData.some((region) => region.id === itemId) ? itemId : null);
}

function foundationConnectionRelatesToItem(connection, itemId, regionId) {
  const fromRegion = foundationRegionForItem(connection.from);
  const toRegion = foundationRegionForItem(connection.to);
  return connection.from === itemId
    || connection.to === itemId
    || Boolean(regionId && (fromRegion === regionId || toRegion === regionId));
}

function applyFoundationInspection() {
  const itemId = foundationLockedItem || foundationPreviewItem || "foundation";
  const regionId = foundationRegionForItem(itemId);
  renderFoundationInspector(itemId);
  renderFoundationMobileContext(itemId);

  foundationBlueprint.dataset.foundationInspection = itemId;
  foundationBlueprint.querySelectorAll("[data-foundation-select]").forEach((control) => {
    const isLocked = Boolean(foundationLockedItem) && control.dataset.foundationSelect === foundationLockedItem;
    control.setAttribute("aria-pressed", String(isLocked || (!foundationLockedItem && itemId === "foundation" && control.dataset.foundationSelect === "foundation")));
    control.classList.toggle("is-inspected", control.dataset.foundationSelect === itemId);
    control.classList.toggle("is-related", Boolean(regionId) && foundationRegionForItem(control.dataset.foundationSelect) === regionId);
  });

  foundationRegions.querySelectorAll("[data-foundation-region]").forEach((region) => {
    region.classList.toggle("is-related", Boolean(regionId) && region.dataset.foundationRegion === regionId);
  });

  const inspectedRegion = foundationRegionsData.find((region) => region.id === regionId);
  foundationInterfaces.querySelectorAll("[data-foundation-anchor]").forEach((reference) => {
    const interfaceId = reference.dataset.foundationAnchor;
    const isRelated = itemId !== "foundation" && (
      inspectedRegion?.interfaceIds?.includes(interfaceId)
      || foundationConnectionsData.some((connection) => (
        (connection.from === interfaceId || connection.to === interfaceId)
        && foundationConnectionRelatesToItem(connection, itemId, regionId)
      ))
    );
    reference.classList.toggle("is-related", Boolean(isRelated));
    reference.classList.toggle("is-receded", itemId !== "foundation" && !isRelated);
  });

  foundationConnectors.querySelectorAll("[data-foundation-connection]").forEach((group) => {
    const isRelated = itemId !== "foundation" && foundationConnectionRelatesToItem(group.dataset, itemId, regionId);
    group.classList.toggle("is-related", isRelated);
    group.classList.toggle("is-receded", itemId !== "foundation" && !isRelated);
  });
}

function selectFoundationItem(itemId, { lock = false, preview = false, scrollInspector = false } = {}) {
  if (!foundationItemsById.has(itemId)) return;

  if (itemId === "foundation") {
    foundationLockedItem = null;
    foundationPreviewItem = null;
  } else if (lock) {
    foundationLockedItem = itemId;
    foundationPreviewItem = null;
  } else if (preview && !foundationLockedItem) {
    foundationPreviewItem = itemId;
  }

  applyFoundationInspection();

  if (scrollInspector && foundationMobileMedia.matches) {
    foundationMobileContext.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
  }
}

function foundationPointForAnchor(id, side, blueprintBox) {
  const element = foundationBlueprint.querySelector(`[data-foundation-anchor="${id}"]`);
  if (!element) return null;
  const box = element.getBoundingClientRect();
  const relative = {
    left: box.left - blueprintBox.left,
    top: box.top - blueprintBox.top,
    right: box.right - blueprintBox.left,
    bottom: box.bottom - blueprintBox.top,
    width: box.width,
    height: box.height,
  };
  if (side === "left") return { x: relative.left, y: relative.top + relative.height / 2, dx: -1, dy: 0 };
  if (side === "right") return { x: relative.right, y: relative.top + relative.height / 2, dx: 1, dy: 0 };
  if (side === "top") return { x: relative.left + relative.width / 2, y: relative.top, dx: 0, dy: -1 };
  return { x: relative.left + relative.width / 2, y: relative.bottom, dx: 0, dy: 1 };
}

function foundationBoxForAnchor(id, blueprintBox) {
  const element = foundationBlueprint.querySelector(`[data-foundation-anchor="${id}"]`);
  if (!element) return null;
  const box = element.getBoundingClientRect();
  return {
    left: box.left - blueprintBox.left,
    top: box.top - blueprintBox.top,
    right: box.right - blueprintBox.left,
    bottom: box.bottom - blueprintBox.top,
    width: box.width,
    height: box.height,
  };
}

function positionFoundationInterfaces(blueprintBox) {
  const interfaces = new Map(
    [...foundationInterfaces.querySelectorAll("[data-foundation-interface]")]
      .map((element) => [element.dataset.foundationInterface, element]),
  );
  const admission = foundationBoxForAnchor("admission-provenance", blueprintBox);
  const state = foundationBoxForAnchor("present-state-health", blueprintBox);
  const projection = foundationBoxForAnchor("governed-projection", blueprintBox);
  const qualification = foundationBoxForAnchor("memory-qualification", blueprintBox);
  const recording = foundationBoxForAnchor("recording-persistence", blueprintBox);
  const cycle = foundationBoxForAnchor("cycle-report", blueprintBox);
  if (!admission || !state || !projection || !qualification || !recording || !cycle) return;

  interfaces.forEach((element) => {
    element.style.removeProperty("left");
    element.style.removeProperty("right");
    element.style.removeProperty("top");
    element.style.removeProperty("width");
  });

  const place = (position, left, top, width) => {
    const element = interfaces.get(position);
    if (!element) return;
    if (width !== undefined) element.style.width = `${Math.max(1, width)}px`;
    const measured = element.getBoundingClientRect();
    const boundedLeft = Math.min(
      blueprintBox.width - measured.width - 8,
      Math.max(8, left),
    );
    const boundedTop = Math.min(
      blueprintBox.height - measured.height - 8,
      Math.max(8, top),
    );
    element.style.left = `${boundedLeft}px`;
    element.style.top = `${boundedTop}px`;
  };

  const rule = interfaces.get("rule");
  const ruleWidth = Math.max(38, state.left - admission.right - 8);
  if (rule) {
    rule.style.width = `${ruleWidth}px`;
    const box = rule.getBoundingClientRect();
    place(
      "rule",
      admission.right + (state.left - admission.right - box.width) / 2,
      Math.max(admission.top, state.top) + 3.3 * 16,
      ruleWidth,
    );
  }

  const evidence = interfaces.get("evidence");
  if (evidence) {
    const box = evidence.getBoundingClientRect();
    place("evidence", qualification.left + 8, qualification.top - box.height - 34);
  }

  const observations = interfaces.get("observations");
  if (observations) {
    const box = observations.getBoundingClientRect();
    place("observations", projection.right - box.width, projection.top - box.height - 32);
  }

  const cognition = interfaces.get("cognition");
  if (cognition) {
    const box = cognition.getBoundingClientRect();
    place("cognition", projection.right - box.width, projection.bottom + 14);
  }

  const temporal = interfaces.get("temporal");
  if (temporal) {
    const box = temporal.getBoundingClientRect();
    place(
      "temporal",
      blueprintBox.width - box.width - 8,
      cycle.top + (cycle.height - box.height) / 2,
    );
  }

  const references = interfaces.get("references");
  if (references) {
    const box = references.getBoundingClientRect();
    place("references", recording.left - box.width - 12, recording.bottom + 12);
  }
}

function foundationOrthogonalRoute(start, end, index, connection, blueprintBox) {
  const lead = 10;
  const first = { x: start.x + start.dx * lead, y: start.y + start.dy * lead };
  const last = { x: end.x + end.dx * lead, y: end.y + end.dy * lead };
  const connectionKey = `${connection.from}:${connection.to}`;
  const projection = foundationBoxForAnchor("governed-projection", blueprintBox);
  const qualification = foundationBoxForAnchor("memory-qualification", blueprintBox);
  const recording = foundationBoxForAnchor("recording-persistence", blueprintBox);

  if (connectionKey === "admission-provenance:governed-rule-processing") {
    const laneY = Math.max(start.y, end.y) + 52;
    return {
      points: [
        { x: start.x, y: start.y },
        first,
        { x: first.x, y: laneY },
        { x: last.x, y: laneY },
        last,
        { x: end.x, y: end.y },
      ],
      labelPoint: { x: (first.x + last.x) / 2, y: laneY - 7 },
    };
  }

  if (connectionKey === "governed-rule-processing:present-state-health") {
    const laneY = Math.max(start.y, end.y) + 73;
    return {
      points: [
        { x: start.x, y: start.y },
        first,
        { x: first.x, y: laneY },
        { x: last.x, y: laneY },
        last,
        { x: end.x, y: end.y },
      ],
      labelPoint: { x: (first.x + last.x) / 2, y: laneY - 7 },
    };
  }

  if (connectionKey === "condition-registry:health-authority") {
    return {
      points: [{ x: start.x, y: start.y }, { x: end.x, y: end.y }],
      labelPoint: { x: (start.x + end.x) / 2, y: Math.min(start.y, end.y) - 18 },
    };
  }

  if (connectionKey === "evidence-diagnostic:memory-eligibility-gate" && qualification) {
    const railX = Math.max(9, end.x - 13);
    const labelLaneY = qualification.top - 14;
    return {
      points: [
        { x: start.x, y: start.y },
        first,
        { x: first.x, y: labelLaneY },
        { x: railX, y: labelLaneY },
        { x: railX, y: last.y },
        last,
        { x: end.x, y: end.y },
      ],
      labelPoint: { x: (first.x + railX) / 2, y: labelLaneY - 7 },
    };
  }

  if (
    (connectionKey === "recent-observations:governed-projection"
      || connectionKey === "cognition-decision-context:governed-projection")
    && projection
  ) {
    const railX = Math.min(blueprintBox.width - 9, Math.max(start.x, end.x) + 13);
    const labelLaneY = connection.from === "recent-observations"
      ? projection.top - 9
      : projection.bottom + 64;
    return {
      points: [
        { x: start.x, y: start.y },
        first,
        { x: first.x, y: labelLaneY },
        { x: railX, y: labelLaneY },
        { x: railX, y: last.y },
        last,
        { x: end.x, y: end.y },
      ],
      labelPoint: { x: (first.x + railX) / 2, y: labelLaneY - 7 },
    };
  }

  const points = [{ x: start.x, y: start.y }, first];
  const horizontalEnds = start.dx !== 0 && end.dx !== 0;
  const verticalEnds = start.dy !== 0 && end.dy !== 0;

  if (horizontalEnds) {
    const laneX = (first.x + last.x) / 2 + ((index % 3) - 1) * 5;
    points.push({ x: laneX, y: first.y }, { x: laneX, y: last.y });
  } else if (verticalEnds) {
    const laneY = (first.y + last.y) / 2 + ((index % 3) - 1) * 5;
    points.push({ x: first.x, y: laneY }, { x: last.x, y: laneY });
  } else {
    points.push({ x: last.x, y: first.y });
  }

  points.push(last, { x: end.x, y: end.y });
  const filteredPoints = points.filter((point, pointIndex, all) => pointIndex === 0 || point.x !== all[pointIndex - 1].x || point.y !== all[pointIndex - 1].y);
  let labelPoint = null;
  if (connectionKey === "temporal-interpretation:cycle-report") {
    labelPoint = { x: end.x + 64, y: end.y - 7 };
  } else if (connectionKey === "cycle-report:projection-assembly") {
    labelPoint = { x: end.x - 23, y: projection ? projection.bottom + 35 : end.y + 35 };
  } else if (connectionKey === "present-state-health:governed-recording") {
    labelPoint = { x: end.x + 58, y: recording ? recording.top - 14 : end.y - 14 };
  } else if (connectionKey === "observation-references:governed-recording") {
    labelPoint = { x: (start.x + end.x) / 2, y: recording ? recording.bottom - 12 : start.y - 12 };
  }
  return { points: filteredPoints, labelPoint };
}

function foundationLabelPoint(points) {
  let longest = { length: -1, start: points[0], end: points[1] || points[0] };
  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    const length = Math.abs(end.x - start.x) + Math.abs(end.y - start.y);
    if (length > longest.length) longest = { length, start, end };
  }
  return {
    x: (longest.start.x + longest.end.x) / 2,
    y: (longest.start.y + longest.end.y) / 2 - 4,
  };
}

function sizeFoundationConnectorPlate(label, plate) {
  const bounds = label.getBBox();
  plate.setAttribute("x", bounds.x - 3);
  plate.setAttribute("y", bounds.y - 2.5);
  plate.setAttribute("width", bounds.width + 6);
  plate.setAttribute("height", bounds.height + 5);
  plate.setAttribute("rx", "2");
}

function drawFoundationConnectors() {
  if (!isFoundationBlueprintReady || foundationMobileMedia.matches) {
    foundationConnectors.replaceChildren();
    return;
  }

  const blueprintBox = foundationBlueprint.getBoundingClientRect();
  if (!blueprintBox.width || !blueprintBox.height) return;
  positionFoundationInterfaces(blueprintBox);
  foundationConnectors.setAttribute("viewBox", `0 0 ${blueprintBox.width} ${blueprintBox.height}`);
  const fragment = document.createDocumentFragment();
  const labels = [];

  foundationConnectionsData.forEach((connection, index) => {
    const start = foundationPointForAnchor(connection.from, connection.fromSide, blueprintBox);
    const end = foundationPointForAnchor(connection.to, connection.toSide, blueprintBox);
    if (!start || !end) return;
    const route = foundationOrthogonalRoute(start, end, index, connection, blueprintBox);
    const points = route.points;
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const startPort = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const endPort = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const plate = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const labelPoint = route.labelPoint || foundationLabelPoint(points);
    group.dataset.foundationConnection = "";
    group.dataset.from = connection.from;
    group.dataset.to = connection.to;
    group.classList.add(`is-${connection.state}`);
    path.setAttribute("d", roundedAtlasPath(points, 5));
    startPort.setAttribute("cx", start.x);
    startPort.setAttribute("cy", start.y);
    startPort.setAttribute("r", "2.25");
    endPort.setAttribute("cx", end.x);
    endPort.setAttribute("cy", end.y);
    endPort.setAttribute("r", "2.25");
    plate.classList.add("foundation-connector-label-plate");
    label.setAttribute("x", labelPoint.x);
    label.setAttribute("y", labelPoint.y);
    label.setAttribute("text-anchor", "middle");
    label.textContent = connection.label;
    group.append(path, startPort, endPort, plate, label);
    fragment.appendChild(group);
    labels.push({ label, plate });
  });

  foundationConnectors.replaceChildren(fragment);
  labels.forEach(({ label, plate }) => sizeFoundationConnectorPlate(label, plate));
  applyFoundationInspection();
}

function scheduleFoundationConnectors() {
  if (!isFoundationBlueprintReady) return;
  window.cancelAnimationFrame(foundationDrawFrame);
  foundationDrawFrame = window.requestAnimationFrame(drawFoundationConnectors);
}

function setupSystemFoundation() {
  const requiredElements = [
    ["page scroll", foundationSystemScroll],
    ["overview control", foundationOverviewControl],
    ["blueprint", foundationBlueprint],
    ["region layer", foundationRegions],
    ["interface layer", foundationInterfaces],
    ["connector layer", foundationConnectors],
    ["relationship list", foundationConnectionList],
    ["compact context", foundationMobileContext],
    ["compact context kicker", foundationMobileContextKicker],
    ["compact context title", foundationMobileContextTitle],
    ["compact schematic", foundationMobileSchematic],
    ["compact interface section", foundationMobileInterfacesSection],
    ["compact interfaces", foundationMobileInterfaces],
    ["compact relationships", foundationMobileRelationships],
    ["inspector", foundationInspector],
  ];
  const missing = requiredElements.filter(([, element]) => !element).map(([name]) => name);
  if (missing.length) throw new Error(`System Foundation markup is incomplete. Missing: ${missing.join(", ")}.`);

  renderFoundationBlueprint();
  foundationOverviewControl.addEventListener("click", () => {
    showArchitectureLanding({ updateHistory: true, scrollTop: 0 });
  });
  isFoundationBlueprintReady = true;
  applyFoundationInspection();

  foundationBlueprint.addEventListener("pointerover", (event) => {
    if (foundationLockedItem || foundationMobileMedia.matches) return;
    const control = event.target.closest("[data-foundation-select]");
    if (control && control.dataset.foundationSelect !== "foundation") selectFoundationItem(control.dataset.foundationSelect, { preview: true });
  });
  foundationBlueprint.addEventListener("pointerout", (event) => {
    if (foundationLockedItem || foundationMobileMedia.matches) return;
    if (event.relatedTarget?.closest?.("[data-foundation-select]")) return;
    foundationPreviewItem = null;
    applyFoundationInspection();
  });
  foundationBlueprint.addEventListener("focusin", (event) => {
    if (foundationLockedItem) return;
    const control = event.target.closest("[data-foundation-select]");
    if (control && control.dataset.foundationSelect !== "foundation") selectFoundationItem(control.dataset.foundationSelect, { preview: true });
  });
  foundationBlueprint.addEventListener("focusout", () => {
    window.requestAnimationFrame(() => {
      if (foundationLockedItem || foundationBlueprint.contains(document.activeElement)) return;
      foundationPreviewItem = null;
      applyFoundationInspection();
    });
  });

  const activateSelection = (event) => {
    const control = event.target.closest("[data-foundation-select]");
    if (!control) return;
    const entersMobileRegion = control.classList.contains("foundation-region__control");
    selectFoundationItem(control.dataset.foundationSelect, { lock: true, scrollInspector: entersMobileRegion });
  };
  const activateSelectionFromKeyboard = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const control = event.target.closest("[data-foundation-select]");
    if (!control) return;
    event.preventDefault();
    const entersMobileRegion = control.classList.contains("foundation-region__control");
    selectFoundationItem(control.dataset.foundationSelect, { lock: true, scrollInspector: entersMobileRegion });
  };
  foundationBlueprint.addEventListener("click", activateSelection);
  foundationBlueprint.addEventListener("keydown", activateSelectionFromKeyboard);
  foundationInspectorSelectors.addEventListener("click", activateSelection);
  foundationInspectorSelectors.addEventListener("keydown", activateSelectionFromKeyboard);

  const observer = typeof ResizeObserver === "function" ? new ResizeObserver(scheduleFoundationConnectors) : null;
  if (observer) {
    observer.observe(foundationBlueprint);
    observer.observe(foundationRegions);
  } else {
    window.addEventListener("resize", scheduleFoundationConnectors, { passive: true });
  }
  foundationMobileMedia.addEventListener("change", () => {
    applyFoundationInspection();
    scheduleFoundationConnectors();
  });
  window.requestAnimationFrame(scheduleFoundationConnectors);
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
  scheduleAtlasRelationships();
  scheduleFoundationConnectors();
});

function getArchitectureHashSystem() {
  return location.hash === "#architecture/system-foundation" ? "system-foundation" : null;
}

function getArchitectureHashDomain() {
  const match = location.hash.match(/^#architecture\/([^/]+)$/);
  return match && architectureDomainContent[match[1]] ? match[1] : null;
}

function showArchitectureSystem(systemId, {
  updateHistory = true,
  scrollTop = 0,
  focusPage = true,
} = {}) {
  const system = atlasSystemsById.get(systemId);
  if (!system?.route || systemId !== "system-foundation") return;

  closeAtlasIndex({ restoreFocus: false });
  closeArchitectureIndexVisual({ restoreFocus: false });
  setActiveAtlasSystem(null, { announce: false });
  activeArchitectureDomain = null;
  activeArchitectureSystem = systemId;
  activeArchitectureSection = "domain-overview";
  architectureScene.dataset.architectureView = "system-foundation";
  architectureScene.setAttribute("aria-labelledby", "foundation-system-title");
  architectureScroll.setAttribute("aria-hidden", "true");
  architectureScroll.setAttribute("inert", "");
  architectureDomainScroll.setAttribute("aria-hidden", "true");
  architectureDomainScroll.setAttribute("inert", "");
  foundationSystemScroll.setAttribute("aria-hidden", "false");
  foundationSystemScroll.removeAttribute("inert");
  foundationSystemScroll.scrollTop = Math.max(0, Number(scrollTop) || 0);
  updateArchitectureWordmark();

  if (updateHistory) {
    history.pushState(
      {
        view: "architecture",
        architecture: { page: "system", system: systemId, scrollTop: 0, indexOpen: false },
      },
      "",
      system.route,
    );
  }

  skipLink.href = "#foundation-contracts";
  skipLink.textContent = "Skip to Foundation Contracts";
  if (focusPage) foundationSystemScroll.focus({ preventScroll: true });
  window.requestAnimationFrame(scheduleFoundationConnectors);
}

function renderArchitectureDomain(domain) {
  const domainData = architectureDomainContent[domain];
  if (!domainData) return;

  activeArchitectureDomain = domain;
  activeArchitectureSystem = null;
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
  foundationSystemScroll.setAttribute("aria-hidden", "true");
  foundationSystemScroll.setAttribute("inert", "");
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

  closeAtlasIndex({ restoreFocus: false });
  setActiveAtlasSystem(null, { announce: false });
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
  closeAtlasIndex({ restoreFocus: false });
  setActiveAtlasSystem(null, { announce: false });
  activeArchitectureDomain = null;
  activeArchitectureSystem = null;
  activeArchitectureSection = "domain-overview";
  architectureScene.dataset.architectureView = "landing";
  architectureScene.setAttribute("aria-labelledby", "architecture-title");
  architectureScroll.setAttribute("aria-hidden", "false");
  architectureScroll.removeAttribute("inert");
  architectureDomainScroll.setAttribute("aria-hidden", "true");
  architectureDomainScroll.setAttribute("inert", "");
  foundationSystemScroll.setAttribute("aria-hidden", "true");
  foundationSystemScroll.setAttribute("inert", "");
  architectureScroll.scrollTop = Math.max(0, Number(scrollTop) || 0);
  updateArchitectureWordmark();

  if (updateHistory) {
    history.pushState(
      { view: "architecture", architecture: { page: "landing", scrollTop, indexOpen: false } },
      "",
      "#architecture",
    );
  }

  skipLink.href = "#architecture-system-atlas";
  skipLink.textContent = "Skip to the System Atlas";
  if (focusMap) atlasNodes[0]?.focus({ preventScroll: true });
  window.requestAnimationFrame(scheduleAtlasRelationships);
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
  const isSystem = Boolean(activeArchitectureSystem);
  const activeScroll = isDomain
    ? architectureDomainScroll
    : isSystem ? foundationSystemScroll : architectureScroll;

  history.replaceState(
    {
      ...history.state,
      view: "architecture",
      architecture: {
        page: isDomain ? "domain" : isSystem ? "system" : "landing",
        domain: isDomain ? activeArchitectureDomain : null,
        system: isSystem ? activeArchitectureSystem : null,
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
  const system = architectureState?.system || getArchitectureHashSystem();
  const domain = architectureState?.domain || getArchitectureHashDomain();

  if (architectureState?.page === "system" || system) {
    showArchitectureSystem(system, {
      updateHistory: false,
      scrollTop: architectureState?.scrollTop,
      focusPage: false,
    });
    return;
  }

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

function setScene(nextView, { updateHistory = true, focusDelay = 760, focusSceneEntry = true } = {}) {
  const validViews = ["home", "architecture", "research", "journal", "about", "contact"];
  const resolvedView = validViews.includes(nextView) ? nextView : "home";
  const isHome = resolvedView === "home";
  const isArchitecture = resolvedView === "architecture";
  const isResearch = resolvedView === "research";
  const isJournal = resolvedView === "journal";
  const isAbout = resolvedView === "about";
  const isContact = resolvedView === "contact";
  const wasResearch = body.dataset.view === "research";
  const wasArchitecture = body.dataset.view === "architecture";
  const wasJournal = body.dataset.view === "journal";
  const wasAbout = body.dataset.view === "about";
  const wasContact = body.dataset.view === "contact";

  if (!isResearch && wasResearch && updateHistory) syncResearchHistoryState();
  if (!isArchitecture && wasArchitecture && updateHistory) syncArchitectureHistoryState();
  if (!isJournal && wasJournal && updateHistory) writeJournalHistory({ replace: true });
  if (!isAbout && wasAbout && updateHistory) {
    history.replaceState({ ...history.state, view: "about", about: { scrollTop: aboutScroll.scrollTop } }, "", location.href);
  }
  if (!isContact && wasContact && updateHistory) {
    history.replaceState({
      ...history.state,
      view: "contact",
      contact: { scrollTop: contactScroll.scrollTop, channel: activeContactChannel },
    }, "", location.href);
  }

  if (!isArchitecture) {
    closeArchitectureIndexVisual({ restoreFocus: false });
    closeAtlasIndex({ restoreFocus: false });
  }
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
  if (isContact && !wasContact && updateHistory) {
    contactScroll.scrollTop = 0;
    setContactChannel("research");
  }

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
  contactScene.toggleAttribute("inert", !isContact);
  homeScene.setAttribute("aria-hidden", String(!isHome));
  architectureScene.setAttribute("aria-hidden", String(!isArchitecture));
  researchScene.setAttribute("aria-hidden", String(!isResearch));
  journalScene.setAttribute("aria-hidden", String(!isJournal));
  aboutScene.setAttribute("aria-hidden", String(!isAbout));
  contactScene.setAttribute("aria-hidden", String(!isContact));

  const skipLinkTargets = {
    home: ["#home-map", "Skip to the Sylara map"],
    architecture: activeArchitectureDomain
      ? ["#domain-overview", `Skip to ${architectureDomainContent[activeArchitectureDomain].title}`]
      : activeArchitectureSystem
        ? ["#foundation-contracts", "Skip to Foundation Contracts"]
        : ["#architecture-system-atlas", "Skip to the System Atlas"],
    research: ["#research-title", "Skip to Research"],
    journal: ["#journal-index", "Skip to the Journal archive"],
    about: ["#about-trajectory", "Skip to the About research trajectory"],
    contact: ["#contact-title", "Skip to Contact"],
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
        contact: isContact ? { scrollTop: 0, channel: activeContactChannel } : null,
      },
      "",
      `#${resolvedView}`,
    );
  }

  window.clearTimeout(focusTimer);
  if (focusSceneEntry) {
    focusTimer = window.setTimeout(() => {
      const focusTargets = {
        home: homeScene.querySelector(".map-node--architecture"),
        architecture: architectureScene.querySelector("[data-route='home']"),
        research: researchScene.querySelector("[data-route='home']"),
        journal: journalScene.querySelector("[data-route='home']"),
        about: aboutScene.querySelector("[data-route='home']"),
        contact: contactScene.querySelector("[data-route='home']"),
      };
      const focusTarget = focusTargets[resolvedView];
      focusTarget?.focus({ preventScroll: true });
    }, prefersReducedMotion.matches ? 0 : focusDelay);
  }
}

function navigateTo(nextView, { mode = "direct", updateHistory = true } = {}) {
  clearRouteTransition();

  const useSpatialTransition = mode === "spatial" && ["architecture", "research", "journal", "about", "contact"].includes(nextView) && !prefersReducedMotion.matches;

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
      if (control.dataset.route === "architecture" && (activeArchitectureDomain || activeArchitectureSystem)) {
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

contactChannels.forEach((control) => {
  control.addEventListener("click", () => setContactChannel(control.dataset.contactChannel));
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

function handleResearchTabletOutsideClick(event) {
  const target = event.target;

  if (!(target instanceof Element)) return;
  if (!researchScene.classList.contains("has-tablet") || researchTabletMobileMedia.matches) return;
  if (target.closest("[data-research-tablet]") || target.closest(".subject-control")) return;

  closeResearchTablet();
}

document.addEventListener("click", handleResearchTabletOutsideClick);

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
    : architectureScene.dataset.architectureView === "system-foundation"
      ? foundationSystemScroll
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
foundationSystemScroll.addEventListener("scroll", () => {
  updateArchitectureWordmark();
  scheduleArchitectureHistorySync();
}, { passive: true });
window.addEventListener("resize", () => {
  updateTabletScrollCue();
  if (window.innerWidth > 1100) closeAtlasIndex({ restoreFocus: false });
});

window.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape"
    && body.dataset.view === "architecture"
    && activeArchitectureSystem === "system-foundation"
    && (foundationLockedItem || foundationPreviewItem)
  ) {
    event.preventDefault();
    selectFoundationItem("foundation", { lock: true });
    foundationBlueprint.querySelector('[data-foundation-select="foundation"]')?.focus({ preventScroll: true });
    return;
  }

  if (event.key === "Escape" && body.dataset.view === "architecture" && architectureScene.classList.contains("has-atlas-index")) {
    closeAtlasIndex();
    return;
  }

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

  if (event.key === "Escape" && body.dataset.view === "contact") {
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
          : hashView === "about"
            ? "about"
            : hashView === "contact" ? "contact" : "home");
  navigateTo(nextView, { updateHistory: false });

  if (nextView === "research") restoreResearchHistoryState(event.state?.research);
  if (nextView === "architecture") restoreArchitectureHistoryState(event.state?.architecture);
  if (nextView === "journal") restoreJournalHistoryState(event.state?.journal);
  if (nextView === "about") aboutScroll.scrollTop = event.state?.about?.scrollTop || 0;
  if (nextView === "contact") {
    setContactChannel(event.state?.contact?.channel);
    contactScroll.scrollTop = event.state?.contact?.scrollTop || 0;
  }
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

function initializeSubsystem(name, initializer) {
  try {
    initializer();
  } catch (error) {
    console.error(`[Sylara] ${name} initialization failed.`, error);
  }
}

const initialHashView = location.hash.slice(1);
const initialView = initialHashView.startsWith("architecture")
  ? "architecture"
  : initialHashView === "research"
    ? "research"
    : initialHashView.startsWith("journal")
      ? "journal"
      : initialHashView === "about"
        ? "about"
    : initialHashView === "contact" ? "contact" : "home";
let initialRouteFailed = false;

try {
  setScene(initialView, { updateHistory: false, focusSceneEntry: false });

  if (history.state?.view === initialView) {
    if (initialView === "research") restoreResearchHistoryState(history.state.research);
    if (initialView === "architecture") restoreArchitectureHistoryState(history.state.architecture);
    if (initialView === "journal") restoreJournalHistoryState(history.state.journal);
    if (initialView === "about") aboutScroll.scrollTop = history.state.about?.scrollTop || 0;
    if (initialView === "contact") {
      setContactChannel(history.state.contact?.channel);
      contactScroll.scrollTop = history.state.contact?.scrollTop || 0;
    }
  } else {
    const initialArchitectureSystem = initialView === "architecture" ? getArchitectureHashSystem() : null;
    const initialArchitectureDomain = initialView === "architecture" ? getArchitectureHashDomain() : null;
    const initialArchitectureState = initialArchitectureSystem
      ? { page: "system", system: initialArchitectureSystem, domain: null, scrollTop: 0, indexOpen: false }
      : initialArchitectureDomain
        ? { page: "domain", system: null, domain: initialArchitectureDomain, scrollTop: 0, indexOpen: false }
        : { page: "landing", system: null, domain: null, scrollTop: 0, indexOpen: false };

    history.replaceState(
      {
        view: initialView,
        architecture: initialView === "architecture" ? initialArchitectureState : null,
        research: initialView === "research" ? { subject: null, tabletOpen: false, scrollTop: 0 } : null,
        journal: initialView === "journal" ? getJournalHashState() : null,
        about: initialView === "about" ? { scrollTop: 0 } : null,
        contact: initialView === "contact" ? { scrollTop: 0, channel: "research" } : null,
      },
      "",
      location.href,
    );

    if (initialView === "architecture") restoreArchitectureHistoryState(initialArchitectureState);
    if (initialView === "journal") restoreJournalHistoryState(getJournalHashState());
  }
} catch (error) {
  initialRouteFailed = true;
  console.error("[Sylara] Initial route initialization failed.", error);
} finally {
  if (typeof window.__sylaraReleaseInitialRoute === "function") {
    window.__sylaraReleaseInitialRoute({ recover: initialRouteFailed });
  } else {
    body.dataset.routeReady = "true";
    window.requestAnimationFrame(() => delete document.documentElement.dataset.initialView);
  }
}

initializeSubsystem("ambient background", buildAmbientStars);
initializeSubsystem("About page", setupAboutReveals);
initializeSubsystem("Contact page", () => setContactChannel(activeContactChannel));
initializeSubsystem("Research page", () => setSubjectVisualState(activeSubject ? "active" : "neutral", activeSubject));
initializeSubsystem("System Atlas", setupSystemAtlas);
initializeSubsystem("System Foundation", setupSystemFoundation);
initializeSubsystem("Journal page", renderJournalEntries);
initializeSubsystem("Architecture figures", setupArchitectureFigureAnimations);
