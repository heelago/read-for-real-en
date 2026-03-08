// ===========================================================
// READING FLOW - Article 2 (Fitzpatrick)
// ===========================================================

export const INLINE_QUESTIONS = [
  {
    id: 1,
    phase: "Identify",
    question:
      "Fitzpatrick offers two ways to understand the field: using technology to investigate humanities questions, or using humanities questions to investigate technology. Where does your current activity in this interface fit?",
    hint: "Notice that the interface asks for your own phrasing and blocks copy-paste.",
  },
  {
    id: 2,
    phase: "Interpret",
    question:
      "The tension between 'making' and 'interpreting' appears in product development too. How can a design decision that introduces friction also function as a theoretical stance about learning and knowledge?",
    hint: "Compare frictionless products to tools that deliberately slow users down for reflection.",
  },
  {
    id: 3,
    phase: "Critique",
    question:
      "Fitzpatrick argues that digital humanities contributes by exploring the difference the digital makes. How did this tool change the way you read compared with reading the same text in a standard PDF?",
    hint: "Address reading pace, writing effort, and your moment-to-moment relationship to the text.",
  },
];

export const SECTION_FLOWS = {
  definition: [
    { type: "paragraph", id: "def-1" },
    { type: "paragraph", id: "def-2" },
    { type: "paragraph", id: "def-3" },
    { type: "concept", conceptId: "digital-humanities" },
    { type: "paragraph", id: "def-4" },
    { type: "paragraph", id: "def-5" },
    { type: "question", questionId: 1 },
  ],
  divide: [
    { type: "paragraph", id: "div-1" },
    { type: "paragraph", id: "div-2" },
    { type: "paragraph", id: "div-3" },
    { type: "concept", conceptId: "making-interpreting" },
    { type: "paragraph", id: "div-4" },
    { type: "paragraph", id: "div-5" },
    { type: "concept", conceptId: "interdisciplinarity" },
    { type: "question", questionId: 2 },
  ],
  future: [
    { type: "paragraph", id: "fut-1" },
    { type: "paragraph", id: "fut-2" },
    { type: "concept", conceptId: "digital-difference" },
    { type: "question", questionId: 3 },
    { type: "paragraph", id: "fut-3" },
  ],
};

export const SECTION_ORDER = ["definition", "divide", "future"];
