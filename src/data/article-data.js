// ===========================================================
// ARTICLE TEXT DATA - Fitzpatrick, "The Humanities, Done Digitally"
// Debates in the Digital Humanities (2012), pp. 12-15
// ===========================================================

export const ARTICLE_TEXT = {
  attribution: {
    author: "Kathleen Fitzpatrick",
    title: "The Humanities, Done Digitally",
    book: "Debates in the Digital Humanities",
    year: 2012,
    pages: "12-15",
    citationShort: "Fitzpatrick, 2012",
    citationFull:
      'Fitzpatrick, Kathleen. "The Humanities, Done Digitally." In Debates in the Digital Humanities, 2012, pp. 12-15.',
  },

  sections: {
    definition: {
      id: "definition",
      title: "The Humanities, Done Digitally",
      subtitle: "Defining the Field",
      pageRange: "12-13",
      paragraphs: [
        {
          id: "def-1",
          page: 12,
          text: `A few months back, I gave a lunchtime talk called "Digital Humanities: Singular or Plural?" My title was in part a weak joke driven primarily by brain exhaustion. As I sat at the computer putting together my remarks, which were intended to introduce the field, I'd initially decided to title them "What Is Digital Humanities?" But then I thought "What Is the Digital Humanities?" sounded better, and I stared at the screen for a minute trying to decide if it should be "What Are the Digital Humanities?" In my precoffee, underslept haze, I honestly couldn't tell which one was correct.`,
        },
        {
          id: "def-2",
          page: 12,
          text: `At first this was just a grammatical mix-up, but at some point it occurred to me that it was actually a useful metaphor for something that's been going on in the field of late. Digital humanities has gained prominence in the last couple of years, in part because of the visibility given the field by the use of social media, particularly Twitter, at the Modern Language Association (MLA) convention and other large scholarly meetings. But that prominence and visibility have also produced a fair bit of tension within the field. Every "What Is Digital Humanities?" panel aimed at explaining the field to other scholars winds up uncovering more differences of opinion among its practitioners. Sometimes those differences develop into tense debates about the borders of the field and about who's in and who's out.`,
        },
        {
          id: "def-3",
          page: 12,
          text: `My first stab at trying to define digital humanities came in a post I wrote in July 2010 for the Chronicle of Higher Education's ProfHacker blog. In that post, I wrote that the digital humanities could be understood as "a nexus of fields within which scholars use computing technologies to investigate the kinds of questions that are traditional to the humanities, or, as is more true of my own work, ask traditional kinds of humanities-oriented questions about computing technologies."`,
        },
        {
          id: "def-4",
          page: "12-13",
          text: `There is, however, a specific history to the term digital humanities. In 2001 the field was known as humanities computing and had been around for some decades when Susan Schreibman, Ray Siemens, and John Unsworth entered into discussions with Blackwell Publishing about editing a volume titled "A Companion to Humanities Computing." Blackwell proposed "A Companion to Digitized Humanities," and Unsworth countered with "Digital Humanities" to keep the field from appearing to be about mere digitization. The name has stuck and helped characterize a robust area of research and teaching supported by conferences, journals, scholarly societies, and a dedicated office within the National Endowment for the Humanities (NEH).`,
        },
        {
          id: "def-5",
          page: 13,
          text: `Digital humanities thus grows specifically out of an attempt to make humanities computing, which sounded as though the emphasis lay on the technology, more palatable to humanists in general. The field's background in humanities computing often results in projects that focus on computational methods for textual materials, including large-scale digital archives such as the William Blake Archive, which presents annotated scholarly editions of both writing and visual art.`,
        },
      ],
    },

    divide: {
      id: "divide",
      title: "Making vs. Interpreting",
      pageRange: "13-14",
      paragraphs: [
        {
          id: "div-1",
          page: 13,
          text: `Tools and technical standards that support the production of archives have been another key source of digital humanities work, including projects like the Text Encoding Initiative and the Text-Image Linking Environment. There are projects focused on statistical analysis of linguistic features, author-attribution studies, and data mining, as well as initiatives designed to make projects interoperable and to facilitate peer review of digital scholarly work.`,
        },
        {
          id: "div-2",
          page: 13,
          text: `Digital humanities as currently practiced isn't just located in literary studies. The field is broadly humanities based and includes scholars in history, musicology, performance studies, media studies, and other areas that benefit from bringing computing technologies to bear on traditional humanities materials.`,
        },
        {
          id: "div-3",
          page: "13-14",
          text: `When many of us hear the term digital humanities today, we often refer not only to the specific subfield that grew out of humanities computing but also to broader changes that digital technologies are producing across humanist inquiry. Fields such as rhetoric and composition have long been interested in the difference that computing makes in writing and communication, as has digital media studies.`,
        },
        {
          id: "div-4",
          page: 14,
          text: `There is overlap between these fields and what has been called digital humanities, but clear differences also remain. Those differences often produce significant tension, particularly between those who suggest that digital humanities should always be about making (whether making archives, tools, or new digital methods) and those who argue that it must expand to include interpreting.`,
        },
        {
          id: "div-5",
          page: 14,
          text: `The terms of this tension should sound familiar: this is an updated version of the theory-practice divide long present elsewhere in the humanities. In media studies, after much tension between media makers and media scholars, an increasing number of programs now bring the two modes together in rigorously theorized praxis. The digital humanities seems another space where the divide between making and interpreting might be bridged in productive ways.`,
        },
      ],
    },

    future: {
      id: "future",
      title: "The Digital Difference",
      pageRange: "14-15",
      paragraphs: [
        {
          id: "fut-1",
          page: 14,
          text: `Does this mean we should throw open the floodgates and declare all forms of humanities scholarship that come into contact with the digital to be digital humanities? Undoubtedly not. Just as there are scholars who write about film from perspectives outside film studies, there are scholars who work with digital materials but remain outside the traditions and assumptions of the digital humanities.`,
        },
        {
          id: "fut-2",
          page: 14,
          text: `That fact doesn't diminish the usefulness of debates about the borders of digital humanities. Those debates can be most productive when understood as a way to open conversations that true interdisciplinarity can support. Disciplinarity can be institutionally useful, enabling centers, departments, and tenure lines, but it can also be turned against scholars by restricting movement and disciplining the knowledge they produce.`,
        },
        {
          id: "fut-3",
          page: "14-15",
          text: `The state of things in digital humanities today rests in creative tension: between long-time practitioners and newcomers, between disciplinarity and interdisciplinarity, between making and interpreting, between history and future. Scholarly work across the humanities is increasingly being done digitally. The particular contribution of digital humanities lies in exploring the difference that the digital can make to the kinds of work we do and to the ways we communicate with one another. These new modes of scholarship and communication will best flourish if they, like digital humanities itself, are allowed to remain plural.`,
        },
      ],
    },
  },

  questionToSections: {
    0: { sectionId: "definition", paragraphIds: ["def-2", "def-3"] },
    1: { sectionId: "divide", paragraphIds: ["div-4", "div-5"] },
    2: { sectionId: "future", paragraphIds: ["fut-2", "fut-3"] },
  },

  conceptToSections: {
    "digital-humanities": { sectionId: "definition", paragraphIds: ["def-3", "def-4"] },
    "making-interpreting": { sectionId: "divide", paragraphIds: ["div-4", "div-5"] },
    interdisciplinarity: { sectionId: "future", paragraphIds: ["fut-2"] },
    "digital-difference": { sectionId: "future", paragraphIds: ["fut-3"] },
  },
};
