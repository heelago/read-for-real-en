// ===========================================================
// ARTICLE DATA - Fitzpatrick, "The Humanities, Done Digitally"
// Debates in the Digital Humanities, 2012, pp. 12-15
// ===========================================================

export const ARTICLE = {
  title: "The Humanities, Done Digitally",
  author: "Kathleen Fitzpatrick",
  year: 2012,
  source: "Debates in the Digital Humanities, pp. 12-15",
  sections: [
    {
      id: "definition",
      title: "Defining the Field",
      pages: "12-13",
      summary:
        "Fitzpatrick opens by showing why attempts to define digital humanities often create disagreement. She traces the term's institutional history and the shift from 'humanities computing' to broader framing.",
    },
    {
      id: "divide",
      title: "Making vs. Interpreting",
      pages: "13-14",
      summary:
        "The essay presents a tension between technical making and critical interpretation. Fitzpatrick argues that the boundary is bridgeable and can be intellectually productive.",
    },
    {
      id: "future",
      title: "The Digital Difference",
      pages: "14-15",
      summary:
        "In conclusion, Fitzpatrick argues that the field's key contribution is not tool-use itself, but analyzing how digital conditions transform scholarly labor and communication.",
    },
  ],
  keyConcepts: [
    {
      id: "digital-humanities",
      term: "Digital Humanities",
      definition:
        "A field that combines computational work (archives, standards, analytical methods) with humanistic interpretation of culture, text, and technology.",
      page: "12-13",
    },
    {
      id: "making-interpreting",
      term: "Making vs. Interpreting",
      definition:
        "A recurring tension between building methods/tools and critical interpretation. Fitzpatrick frames this not as a strict split but as a continuum of praxis.",
      page: "14",
    },
    {
      id: "interdisciplinarity",
      term: "Interdisciplinarity",
      definition:
        "Debates over borders can open meaningful conversations across fields, moving beyond closed disciplinary boundaries.",
      page: "14",
    },
    {
      id: "digital-difference",
      term: "The Digital Difference",
      definition:
        "The field's distinctive contribution: examining how the digital changes the types of knowledge produced and the forms of scholarly communication.",
      page: "15",
    },
  ],
  keyPassages: [
    {
      text: "Digital humanities has gained prominence... but that prominence has also produced tension.",
      page: "12",
      context: "Rising visibility and contest over field boundaries",
    },
    {
      text: "The digital humanities seems another space... where making and interpreting might be bridged.",
      page: "14",
      context: "Theory-practice tension",
    },
    {
      text: "The particular contribution of the digital humanities... lies in its exploration of the difference that the digital can make.",
      page: "15",
      context: "Core final claim",
    },
  ],
  structuredQuestions: [
    {
      phase: "Identify",
      question:
        "How does Fitzpatrick define digital humanities, and what about the term itself generates debate within academic communities?",
      hint: "Track both the conceptual definition and the institutional naming history.",
      relatedPassage: 0,
      relatedConcepts: ["digital-humanities"],
    },
    {
      phase: "Interpret",
      question:
        "Why does Fitzpatrick treat the tension between making and interpreting as a productive source of innovation rather than a failure?",
      hint: "Look at her comparison to media studies and theorized praxis.",
      relatedPassage: 1,
      relatedConcepts: ["making-interpreting", "interdisciplinarity"],
    },
    {
      phase: "Critique",
      question:
        "What is the 'digital difference' in this essay, and how does it change the way we read and write in academic contexts?",
      hint: "Address both tools and learning practice in your response.",
      relatedPassage: 2,
      relatedConcepts: ["digital-difference"],
    },
  ],
};

export const PHASES = {
  Identify: { icon: "🔍", color: "#6b7c5b", label: "Identify Core Claims", bg: "#6b7c5b12" },
  Interpret: { icon: "🧩", color: "#5b6b7c", label: "Interpret and Compare", bg: "#5b6b7c12" },
  Critique: { icon: "💡", color: "#7c5b6b", label: "Critique and Apply", bg: "#7c5b6b12" },
};
