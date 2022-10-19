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
                  link: "en/html-css/module-1/file-management",
                },
                {
                  text: "Navigation",
                  link: "en/html-css/module-1/fonts",
                },
                {
                  text: "CSS Box Model",
                  link: "en/html-css/module-1/fonts",
                },
              ],
            },
            {
              title: "Module 3",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-2/module-2",
                },
                {
                  text: "Positioning",
                  link: "en/html-css/module-1/introduction-to-html",
                },
                {
                  text: "Flexbox",
                  link: "en/html-css/module-1/file-management",
                },
                {
                  text: "CSS Grids",
                  link: "en/html-css/module-1/fonts",
                },
                {
                  text: "Media Queries",
                  link: "en/html-css/module-1/fonts",
                },
              ],
            },
            {
              title: "Module 4",
              items: [
                {
                  text: "Overview",
                  link: "en/html-css/module-2/module-2",
                },
                {
                  text: "Bug Fixing",
                  link: "en/html-css/module-2/images-icons",
                },
                {
                  text: "Animations and transitions",
                  link: "en/html-css/module-1/file-management",
                },
                {
                  text: "CSS Variables",
                  link: "en/html-css/module-1/fonts",
                },
                {
                  text: "COmmon layouts",
                  link: "en/html-css/module-1/fonts",
                },
              ],
            },
            {
              title: "Course Assignment",
              items: [
                {
                  text: "Brief",
                  link: "en/html-css/module-1/introduction-to-html",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
