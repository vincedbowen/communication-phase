// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Home',
  tagline: 'Research is fun',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vincedbowen.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/communication-phase/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vincedbowen', // Usually your GitHub org/user name.
  projectName: 'communication-phase', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'research',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
    {
      // Replace with your project's social card
      navbar: {
        title: 'Welcome',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Research',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Me',
            items: [
              {
                label: 'vincent.bowen@colorado.edu',
                href: 'mailto:vincent.bowen@colorado.edu',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Linked In',
                href: 'https://www.linkedin.com/in/vincentbowen/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vincedbowen',
              },
              {
                label: 'Website',
                href: 'https://vincentbowen.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Colophon',
                to: '/colophon',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vincent Bowen Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      respectPrefersColorScheme: false,
      },
    }),
};

export default config;
