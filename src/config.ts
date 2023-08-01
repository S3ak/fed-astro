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
        {
          title: "Portfolio",
          items: [
            {
              title: "Semester Portfolio",
              items: [
                {
                  text: "Portfolio Brief",
                  link: "en/portfolio-1/brief",
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
    {
      title: "Year 2",
      items: [
        {
          title: "Introduction",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-1/overview",
                },
              ],
            },
          ],
        },
        {
          title: "CSS Frameworks",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/overview",
                },
                {
                  text: "Introduciton to frameworks",
                  link: "en/programming-foundations/module-1/getting-started",
                },
                {
                  text: "Introduction to Bootstrap",
                  link: "en/programming-foundations/module-1/strings-numbers-booleans",
                },
                {
                  text: "Introduction to SASS",
                  link: "en/programming-foundations/module-1/making-decisions",
                },
                {
                  text: "Customising Bootstrap",
                  link: "en/programming-foundations/module-1/loops",
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
            {
              title: "Addtional Content",
              items: [
                {
                  text: "Introduction to Tailwind CSS",
                  link: "en/programming-foundations/ca",
                },
                {
                  text: "Building with Tailwind CSS",
                  link: "en/programming-foundations/ca-guide",
                },
              ],
            },
          ],
        },
        {
          title: "Javascript 2",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-1/overview",
                },
                {
                  text: "Debugging",
                  link: "en/javascript-1/module-1/intro-concepts",
                },
                {
                  text: "JSDocs",
                  link: "en/javascript-1/module-1/manipulating-dom",
                },
                {
                  text: "JSON",
                  link: "en/javascript-1/module-1/html-from-objects",
                },
                {
                  text: "Local Storage",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
                {
                  text: "Destructing",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
                {
                  text: "Map",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
                {
                  text: "Set",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
                {
                  text: "Classes",
                  link: "en/javascript-1/module-1/html-in-functions",
                },
                {
                  text: "Advanced Topics",
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
                  text: "Array Methods",
                  link: "en/javascript-1/module-2/callback-functions",
                },
                {
                  text: "Map()",
                  link: "en/javascript-1/module-2/dom-events",
                },
                {
                  text: "filter()",
                  link: "en/javascript-1/module-2/length-trim-eventlistener",
                },
                {
                  text: "Reduce()",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
                {
                  text: "Find() and findIndex()",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
                {
                  text: "Some() and every()",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
                {
                  text: "Object Methods",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
                {
                  text: "Chaining",
                  link: "en/javascript-1/module-2/more-dom-concepts",
                },
                {
                  text: "Best Practices",
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
                  text: "ES6 Modules Introduction",
                  link: "en/javascript-1/module-3/query-string-parameters",
                },
                {
                  text: "ES6 Modules Setup",
                  link: "en/javascript-1/module-3/handling-errors",
                },
                {
                  text: "ES6 Modules Basics",
                  link: "en/javascript-1/module-3/arrow-functions-promises",
                },
                {
                  text: "Splitting Code",
                  link: "en/javascript-1/module-3/more-about-apis",
                },
                {
                  text: "Additional Info",
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
                  text: "Asynchoronous Code",
                  link: "en/javascript-1/module-4/skipping-certain-api-results",
                },
                {
                  text: "Callbacks",
                  link: "en/javascript-1/module-4/single-api-results",
                },
                {
                  text: "Promises",
                  link: "en/javascript-1/module-4/get-requests",
                },
                {
                  text: "Async/Await",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "API",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "REST",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "fetch()",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP Response status codes",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP Request Methods",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "Postman",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP GET Request Method",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP POST Request Method",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP PUT Request Method",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP PATCH Request Method",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "HTTP DELETE Request Method",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "URL Parameters",
                  link: "en/javascript-1/module-4/form-validation",
                },
                {
                  text: "JWT",
                  link: "en/javascript-1/module-4/form-validation",
                },
              ],
            },
            {
              title: "Module 5",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Factory functions",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Object literal",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "IIFE",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Module pattern",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Singleton pattern",
                  link: "en/javascript-1/module-4/module-4",
                },
                {
                  text: "Observer pattern",
                  link: "en/javascript-1/module-4/module-4",
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
            {
              title: "Additional Content",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-1/ca",
                },
                {
                  text: "Algorithms",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Big O Notation",
                  link: "en/coming-soon",
                },
                {
                  text: "Sort - Bubble sort",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Sort - Insert sort",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Sort - Selection Sort",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Search - Linear Search",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Search - Interploation Search",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Graphs - Breadth First",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Graphs - Dijkstra's Algorithm",
                  link: "en/javascript-1/ca-guide",
                },
                {
                  text: "Data Structures - Linked Lists",
                  link: "en/javascript-1/ca-guide",
                },
              ],
            },
          ],
        },
        {
          title: "Workflow",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/interaction-design/module-1/module-1",
                },
                {
                  text: "Git command line",
                  link: "en/interaction-design/module-1/intro-interaction-design",
                },
                {
                  text: "Git your own adventure",
                  link: "en/interaction-design/module-1/design-research",
                },
                {
                  text: "Introduction to Github Actions",
                  link: "en/interaction-design/module-1/personas-scenarios",
                },
                {
                  text: "Managing Secrets",
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
                  text: "Your working enviromnent",
                  link: "en/interaction-design/module-2/persuasion-design-values",
                },
                {
                  text: "Tailoring your enviromnent",
                  link: "en/interaction-design/module-2/context-platforms",
                },
                {
                  text: "Automating your workflow",
                  link: "en/interaction-design/module-2/info-architecture",
                },
                {
                  text: "Using a Bundler",
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
                  text: "Introduction to testing",
                  link: "en/interaction-design/module-3/affordances",
                },
                {
                  text: "Unit testing",
                  link: "en/interaction-design/module-3/action-feedback",
                },
                {
                  text: "End-to-end testing",
                  link: "en/interaction-design/module-3/handling-errors",
                },
                {
                  text: "Automated testing",
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
          title: "Semester Project 2",
          items: [
            {
              title: "Project",
              items: [
                {
                  text: "Brief",
                  link: "en/cms/module-1/module-1",
                },
                {
                  text: "Marketing Criteria",
                  link: "en/cms/module-1/intro-cms",
                },
              ],
            },
          ],
        },
        {
          title: "Industry Knowledge",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/exam-1/brief",
                },
                {
                  text: "Job options in web development",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Your first job",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Preparing your GitHub Account",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Creating your Portfolio website",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/exam-1/brief",
                },
                {
                  text: "Freelancing",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Positioning and pricing",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Finding clients",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Contracts",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Overview",
                  link: "en/exam-1/brief",
                },
                {
                  text: "Assessment guide",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Sorting Hat",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Finding clients",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Contracts",
                  link: "en/cms/ca-guide",
                },
              ],
            },
          ],
        },
        {
          title: "Development platforms",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Relational Datastores",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Non-Relational Datastores",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Caching",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "DBaaS",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Hosting",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Networking",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Baas",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "BaaS starter",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "DevOps",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Security",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Containerization",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Machine learning",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Marking Criteria",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Collaboration guide",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Case Studies",
              items: [
                {
                  text: "Text template",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Video template",
                  link: "en/cms/ca-guide",
                },
              ],
            },
          ],
        },
        {
          title: "JavaScript Frameworks",
          items: [
            {
              title: "Module 1",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Introduction",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Getting started with React",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "JSX",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Components",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Props",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Events",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "State",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Mapping out lists",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Conditional rendering",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "React dev tools",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Best practices",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Basic classes",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "CSS Modules",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "SASS",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Styled-components",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "UI & CSS Frameworks",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Using images",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "useState",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "useEffect",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "useReducer",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "useContext",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "State Management",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Zustand",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Redux Toolkit (Depreciated)",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "React Router",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "API Calls",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Using route params to fetch data",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Creating our own hooks",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "API Hook",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Forms",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "react-hook-form",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Module 5",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Testing in React",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "Deploying a site ot Netlify",
                  link: "en/cms/ca-guide",
                },
                {
                  text: "TypeScript",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Marking Criteria",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Additional content",
              items: [
                {
                  text: "RTK Query",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "TanStack Query",
                  link: "https://tanstack.com/query/latest",
                },
              ],
            },
          ],
        },
        {
          title: "Project Exam 2",
          items: [
            {
              title: "Brief",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Marking Criteria",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Additional content",
              items: [
                {
                  text: "RTK Query",
                  link: "en/portfolio-1/brief",
                },
              ],
            },
          ],
        },
        {
          title: "Portfolio 2",
          items: [
            {
              title: "Brief",
              items: [
                {
                  text: "Overview",
                  link: "en/portfolio-1/brief",
                },
                {
                  text: "Marking Criteria",
                  link: "en/cms/ca-guide",
                },
              ],
            },
            {
              title: "Additional content",
              items: [
                {
                  text: "RTK Query",
                  link: "en/portfolio-1/brief",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
