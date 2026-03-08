// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// ARTICLE TEXT DATA â€” extracted from PDF
// Tsing, Anna. "Arts of Inclusion, or How to Love a Mushroom."
// MÄnoa, Vol. 22, No. 2 (Winter 2010), pp. 191â€“203.
// Published by University of Hawai'i Press. JSTOR stable/41479491
//
// STRUCTURE: Each section contains the original English text broken
// into paragraphs, with page numbers. Use these to display relevant
// excerpts alongside questions, concepts, and the Socratic chat.
//
// USAGE IN COMPONENT:
//   import { ARTICLE_TEXT } from './article-data';
//   // Display a section:  ARTICLE_TEXT.sections.opening.paragraphs
//   // Display by page:    ARTICLE_TEXT.sections.opening.paragraphs.filter(p => p.page === 191)
//   // Full attribution:   ARTICLE_TEXT.attribution
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

export const ARTICLE_TEXT = {
  attribution: {
    author: "Anna Tsing",
    title: "Arts of Inclusion, or How to Love a Mushroom",
    journal: "MÄnoa",
    volume: "Vol. 22, No. 2",
    issue: "Wild Hearts: Literature, Ecology, and Inclusion",
    season: "Winter 2010",
    pages: "191â€“203",
    publisher: "University of Hawai'i Press",
    jstor: "https://www.jstor.org/stable/41479491",
    // Use this string for inline attribution in the UI:
    citationShort: "Tsing, 2010, MÄnoa 22(2)",
    citationFull:
      'Tsing, Anna. "Arts of Inclusion, or How to Love a Mushroom." MÄnoa, Vol. 22, No. 2, Wild Hearts: Literature, Ecology, and Inclusion (Winter 2010), pp. 191â€“203. University of Hawai\'i Press.',
  },

  sections: {
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // SECTION 1: Opening â€” The Underground City (pp. 191â€“192)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    opening: {
      id: "opening",
      title: "Arts of Inclusion, or How to Love a Mushroom",
      subtitle: "The Underground City",
      pageRange: "191â€“192",
      paragraphs: [
        {
          id: "open-1",
          page: 191,
          text: `Next time you walk through a forest, look down. A city lies under your feet. If you were somehow to descend into the earth, you would find yourself surrounded by the city's architecture of webs and filaments. Fungi make those webs as they interact with the roots of trees, forming joint structures of fungus and root called mycorrhiza. Mycorrhizal webs connect not just root and fungus, but alsoâ€”by way of fungal filamentsâ€”tree and tree, in forest entanglements. This city is a lively scene of action and interaction. There are many ways here to eat and to share food. There are recognizable forms of hunting. For example, some fungi lasso little soil worms called nematodes for dinner. But this is one of the crudest ways to enjoy a meal. Experts in refinement, the mycorrhizal fungi siphon energy-giving sugars from trees. Some of those sugars are redistributed through the fungal network from tree to tree. Others support dependent plants, such as mushroom-loving mycophiles that tap the network to send out pale or colorful stems of flowers (e.g., Indian pipes, coral-root orchids). Meanwhile, like an inside-out stomach, fungi secrete enzymes into the soil around them, digesting organic materialâ€”and even rocksâ€”and absorbing nutrients that are released in the process. These nutrients are also available for trees and other plants, which use them to produce more sugar for themselvesâ€”and for the network.`,
        },
        {
          id: "open-2",
          page: 191,
          text: `Throughout this process, there is a whole lot of smelling going on, as plants, animals, and fungi sniff out not just good meals but also good partners. And what wonderful smells, even for an animal nose, like mine! (Some fungi, such as truffles, depend on animals to smell out their reproductive bodies, to spread around their spores.) Reach down and smell a clot of forest earth; it smells like the underground city of fungi.`,
        },
        {
          id: "open-3",
          page: 191,
          text: `As with human cities, this underground city is a site of cosmopolitan transactions. Unfortunately, humans have mainly ignored this lively cosmopolitanism. We have built our human cities through destruction and simplification, chopping down forests and replacing them with food-growing plantations while we live on asphalt and concrete. In agribusiness plantations, we coerce plants to grow without the assistance of other beings, including fungi in the soil. We replace fungally supplied nutrients with fertilizers obtained from the mining and chemical industries, with their trails of pollution and exploitation. We breed our crops by isolating them in chemical stews, crippling them, like caged and beakless chickens. We maim and simplify crop plants until they no longer know how to participate in multispecies worlds. One of the many extinctions that result from all this planning is the cosmopolitanism of the underground city. And almost no one notices, because so few humans even know of the existence of that city.`,
        },
        {
          id: "open-4",
          page: 192,
          text: `Yet a good many of those few who do notice fungi love them with a breathless passion. Gourmets, herbalists, and those who would remediate world ecology often become devotees of the fungal world. Wild mushroom foragers praise their unexpected bounty, their colors, tastes, and smells, and their promise of a livelihood from the woods. How many times have foragers told me of the heat of "mushroom fever," which drives them to dodge their other obligations to take up the wild thrill of the chase? Even commercial agents are giddy with the unpredictability of deals involving a capricious commodity. Scientists who study fungi rave about them in a manner quite dissimilar to scholars of fruit flies or HeLa cells. And, while some fungal devotees are content with personal association with fungi, others long to share their passion with the world.`,
        },
        {
          id: "open-5",
          page: 192,
          text: `How do lovers of fungi practice arts of inclusion that call to others? In these times of extinction, when even slight acquaintance can make the difference between preservation and callous disregard, we might want to know.`,
        },
      ],
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // SECTION 2: Noticing (pp. 192â€“195)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    noticing: {
      id: "noticing",
      title: "Noticing",
      pageRange: "192â€“195",
      paragraphs: [
        {
          id: "not-1",
          page: 192,
          text: `Henning Knudsen, curator of fungi at Copenhagen University's Botanical Museum, shows me around the fungi collection at the herbarium in April 2008. At first the aisles seem neat and impersonal. Then we open the folded envelopes and expose dried specimens, each named and labeled by its collector. Hiding in their dust lie the shriveled but still talking mushrooms, carrying their names and the names of their collectors into the story of life on earth.`,
        },
        {
          id: "not-2",
          page: 192,
          text: `Taxonomy is not very popular these days; indeed, detractors think of it as dry classification that spoils all enjoyment. But handling the specimens at the herbarium, it is easy to feel the pleasure of naming. Here, through naming, we notice the diversity of life. Taxonomy was once closely allied with drawing, another art of noticing.`,
        },
        {
          id: "not-3",
          page: 192,
          text: `Northern Europe, including Britain, is the homeground of amateur as well as scientific botanizing, the collecting and naming of plants. Still, noticing fungi did not come easily, Dr. Knudsen explains, because northern Europeans have despised mushroomsâ€”perhaps a reminder of their pagan past. It took a nineteenth-century French-born monarch of Sweden, Karl Johan, to bring even the prized king bolete (also, cep or porcini) to the attention of Scandinaviansâ€”and the mushroom is still known by his name.`,
        },
        {
          id: "not-4",
          page: 193,
          text: `Besides, fungi are difficult to collect and identify because their bodies tend to be underground. Only their reproductive organsâ€”the mushroomsâ€”come up into the air, and those only sporadically, sometimes in intervals of many years.`,
        },
        {
          id: "not-5",
          page: 193,
          text: `Dr. Knudsen tells me about Elias Fries (1794â€“1878), the father of modern systematic mycology. Like Linnaeus, Fries was a Swede and a lover of plants; Fries extended Linnean botany to the world of fungi. His work was made possible through a combination of his extraordinary memory and extraordinary passion. He recognized five thousand species, remembering them from year to year across the mushroom-empty times. Many of the specimens he collected were from near the village where he was born and first learned to love mushrooms. Dr. Knudsen remembers Fries' account of his early, persistent love. When, as a boy, he found an enormous specimen of the species Tricholoma collosum, he was thrilled: "I love my sister, I love my father, but this is better."`,
        },
        {
          id: "not-6",
          page: 194,
          text: `To this day, more than half a century later, I remember with gratitude the admiration that seized me when in 1806 I went with my mother to a burnt-down forest to pick strawberries and there I succeeded in finding an unusually large specimen of Hydnum coralloides, which was the first thing that induced me to study fungi. (Fries 1955: 140â€“141)`,
          isQuote: true,
          quoteAuthor: "Elias Fries",
        },
        {
          id: "not-7",
          page: 194,
          text: `Afterwards, Fries noticed fungi everywhere and, indeed, devoted his life to noticing them. Through his taxonomy, Fries brought fungi to public attention. His enthusiasm encouraged the founding of a line of systematic mycologists, to which Dr. Knudsenâ€”mushroom sociologist and coeditor of Nordic Macromycetesâ€”is an heir.`,
        },
        {
          id: "not-8",
          page: 194,
          text: `The line of mycologists stretches far beyond northern Europe. Consider the polymath naturalist Minakata Kumagusu (1867â€“1941), remembered for offering the Emperor of Japan a box of horse manureâ€”containing interesting species of slime mold. Minakata's watercolors bring together art and taxonomy. They guide our attention. The colors swirl; the fungi pose; the herbarium is alive.`,
        },
        {
          id: "not-9",
          page: 194,
          text: `Noticing inspires artists as well as naturalists. American composer John Cage (1912â€“1992) was a mushroom hunter who believed noticing mushrooms and noticing sounds in music were related skills. In contrast to other musicians, Cage wanted a music that forced listeners to attend to all the sounds around them, whether composed or incidental. Teaching and writing about mushrooms helped him explain how to practice an open yet focused attention. In one of his compositions, Indeterminacy, one-minute-long paragraphs, thoughts, and anecdotes are read aloud in random orderâ€”sometimes to the accompaniment of dance or music. Indeterminacy is exemplified in many levels of open-endedness. Many of the stories are about people's interactions with mushrooms. Mushrooms, too, are unpredictable; they help one listen and pay attention.`,
        },
        {
          id: "not-10",
          page: 195,
          text: `The parsed, anecdotal style of Indeterminacy is reminiscent of other formal poetics, such as haiku. Noticing mushroomsâ€”especially those aromatic delights Japanese call matsutakeâ€”has not escaped haiku poets as a subject. Recognition of indeterminacy similarly guides the haiku, as in this poem by Kyorai Mukai (1651â€“1704):`,
        },
        {
          id: "not-11",
          page: 195,
          text: `Matsutake yo hito / Ni toraruru hana no saki\n\nMatsutake; / Taken by someone else / Right in front of my nose.`,
          isQuote: true,
          quoteAuthor: "Kyorai Mukai (1651â€“1704)",
        },
        {
          id: "not-12",
          page: 195,
          text: `Matsutake (Tricholoma matsutake and allies) are much-loved mushrooms in Japan. They cannot be cultivated, so they draw mushroom lovers into the forest to search for them. Matsutake are difficult to spot. Always it seems that the matsutake we are about to find has been taken by another. We must look more carefully.`,
        },
        {
          id: "not-13",
          page: 195,
          text: `The poem's phrasing and sound draw us into a world where we are able to notice. Even this one valued species group, matsutake, can inspire cosmopolitan worlds of mushroom loving. Kyorai's poem can spur us to consider matsutake worldsâ€”and their arts of inclusion.`,
        },
      ],
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // SECTION 3: Conjuring Matsutake Worlds â€” Democratic Science (pp. 195â€“198)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    democraticScience: {
      id: "democraticScience",
      title: "Conjuring Matsutake Worlds: Toward a Democratic Science",
      pageRange: "195â€“198",
      paragraphs: [
        {
          id: "dem-1",
          page: 195,
          text: `Under the name of Matsiman (Americans sometimes call matsutake matsi), Andy Moore has dedicated his life to producing and spreading knowledge about matsutake mushrooms. Moore is not a commercial producer; matsutake cannot be cultivated. He is not a gourmet cook; he doesn't even like the taste and smell of matsutake. He is not a trained scientist, although he participates in matsutake-oriented science. Rather, his goal is to make knowledge accessible. He wants a democratic, inclusive science. Through attention to matsutake, he spreads knowledgeâ€”and his vision of democratic science. On his website, Matsiman.com, Moore posts everything he can find about matsutake and prompts discussions about mushroom worlds.`,
        },
        {
          id: "dem-2",
          page: 196,
          text: `Matsutake inhabit northern hemisphere forests, associating particularly with conifers such as pine. It's a wide-ranging species group, with populations stretching across Eurasia, down through North Africa, and across the Atlantic into Canada, the United States, and Mexico. In most of the places where the mushrooms grow, people do not enjoy them as a food. Europeans first called them Tricholoma nauseosum to indicate their dislike of the smell. (U.S. mushroomer David Aurora [1986:191] describes the smell as "a provocative compromise between 'red hots' and dirty socks.") But for many Japanese, the smell is enticing. Grilled or cooked in soup, matsutake are an expensive gourmet treat as well as a reminder of the beauty of the autumn season.`,
        },
        {
          id: "dem-3",
          page: 196,
          text: `Until the 1970s, Japanese pine forests produced a rich complement of matsutake. But pine forests, associated with village life, declined after World War II. In this same period, Japanese incomes rose. In the 1980s, Japan began importing matsutake from around the world. The prices were high; mushroom entrepreneurs rushed to enter the fray. At first, Japanese in the diaspora who had found mushrooms for their own use abroad guided Japan's imports. But soon enough, all kinds of people were picking matsutakeâ€”whether or not they enjoyed the mushroom for their own use.`,
        },
        {
          id: "dem-4",
          page: 196,
          text: `Andy Moore was one of these people. Originally from Louisiana, he found his way into the Oregon woods during the U.S. war in Vietnam. Having enlisted as a soldier, he was disillusioned by what he saw and experienced there. He felt lucky when he managed to aggravate a childhood injury and was sent home. Based in the U.S., he drove a jeep at a marine base. But one day he received word that he was to be sent back to Southeast Asia. He was not willing to go. With pride, he recounts how he returned the jeep, walked out of the gates, and declared himself AWOL ("absent without leave"). To avoid capture, he ran to the mountains, where he made a living in various kinds of forest work, such as cutting firewood. He loved the forest. The experience gave him a new goal: "To live in the woods and never pay rent."`,
        },
        {
          id: "dem-5",
          page: 196,
          text: `At the very end of the 1980s, matsutake madness came to the U.S. Pacific Northwest. The woods filled with pickers. Matsutake buyers set up tents by the side of the road, eager to export the mushrooms to Japan. Japan at that time was still wealthy from the boom economy; prices were very good; and pickers hoped to strike it rich with "white gold." Moore tried picking and found it very much to his liking.`,
        },
        {
          id: "dem-6",
          page: 197,
          text: `Moore had an ideal situation for pickingâ€”and studyingâ€”the mushrooms. He had obtained a position as the caretaker for a large private forest. He lived in a small cabin at the top of the property, and his job allowed him plenty of time and opportunity to explore. He discovered matsutake on his property just waiting to be picked. Because matsutake has a long-term relationship with particular trees, the best way to pick is to go to the same trees every year to see if there are mushrooms. But most pickers in the U.S. Pacific Northwest pick on national forests with open access; they go back to the same trees, but, often enough, other pickers have beat them to the harvest. ("Matsutake / Taken by someone else / Right in front of my nose"!) Moore's situation was unique: he had a large forest area to harvest, and a locked gate to keep out other harvesters.`,
        },
        {
          id: "dem-7",
          page: 197,
          text: `The situation awakened his curiosity about the mushrooms. When the fungus is not fruiting, the area around even the most heavily mycorrhizal trees is empty and unpromising; suddenly and unexpectedly mushrooms spring up. What factors control when mushrooms appear? Moore knew various contradictory rumors about this question, but there seemed to be no solid, experimental knowledge. So he decided to start his own experiment. Because other pickers did not intrude on his haven, he was able to mark all the spots where matsutake appeared. Then he was able to keep records of exactly when they appeared, how many, what weight, and their price. These records could be correlated with rainfall, temperature, and other factors.`,
        },
        {
          id: "dem-8",
          page: 197,
          text: `Moore did not have either training or mentoring for his experiments. He simply started doing them. Later, he worked with U.S. Forest Service researchers on their projects and became a coauthor of several papers. But in those circumstances he was an assistant, without the ability to frame questions or suggest methods. On his own, he was forced to invent science using his own means. Obscure terminology, standardized scales, and sophisticated testing procedures hardly seemed necessary to him. Instead, he started with the questions pickers want to know: when and where do the mushrooms appear?`,
        },
        {
          id: "dem-9",
          page: 197,
          text: `With some startling results in hand (his mushrooms responded to temperature not rainfall), Moore decided to make his results public. In 1998, Moore opened the Matsiman.com website. The site was not, however, designed to be Moore's personal blog; instead, he facilitated the making and exchange of knowledge. Everyone, the site suggests, can do research; all it takes is curiosity. The site poses the question, "Who is Matsiman?"`,
        },
        {
          id: "dem-10",
          page: 197,
          text: `Anyone who loves hunting, learning, understanding, protecting, educating others, and respects matsutake mushroom and its habitat is matsiman. Those of us who can't get enough understanding, constantly trying to determine what caused this or that to happen, or not happen. We are not limited to nationality, gender, education, or age group. Anyone can be a matsiman. There is at least one in every picking community.`,
          isQuote: true,
          quoteAuthor: "Matsiman.com",
        },
        {
          id: "dem-11",
          page: 198,
          text: `To appreciate the extraordinary nature of this public knowledge, it is important to allow Moore his eccentricities. His forest-caretaker position has ended, but he has found a job as a campground host, which allows him to live year-round in a motor home as a steward of public lands. To live in the woods and never pay rent!`,
        },
        {
          id: "dem-12",
          page: 198,
          text: `He tries out various mushroom-based commodities, such as smoked mushroom seasoning and dried mushroom snacks. It seems unlikely that such experiments generate much of an income, but they keep Moore's exuberance for mushrooms high. Meanwhile, there is nothing proprietary about any of the many ideas he generates. He believes that all knowledge should be accessible; the Matsiman site builds a community of knowledge. Moore loves nothing better than to introduce new people to the world of matsutake, whether through his site or as a visitor to the forests he knows well. I spent a very happy time learning about Moore's matsutake under tanoak, Shasta red fir, and pine.`,
        },
      ],
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // SECTION 4: Conjuring Matsutake Worlds â€” Inclusive Well-being (pp. 198â€“200)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    inclusiveWellbeing: {
      id: "inclusiveWellbeing",
      title: "Conjuring Matsutake Worlds: Toward More Inclusive Modes of Well-being",
      pageRange: "198â€“200",
      paragraphs: [
        {
          id: "inc-1",
          page: 198,
          text: `Now consider a different mushroom-based project of inclusion: an appeal to matsutake to help us build models of well-being in which humans and nonhumans alike might thrive. The charismatic and energetic organizer Fumihiko Yoshimura has been studying and working with matsutake for most of his life. As a scientist, Dr. Yoshimura conducts some of his work in laboratories and forest field sites. But he is also founder of the Matsutake Crusaders, a Kyoto-based citizens' initiative to revitalize Japan's matsutake forests. The Matsutake Crusaders are volunteers; their job is sculpting the forest to bring back the health of red pine with its associate, matsutake. Matsutake here is not just a delicious food; it is also a valued participant in a world of ecological well-being. The Crusaders' motto is "Let's revitalize the forest so we can all eat sukiyaki." Sukiyaki (a meat and vegetable stew best made with matsutake) is a popular and traditional food. Sometimes sukiyaki is eaten on festive occasions and sometimes during outings in which urbanites enjoy the fresh air. Eating together in appreciation of the natural world, people revitalize their selves as well as their forests. Dr. Yoshimura's movement brings participants into the countryside to offer new vitality to the world.`,
        },
        {
          id: "inc-2",
          page: 198,
          text: `Dr. Yoshimura draws on a long legacy of applied matsutake science in Japan. Minoru Hamada deserves credit for making matsutake an object of modern science in the twentieth century. Dr. Hamada designed matsutake research to address basic biological questions while simultaneously promoting the production of a valued economic product. After World War II, Dr. Hamada trained a cohort of matsutake researchers who in turn trained many of today's researchers. Makoto Ogawa, one of Dr. Hamada's students, was particularly effective in spreading matsutake research by convincing the government to send matsutake researchers to every prefectural forestry station. Dr. Yoshimura spent most of his career in Iwate prefecture conducting matsutake research and promoting matsutake.`,
        },
        {
          id: "inc-3",
          page: 199,
          text: `While researchers have successfully grown matsutake mycelia and even matsutake-pine mycorrhiza in laboratories, no one has succeeded in getting these cultivated stocks to produce a mushroom. The focus in promoting matsutake, therefore, has been to make the kind of forest where matsutake likes to live. In Japan, matsutake associates with red pine, Pinus densiflora, a pioneer species of disturbed areas. For many centuries, villagers in Japan have created disturbed forests by shifting cultivation and selective harvesting of broadleaf trees that are used for firewood and charcoal. Villagers have traditionally also collected herbs and grass, and raked leaves for green fertilizer. These practices left bright, open hillsides of exposed soilsâ€”the conditions preferred by red pine and its partner, matsutake.`,
        },
        {
          id: "inc-4",
          page: 199,
          text: `All this changed after World War II. Villagers started to use fossil fuels for heating and tractors instead of oxen for plowing. People no longer collected firewood to make charcoal, or gathered leaves and grass. Young people moved to the city, and village forests were neglected. Broadleaf trees grew back with a vengeance, shading out pines; furthermore, pines were weakened by a wilt disease spread by an imported nematode. In the deep shade of the neglected broadleaf forests, pines died. Without their hosts, matsutake also expired. Many matsutake lovers described hillsides they had seen white with mushrooms when they were children, now without a single host pine.`,
        },
        {
          id: "inc-5",
          page: 199,
          text: `By the 1970s, urbanites became nostalgic for the village forests of their youthâ€”places to see wildflowers in spring, fireflies in summer, and the leaves changing in autumn. Citizens' movements emerged to address the impoverished environment of modern Japan. Unlike wilderness advocates in the United States, many Japanese focused on the lively ecologies of sites that had long experienced human disturbance: the verges of roads, the flood plains of rivers, village irrigation networks and rice paddiesâ€”and the open village forest. In these disturbed sites, something that might be called a sustainable relationship between humans and nonhumans could be imagined. Preservation came to mean not human withdrawal from nature but rather guided disturbance. In the process of studying ancient methods of disturbance, modern citizens educated themselves about being in nature.`,
        },
        {
          id: "inc-6",
          page: 199,
          text: `It was from this milieu that Dr. Yoshimura's Matsutake Crusaders emerged. The name of the group is derived from the popular mobilization effort of the 1980s, known as the Woodland Maintenance Crusaders, in which student volunteers removed grass and weeds that were choking the forest. Dr. Yoshimura's group has the added excitement of not just fixing the forest but also, possibly, producing tasty mushrooms. His methods are to promote the growth of pine by removing evergreen broadleaves completely, thus opening hillsides to light. As the pines come back, the hillsides become open forests where wildflowers, rabbits, and hawks can find niches. But no one can guarantee mushrooms. The volunteers must do the work for the love of nature, not just for matsutake.`,
        },
        {
          id: "inc-7",
          page: 200,
          text: `All of this leads me to a Saturday in June 2006, when my research collaborator Shiho Satsuka and I joined the Crusaders for a day of forest work and play. The site was a steep hillside that had become choked with young evergreen broadleaves. The many slender trees were so close together that a person could not peer very far into the forest, much less walk through it. Our task, Dr. Yoshimura explained, was to clear the land so that only red pine would grow. When Dr. Satsuka and I arrived, a group of men were busy removing trees and shrubs. Surprisingly, to me, they were even digging out the roots of the broadleaf trees. It was labor-intensive work, all done with hand tools, and I realized it would take years to clear even this one mountain. Still, everyone there was cheerful and full of enthusiasm.`,
        },
        {
          id: "inc-8",
          page: 200,
          text: `Dr. Yoshimura showed us the adjoining hillside, which after much work was open, bright, and green with pine. "This is what our hillside might have looked like in earlier days," he explained. Animals and birds had settled inâ€”and there was hope for mushrooms. Meanwhile, other projects were underway: a garden; a charcoal-making kiln; and a beetle-breeding mound for hobbyists. At the base of the hill was a place to eat, relax, and talk. At lunchtime, the workers sweating on the hill came down. Their colleagues had been constructing a long bamboo aqueduct for serving a special summer dish: noodles in the stream (or "flowing somen"). At the high end of the aqueduct, we poured hot steaming noodles into the cool running water. Everyone gathered around the bamboo "stream" and grabbed the flowing noodles with their chopsticks, mixing them with sauces in ready bowls. There was much joking and laughter. I met rural landowners and urban housewives, and even an anthropology graduate student. Someone offered an amusing haiku about coming from America. Someone else showed off the ingeniously handcrafted crabs he had made. A landowner showed pictures of his property, which he hoped to revitalize using Crusader techniques. We lingered long together before going back to work. This was a revitalization not just of the hillside but of our senses.`,
        },
      ],
    },

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // SECTION 5: Loving in a Time of Extinction (pp. 200â€“201)
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    conclusion: {
      id: "conclusion",
      title: "Loving in a Time of Extinction",
      pageRange: "200â€“201",
      paragraphs: [
        {
          id: "con-1",
          page: 200,
          text: `The forms of love I have called up in this paper are diverse, even contradictory. Despite the fact that Andy Moore and Dr. Yoshimura are both concerned with matsutake mushrooms, they might find each other's practices strange. The sciencesâ€”and the social and natural ecologies in which they participateâ€”are linked but not continuous in any simple way.`,
        },
        {
          id: "con-2",
          page: 201,
          text: `For Moore, the wild mushroom economy, with its encouragement of participation by people who love the woods, creates the possibilities for vernacular science. He works to free knowledge production from the rule of experts; anyone with a passionate curiosity can contribute. For Dr. Yoshimura, citizens' interest in environmental remediation offers the chance to build connections between human and nonhuman well-being. For him, efforts to re-sculpt forest landscapes make the volunteers happier and healthier, as they work for a more hospitable multispecies environment.`,
        },
        {
          id: "con-3",
          page: 201,
          text: `Both interventions contrast with the hegemonic, extinction-oriented practice of what might be called "plantation science." Plantation science teaches us to strive for control of human and nonhuman landscapes. For those who love wild mushrooms, full mastery is not the goal; indeterminacy is part of the point. Wherever volunteers gather to promote disturbance forests, or matsutake pickers stop to ponder why the mushrooms come up, plantation science loses a little authority.`,
        },
        {
          id: "con-4",
          page: 201,
          text: `In plantation science, managers and specialists make decisions; harvesters are never consulted about the crops. In plantation science, well-being is a formula defined at the top, and no one stops to ask, "Well-being for whom?" In plantation science, experts and their objects of expertise are separated by the will to power; love does not flow between expert and knowledge-object. In contrast, my stories describe how advocacy for mushrooms can lead to projects for building democratic science and publicly inclusive well-being. It's the passion for the mushroomâ€”in all the details of its social-natural ecologyâ€”that makes these projects possible.`,
        },
        {
          id: "con-5",
          page: 201,
          text: `At the intersection between the sciences of nature and the sciences of culture, a new model is afoot, the key characteristic of which is multispecies love. Unlike earlier cultural studies of science, its raison d'Ãªtre is not, mainly, the critique of science, although it can be critical. Instead, it encourages a new, passionate immersion in the lives of the nonhuman subjects being studied. Once, such immersion was allowed only to natural scientists, and mainly on the condition that the love didn't show. The critical intervention of this new form of science is that it encourages learnedness in natural science along with all the tools of the humanities and the arts. The objectives of those of us in this field are to open the public imagination to make new ways of relating to nature possible. For this, we need to summon the unexpected talents othersâ€”whether scientists or nonscientistsâ€”have brought to this task. My stories of mushroom lovers and their projects are a small contribution.`,
        },
      ],
    },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // MAPPING: which article sections are relevant to which questions
  // Use this to display the right text excerpt alongside each question
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  questionToSections: {
    0: { sectionId: "opening", paragraphIds: ["open-1", "open-3"] },       // Underground city metaphor
    1: { sectionId: "noticing", paragraphIds: ["not-5", "not-9", "not-12"] }, // Fries, Cage, matsutake
    2: { sectionId: "democraticScience", paragraphIds: ["dem-1", "dem-10"], secondSection: "inclusiveWellbeing", secondParagraphIds: ["inc-1"] }, // Moore vs Yoshimura
    3: { sectionId: "inclusiveWellbeing", paragraphIds: ["inc-5"] },        // Guided disturbance
    4: { sectionId: "conclusion", paragraphIds: ["con-3", "con-4"] },       // Plantation science
    5: { sectionId: "conclusion", paragraphIds: ["con-2", "con-5"], secondSection: "opening", secondParagraphIds: ["open-3"] }, // Margins â†’ center
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // MAPPING: which article sections are relevant to which concepts
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  conceptToSections: {
    mycorrhiza: { sectionId: "opening", paragraphIds: ["open-1", "open-2"] },
    noticing: { sectionId: "noticing", paragraphIds: ["not-2", "not-7", "not-9"] },
    "arts-inclusion": { sectionId: "opening", paragraphIds: ["open-4", "open-5"] },
    indeterminacy: { sectionId: "noticing", paragraphIds: ["not-9", "not-10", "not-11"] },
    plantation: { sectionId: "conclusion", paragraphIds: ["con-3", "con-4"] },
    multispecies: { sectionId: "conclusion", paragraphIds: ["con-5"] },
  },
};
