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
                { text: "Overview", link: "en/introduction" },
                { text: "Introduction", link: "en/introduction" },
                { text: "File management", link: "en/introduction" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
