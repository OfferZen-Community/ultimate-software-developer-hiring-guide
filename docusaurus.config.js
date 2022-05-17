// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ultimate Software Developer Hiring Guide',
  tagline: 'The Ultimate Softare Developer Finance Guide',
  url: 'https://www.offerzen.com/guides/developer-hiring',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'offerzen', // Usually your GitHub org/user name.
  projectName: 'guides-developer-hiring', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //editUrl: 'https://github.com/offerzen/guides-developer-hiring', //Removing this takes away the edit button on individual pages.
          routeBasePath: '/' //This makes the base URL at the directory root.
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/offerzen/guides-developer-hiring',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        //title: 'Ultimate Software Developer Hiring Guide', //If we need a title to show.
        logo: {
          alt: 'OfferZen Logo',
          src: 'img/logo.png',
          href: 'https://www.offerzen.com'
        },
        items: [
          {
            position: 'left',
            label: 'The Ultimate Developer Hiring Guide',
            to: '/', // Should be linked to home page
          },
          // {
          //   href: 'https://github.com/offerzen/guides-developer-hiring',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Involved',
            items: [
              {
                label: 'Suggest an edit',
                href: 'mailto:marketing@offerzen.com?subject=Hiring%20Guide%20Feedback',
              },
              // {
              //   label: 'Make a suggestion',
              //   href: 'https://8malmkzgvs8.typeform.com/to/oLVWxa8r?',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OfferZen Community',
                href: 'https://www.offerzen.com/community',
              },
              // {
              //   label: 'Sign Up For Programmable Banking',
              //   href: 'https://www.investec.com/en_za/banking/programmable-banking.html',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.offerzen.com/blog',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/OfferZen-Community/developers-finance',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OfferZen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
