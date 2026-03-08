export const QUIZ = [
  {
    id: 1,
    type: "multiple_choice",
    question:
      "Why was the term 'Digital Humanities' adopted instead of 'Humanities Computing' or 'Digitized Humanities'?",
    options: [
      "Because it refers only to technical digitization of texts",
      "Because it enables a broader frame than a narrowly technological label",
      "Because it is the name of a single archive funded by the NEH",
      "Because it was chosen by student vote at the MLA",
    ],
    correct: 1,
    page: "12-13",
  },
  {
    id: 2,
    type: "true_false",
    question:
      "Fitzpatrick argues that any scholar with a personal website automatically belongs to digital humanities.",
    correct: false,
    explanationPrompt:
      "Briefly justify your answer: according to the article, what is actually required for belonging to this field?",
    page: "14",
  },
  {
    id: 3,
    type: "matching",
    question: "Match each term to its role in the article:",
    pairs: [
      {
        term: "William Blake Archive",
        match: "Example of a large-scale digital textual-visual scholarly archive",
      },
      {
        term: "Text Encoding Initiative",
        match: "Technical standard/infrastructure supporting digital archive production",
      },
      {
        term: "Theory-Practice Divide",
        match: "The tension between making and interpretation in the humanities",
      },
      {
        term: "Interdisciplinarity",
        match: "Opening dialogue across fields beyond strict disciplinary boundaries",
      },
    ],
    page: "13-14",
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "What central claim is made about the relationship between making and interpreting?",
    options: [
      "They are opposing paths that cannot be integrated",
      "Making is always superior because it is more measurable",
      "Their boundary is often arbitrary, and they can be productively bridged",
      "Interpretation belongs only to the humanities while making belongs only to engineering",
    ],
    correct: 2,
    page: "14",
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "According to Fitzpatrick, what is the distinctive contribution of digital humanities?",
    options: [
      "Replacing critical reading with automated models",
      "Turning every field into a closed discipline with strict boundaries",
      "Investigating how the digital reshapes scholarly work and communication",
      "Moving all humanities research into social media",
    ],
    correct: 2,
    page: "15",
  },
];
