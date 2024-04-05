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

export type DeepSidebar = Record<(typeof KNOWN_LANGUAGE_CODES)[number], Year[]>;

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
              title: "Welcome",
              items: [
                {
                  text: "Overview",
                  link: "en/introduction-feu2/intro",
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
                  link: "en/css-frameworks/module-1/module-1",
                },
                {
                  text: "Introduction to frameworks",
                  link: "en/css-frameworks/module-1/intro-to-frameworks",
                },
                {
                  text: "Introduction to Bootstrap",
                  link: "en/css-frameworks/module-1/intro-to-bootstrap",
                },
                {
                  text: "Introduction to SASS",
                  link: "en/css-frameworks/module-1/intro-to-sass",
                },
                {
                  text: "Customising Bootstrap",
                  link: "en/css-frameworks/module-1/bootstrap-with-sass",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "CA Brief",
                  link: "en/css-frameworks/ca/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/css-frameworks/marking-criteria",
                },
              ],
            },
            {
              title: "Additional Content",
              items: [
                {
                  text: "Introduction to Tailwind CSS",
                  link: "en/css-frameworks/additional-content/building-with-tailwind",
                },
                {
                  text: "Building with Tailwind CSS",
                  link: "en/css-frameworks/additional-content/intro-to-tailwind",
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
                  link: "en/javascript-2/module-1/overview",
                },
                {
                  text: "Debugging",
                  link: "en/javascript-2/module-1/debugging",
                },
                {
                  text: "JSDocs",
                  link: "en/javascript-2/module-1/jsdocs",
                },
                {
                  text: "JSON",
                  link: "en/javascript-2/module-1/json",
                },
                {
                  text: "Local Storage",
                  link: "en/javascript-2/module-1/localstorage",
                },
                {
                  text: "Destructing",
                  link: "en/javascript-2/module-1/destructuring",
                },
                {
                  text: "Map",
                  link: "en/javascript-2/module-1/map",
                },
                {
                  text: "Set",
                  link: "en/javascript-2/module-1/set",
                },
                {
                  text: "Classes",
                  link: "en/javascript-2/module-1/classes",
                },
                {
                  text: "Advanced Topics",
                  link: "en/javascript-2/module-1/advanced-topics",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-2/module-2/module-2",
                },
                {
                  text: "Array Methods",
                  link: "en/javascript-2/module-2/array-methods",
                },
                {
                  text: "Map()",
                  link: "en/javascript-2/module-2/map",
                },
                {
                  text: "filter()",
                  link: "en/javascript-2/module-2/filter",
                },
                {
                  text: "Reduce()",
                  link: "en/javascript-2/module-2/reduce",
                },
                {
                  text: "Find() and findIndex()",
                  link: "en/javascript-2/module-2/find",
                },
                {
                  text: "Some() and every()",
                  link: "en/javascript-2/module-2/some-every",
                },
                {
                  text: "Object Methods",
                  link: "en/javascript-2/module-2/object-methods",
                },
                {
                  text: "Chaining",
                  link: "en/javascript-2/module-2/chaining",
                },
                {
                  text: "Best Practices",
                  link: "en/javascript-2/module-2/best-practices",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-2/module-3/module-3",
                },
                {
                  text: "ES6 Modules Introduction",
                  link: "en/javascript-2/module-3/introduction",
                },
                {
                  text: "ES6 Modules Setup",
                  link: "en/javascript-2/module-3/setup",
                },
                {
                  text: "ES6 Modules Basics",
                  link: "en/javascript-2/module-3/basics",
                },
                {
                  text: "Splitting Code",
                  link: "en/javascript-2/module-3/splitting-code",
                },
                {
                  text: "Additional Info",
                  link: "en/javascript-2/module-3/additional-info",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-2/module-4/module-4",
                },
                {
                  text: "Asynchoronous Code",
                  link: "en/javascript-2/module-4/asynchronous-code",
                },
                {
                  text: "Callbacks",
                  link: "en/javascript-2/module-4/callbacks",
                },
                {
                  text: "Promises",
                  link: "en/javascript-2/module-4/promises",
                },
                {
                  text: "Async/Await",
                  link: "en/javascript-2/module-4/async-await",
                },
                {
                  text: "API",
                  link: "en/javascript-2/module-4/api",
                },
                {
                  text: "REST",
                  link: "en/javascript-2/module-4/rest",
                },
                {
                  text: "fetch()",
                  link: "en/javascript-2/module-4/fetch",
                },
                {
                  text: "HTTP Response status codes",
                  link: "en/javascript-2/module-4/http-response-status-codes",
                },
                {
                  text: "HTTP Request Methods",
                  link: "en/javascript-2/module-4/http-request-methods",
                },
                {
                  text: "HTTP GET Request Method",
                  link: "en/javascript-2/module-4/http-get-request-method",
                },
                {
                  text: "HTTP POST Request Method",
                  link: "en/javascript-2/module-4/http-post-request-method",
                },
                {
                  text: "HTTP PUT Request Method",
                  link: "en/javascript-2/module-4/http-put-request-method",
                },
                {
                  text: "HTTP PATCH Request Method",
                  link: "en/javascript-2/module-4/http-patch-request-method",
                },
                {
                  text: "HTTP DELETE Request Method",
                  link: "en/javascript-2/module-4/http-delete-request-method",
                },
                {
                  text: "Postman",
                  link: "en/javascript-2/module-4/postman",
                },
                {
                  text: "URL Parameters",
                  link: "en/javascript-2/module-4/url-parameters",
                },
                {
                  text: "JWT",
                  link: "en/javascript-2/module-4/jwt",
                },
              ],
            },
            {
              title: "Module 5",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-2/module-5/module-5",
                },
                {
                  text: "Factory functions",
                  link: "en/javascript-2/module-5/factory",
                },
                {
                  text: "Object literal",
                  link: "en/javascript-2/module-5/object-literal",
                },
                {
                  text: "IIFE",
                  link: "en/javascript-2/module-5/iife",
                },
                {
                  text: "Module pattern",
                  link: "en/javascript-2/module-5/module-pattern",
                },
                {
                  text: "Singleton pattern",
                  link: "en/javascript-2/module-5/singleton-pattern",
                },
                {
                  text: "Observer pattern",
                  link: "en/javascript-2/module-5/observer-pattern",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Course Assignment Brief",
                  link: "en/javascript-2/ca/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/javascript-2/ca/marking-criteria",
                },
              ],
            },
            {
              title: "Additional Content",
              items: [
                {
                  text: "Overview",
                  link: "en/javascript-2/additional-content/advanced",
                },
                {
                  text: "Algorithms",
                  link: "en/javascript-2/additional-content/algorithms",
                },
                {
                  text: "Big O Notation",
                  link: "en/javascript-2/additional-content/big-o-notation",
                },
                {
                  text: "Sort - Bubble sort",
                  link: "en/javascript-2/additional-content/sort-bubble-sort",
                },
                {
                  text: "Sort - Insert sort",
                  link: "en/javascript-2/additional-content/sort-insertion-sort",
                },
                {
                  text: "Sort - Selection Sort",
                  link: "en/javascript-2/additional-content/sort-selection-sort",
                },
                {
                  text: "Search - Linear Search",
                  link: "en/javascript-2/additional-content/search-linear-search",
                },
                {
                  text: "Search - Interpolation Search",
                  link: "en/javascript-2/additional-content/search-interpolation-search",
                },
                {
                  text: "Graphs - Breadth First",
                  link: "en/javascript-2/additional-content/graphs-breadth-first",
                },
                {
                  text: "Graphs - Dijkstra's Algorithm",
                  link: "en/javascript-2/additional-content/graphs-dijkstras-algorithm",
                },
                {
                  text: "Data Structures - Linked Lists",
                  link: "en/javascript-2/additional-content/data-structures-linked-list",
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
                  link: "en/workflow/module-1",
                },
                {
                  text: "Git command line",
                  link: "en/workflow/git-cli",
                },
                {
                  text: "Git your own adventure",
                  link: "en/workflow/git-your-own-adventure",
                },
                {
                  text: "Introduction to Github Actions",
                  link: "en/workflow/intro-to-actions",
                },
                {
                  text: "Managing Secrets",
                  link: "en/workflow/managing-secrets",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/workflow/module-2",
                },
                {
                  text: "Your working enviromnent",
                  link: "en/workflow/intro-to-environment",
                },
                {
                  text: "Tailoring your enviromnent",
                  link: "en/workflow/tailoring-your-environment",
                },
                {
                  text: "Automating your workflow",
                  link: "en/workflow/automating-your-workflow",
                },
                {
                  text: "Using a Bundler",
                  link: "en/workflow/using-a-bundler",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/workflow/module-3",
                },
                {
                  text: "Introduction to testing",
                  link: "en/workflow/intro-to-testing",
                },
                {
                  text: "Unit testing",
                  link: "en/workflow/unit-testing",
                },
                {
                  text: "End-to-end testing",
                  link: "en/workflow/end-to-end-testing",
                },
                {
                  text: "Automated testing",
                  link: "en/workflow/automated-testing",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Course Assignment Brief",
                  link: "en/workflow/ca/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/workflow/ca/marking-criteria",
                },
                {
                  text: "Resit",
                  link: "en/workflow/ca/resit",
                },
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
                  link: "en/semester-project-2/brief",
                },
                {
                  text: "Marketing Criteria",
                  link: "en/semester-project-2/marking-criteria",
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
                  link: "en/industry-knowledge/module-1/module-1",
                },
                {
                  text: "Job options in web development",
                  link: "en/industry-knowledge/module-1/job-options",
                },
                {
                  text: "Your first job",
                  link: "en/industry-knowledge/module-1/first-job",
                },
                {
                  text: "Preparing your GitHub Account",
                  link: "en/industry-knowledge/module-1/github-account",
                },
                {
                  text: "Creating your Portfolio website",
                  link: "en/industry-knowledge/module-1/portfolio-website",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/industry-knowledge/module-2/module-2",
                },
                {
                  text: "Freelancing",
                  link: "en/industry-knowledge/module-2/freelancing",
                },
                {
                  text: "Positioning and pricing",
                  link: "en/industry-knowledge/module-2/pricing",
                },
                {
                  text: "Finding clients",
                  link: "en/industry-knowledge/module-2/finding-clients",
                },
                {
                  text: "Contracts",
                  link: "en/industry-knowledge/module-2/contracts",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Overview",
                  link: "en/industry-knowledge/ca-alternative-open",
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
                  link: "en/development-platforms/module-1/module-1",
                },
                {
                  text: "Relational Datastores",
                  link: "en/development-platforms/module-1/relational-datastores",
                },
                {
                  text: "Non-Relational Datastores",
                  link: "en/development-platforms/module-1/non-relational-datastores",
                },
                {
                  text: "Caching",
                  link: "en/development-platforms/module-1/caching",
                },
                {
                  text: "DBaaS",
                  link: "en/development-platforms/module-1/dbaas",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/development-platforms/module-2/module-2",
                },
                {
                  text: "Hosting",
                  link: "en/development-platforms/module-2/hosting",
                },
                {
                  text: "Networking",
                  link: "en/development-platforms/module-2/networking",
                },
                {
                  text: "Baas",
                  link: "en/development-platforms/module-2/baas",
                },
                {
                  text: "BaaS starter",
                  link: "en/development-platforms/module-2/baas-starter",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/development-platforms/module-3/module-3",
                },
                {
                  text: "DevOps",
                  link: "en/development-platforms/module-3/devops",
                },
                {
                  text: "Security",
                  link: "en/development-platforms/module-3/security",
                },
                {
                  text: "Containerization",
                  link: "en/development-platforms/module-3/containerization",
                },
                {
                  text: "Machine learning",
                  link: "en/development-platforms/module-3/machine-learning",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Overview",
                  link: "en/development-platforms/ca/ca-alternative",
                },
                {
                  text: "Marking Criteria",
                  link: "en/development-platforms/ca/assignment-guide",
                },
                {
                  text: "Collaboration guide",
                  link: "en/development-platforms/ca/collaboration-guide",
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
                  link: "en/front-end-frameworks/module-1/module-1",
                },
                {
                  text: "Introduction",
                  link: "en/front-end-frameworks/module-1/introduction",
                },
                {
                  text: "Getting started with React",
                  link: "en/front-end-frameworks/module-1/getting-started-with-react",
                },
                {
                  text: "JSX",
                  link: "en/front-end-frameworks/module-1/jsx",
                },
                {
                  text: "Components",
                  link: "en/front-end-frameworks/module-1/components",
                },
                {
                  text: "Props",
                  link: "en/front-end-frameworks/module-1/props",
                },
                {
                  text: "Events",
                  link: "en/front-end-frameworks/module-1/events",
                },
                {
                  text: "State",
                  link: "en/front-end-frameworks/module-1/state",
                },
                {
                  text: "Mapping out lists",
                  link: "en/front-end-frameworks/module-1/mapping-out-lists",
                },
                {
                  text: "Conditional rendering",
                  link: "en/front-end-frameworks/module-1/conditional-rendering",
                },
                {
                  text: "React dev tools",
                  link: "en/front-end-frameworks/module-1/react-dev-tools",
                },
                {
                  text: "Best practices",
                  link: "en/front-end-frameworks/module-1/best-practices",
                },
              ],
            },
            {
              title: "Module 2",
              items: [
                {
                  text: "Overview",
                  link: "en/front-end-frameworks/module-2/module-2",
                },
                {
                  text: "Basic classes",
                  link: "en/front-end-frameworks/module-2/basic-classes",
                },
                {
                  text: "CSS Modules",
                  link: "en/front-end-frameworks/module-2/css-modules",
                },
                {
                  text: "SASS",
                  link: "en/front-end-frameworks/module-2/sass",
                },
                {
                  text: "Styled-components",
                  link: "en/front-end-frameworks/module-2/styled-components",
                },
                {
                  text: "UI & CSS Frameworks",
                  link: "en/front-end-frameworks/module-2/ui-and-css-frameworks",
                },
                {
                  text: "Using images",
                  link: "en/front-end-frameworks/module-2/using-images",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/front-end-frameworks/module-3/module-3",
                },
                {
                  text: "useState",
                  link: "en/front-end-frameworks/module-3/useState",
                },
                {
                  text: "useEffect",
                  link: "en/front-end-frameworks/module-3/useEffect",
                },
                {
                  text: "useReducer",
                  link: "en/front-end-frameworks/module-3/useReducer",
                },
                {
                  text: "useContext",
                  link: "en/front-end-frameworks/module-3/useContext",
                },
                {
                  text: "State Management",
                  link: "en/front-end-frameworks/module-3/state-management",
                },
                {
                  text: "Zustand",
                  link: "en/front-end-frameworks/module-3/zustand",
                },
                {
                  text: "Redux Toolkit (Depreciated)",
                  link: "en/front-end-frameworks/module-3/redux-toolkit",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/front-end-frameworks/module-4/module-4",
                },
                {
                  text: "React Router",
                  link: "en/front-end-frameworks/module-4/react-router",
                },
                {
                  text: "API Calls",
                  link: "en/front-end-frameworks/module-4/api-calls",
                },
                {
                  text: "Using route params to fetch data",
                  link: "en/front-end-frameworks/module-4/using-params-to-fetch-data",
                },
                {
                  text: "Creating our own hooks",
                  link: "en/front-end-frameworks/module-4/creating-our-own-hooks",
                },
                {
                  text: "API Hook",
                  link: "en/front-end-frameworks/module-4/api-hook",
                },
                {
                  text: "Forms",
                  link: "en/front-end-frameworks/module-4/forms",
                },
                {
                  text: "react-hook-form",
                  link: "https://www.react-hook-form.com/",
                },
              ],
            },
            {
              title: "Module 5",
              items: [
                {
                  text: "Overview",
                  link: "en/front-end-frameworks/module-5/module-5",
                },
                {
                  text: "Testing in React",
                  link: "en/front-end-frameworks/module-5/testing-in-react",
                },
                {
                  text: "Deploying a site ot Netlify",
                  link: "en/front-end-frameworks/module-5/deploying-a-site-to-netlify",
                },
                {
                  text: "TypeScript",
                  link: "en/front-end-frameworks/module-5/typescript",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Brief",
                  link: "en/front-end-frameworks/ca/ca",
                },
                {
                  text: "Marking Criteria",
                  link: "en/front-end-frameworks/ca/marking-criteria",
                },
              ],
            },
            {
              title: "Additional content",
              items: [
                {
                  text: "RTK Query",
                  link: "https://redux-toolkit.js.org/rtk-query/overview",
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
                  link: "en/project-exam-2/brief",
                },
                {
                  text: "Overview (Open source)",
                  link: "en/project-exam-2/open-source/brief",
                },
                {
                  text: "Delivery template",
                  link: "en/project-exam-2/delivery-template",
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
                  link: "en/portfolio-2/brief",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
