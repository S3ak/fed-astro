export const SITE = {
  title: "FED VOC",
  description: "Vocationl learning resources",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = ``;

export const COMMUNITY_INVITE_URL = ``;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

// NOTE: Keep as reference.
// export type Sidebar = Record<
//   typeof KNOWN_LANGUAGE_CODES[number],
//   Record<string, { text: string; link: string }[]>
// >;

type Module = {
  title: string;
  items: { text: string; link: string }[];
};

type Topic = {
  title: string;
  items: Module[];
};

type Year = {
  title: string;
  items: Topic[];
};

export type DeepSidebar = Record<typeof KNOWN_LANGUAGE_CODES[number], Year[]>;

export const SIDEBAR: DeepSidebar = {
  en: [
    {
      title: "Year 1",
      items: [
        {
          title: "HTML and CSS",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-1/overview",
                },
                {
                  text: "Introduction",
                  link: "en/html-css/module-1/introduction-to-html",
                },
                {
                  text: "File management",
                  link: "en/html-css/module-1/file-management",
                },
                {
                  text: "Fonts",
                  link: "en/html-css/module-1/fonts",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-2/module-2",
                },
                {
                  text: "Images and Icons",
                  link: "en/html-css/module-2/images-icons",
                },
                {
                  text: "Forms",
                  link: "en/html-css/module-2/forms",
                },
                {
                  text: "Navigation",
                  link: "en/html-css/module-2/navigation",
                },
                {
                  text: "CSS Box Model",
                  link: "en/html-css/module-2/css-box-model",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-3/module-3",
                },
                {
                  text: "Positioning",
                  link: "en/html-css/module-3/positioning",
                },
                {
                  text: "Flexbox",
                  link: "en/html-css/module-3/flexbox",
                },
                {
                  text: "CSS Grids",
                  link: "en/html-css/module-3/css-grids",
                },
                {
                  text: "Media Queries",
                  link: "en/html-css/module-3/media-queries",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-4/module-4",
                },
                {
                  text: "Bug Fixing",
                  link: "en/html-css/module-4/bug-fixing",
                },
                {
                  text: "Animations and transitions",
                  link: "en/html-css/module-4/animations-transitions",
                },
                {
                  text: "CSS Variables",
                  link: "en/html-css/module-4/css-variables",
                },
                {
                  text: "Common layouts",
                  link: "en/html-css/module-4/common-layouts",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Brief",
                  link: "en/html-css/ca/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/html-css/ca/marking-criteria",
                },
              ],
            },
            {
              title: "Semester Project 1",
              items: [
                {
                  text: "Brief",
                  link: "en/semester-project/brief",
                },
                // {
                //   text: "Marking Criteria",
                //   link: "en/html-css/ca/marking-criteria",
                // },
              ],
            },
          ],
        },
        {
          title: "Programming foundations",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/overview",
                },
                {
                  text: "Getting Started",
                  link: "en/programming-foundations/module-1/getting-started",
                },
                {
                  text: "Strings, Numbers, Booleans",
                  link: "en/programming-foundations/module-1/strings-numbers-booleans",
                },
                {
                  text: "Making Decisions",
                  link: "en/programming-foundations/module-1/making-decisions",
                },
                {
                  text: "Loops",
                  link: "en/programming-foundations/module-1/loops",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/programming-foundations/module-2/module-2",
                },
                {
                  text: "String properties",
                  link: "en/programming-foundations/module-2/string-properties",
                },
                {
                  text: "Arrays",
                  link: "en/programming-foundations/module-2/arrays",
                },
                {
                  text: "null, Objects and arrays of objects",
                  link: "en/programming-foundations/module-2/arrays-of-objects",
                },
                {
                  text: "Introduction to functions",
                  link: "en/programming-foundations/module-2/intro-functions",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "CA Brief",
                  link: "en/programming-foundations/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/programming-foundations/ca-guide",
                },
              ],
            },
          ],
        },
        {
          title: "Javascript 1",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-1/overview",
                },
                {
                  text: "Introductory concepts",
                  link: "en/javascript-1/module-1/intro-concepts",
                },
                {
                  text: "Manipulating the DOM",
                  link: "en/javascript-1/module-1/manipulating-dom",
                },
                {
                  text: "Creating HTML from objects",
                  link: "en/javascript-1/module-1/html-from-objects",
                },
                {
                  text: "Creating HTML in functions",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-2/module-2",
                },
                {
                  text: "forEach, setTimeout and setInterval",
                  link: "en/javascript-1/module-2/callback-functions",
                },
                {
                  text: "DOM events",
                  link: "en/javascript-1/module-2/dom-events",
                },
                {
                  text: "length, trim, addEventListener and onkeyup",
                  link: "en/javascript-1/module-2/length-trim-eventlistener",
                },
                {
                  text: "More DOM concepts",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-3/module-3",
                },
                {
                  text: "Query Strings and GET requests",
                  link: "en/javascript-1/module-3/query-string-parameters",
                },
                {
                  text: "Handling errors",
                  link: "en/javascript-1/module-3/handling-errors",
                },
                {
                  text: "Arrow functions and promises",
                  link: "en/javascript-1/module-3/arrow-functions-promises",
                },
                {
                  text: "More about calling APIs",
                  link: "en/javascript-1/module-3/more-about-apis",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Skipping Certain API results",
                  link: "en/javascript-1/module-4/skipping-certain-api-results",
                },
                {
                  text: "Single API results and the filter method",
                  link: "en/javascript-1/module-4/single-api-results",
                },
                {
                  text: "Query string parameters",
                  link: "en/javascript-1/module-4/get-requests",
                },
                {
                  text: "Form validation",
                  link: "en/javascript-1/module-4/form-validation",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Course Assignment Brief",
                  link: "en/javascript-1/ca",
                },
                // {
                //   text: "Marking Criteria",
                //   link: "en/javascript-1/ca-guide",
                // },
              ],
            },
          ],
        },
        {
          title: "Interaction design",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/interaction-design/module-1/module-1",
                },
                {
                  text: "What is Interaction Design",
                  link: "en/interaction-design/module-1/intro-interaction-design",
                },
                {
                  text: "Design Research",
                  link: "en/interaction-design/module-1/design-research",
                },
                {
                  text: "Personas and Scenarios",
                  link: "en/interaction-design/module-1/personas-scenarios",
                },
                {
                  text: "Usability Testing",
                  link: "en/interaction-design/module-1/usability-testing",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/interaction-design/module-2/module-2",
                },
                {
                  text: "Persuasion and Design Values",
                  link: "en/interaction-design/module-2/persuasion-design-values",
                },
                {
                  text: "Context and Platforms",
                  link: "en/interaction-design/module-2/context-platforms",
                },
                {
                  text: "Info Architecture and Design for the Middle",
                  link: "en/interaction-design/module-2/info-architecture",
                },
                {
                  text: "Design the Flow",
                  link: "en/interaction-design/module-2/design-flow",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/interaction-design/module-3/module-3",
                },
                {
                  text: "Metaphors, Affordances, and Signifiers",
                  link: "en/interaction-design/module-3/affordances",
                },
                {
                  text: "Take Action and Get Feedback",
                  link: "en/interaction-design/module-3/action-feedback",
                },
                {
                  text: "Handling Errors",
                  link: "en/interaction-design/module-3/handling-errors",
                },
                {
                  text: "Practical UX design",
                  link: "en/interaction-design/module-3/practical-ux-design",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Course Assignment Brief",
                  link: "en/interaction-design/ca",
                },
                // {
                //   text: "Marking Criteria",
                //   link: "en/javascript-1/ca-guide",
                // },
              ],
            },
          ],
        },
        {
          title: "CMS",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/cms/module-1/module-1",
                },
                {
                  text: "What are CMSs and why use them",
                  link: "en/cms/module-1/intro-cms",
                },
                {
                  text: "How to get set up with WordPress",
                  link: "en/cms/module-1/intro-wordpress",
                },
                {
                  text: "Site Administration",
                  link: "en/cms/module-1/site-administration",
                },
                {
                  text: "Appearance",
                  link: "en/cms/module-1/appearance",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/cms/module-2/module-2",
                },
                {
                  text: "Introduction to PHP",
                  link: "en/cms/module-2/intro-php",
                },
                {
                  text: "Child themes",
                  link: "en/cms/module-2/child-themes",
                },
                {
                  text: "Working with child themes",
                  link: "en/cms/module-2/working-with-child-themes",
                },
                {
                  text: "WordPress REST API",
                  link: "en/cms/module-2/wordpress-rest-api",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Course Assignment Brief",
                  link: "en/cms/ca",
                },
                // {
                //   text: "Marking Criteria",
                //   link: "en/cms/ca-guide",
                // },
              ],
            },
          ],
        },
        {
          title: "Exam",
          items: [
            {
              title: "Semester Exam",
              items: [
                {
                  text: "Exam Brief",
                  link: "en/exam-1/brief",
                },
                // {
                //   text: "Marking Criteria",
                //   link: "en/cms/ca-guide",
                // },
              ],
            },
          ],
        },
      ],
    },
  ],
};
