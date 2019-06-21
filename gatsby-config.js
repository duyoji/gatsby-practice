/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // siteMetadata: {
  //   title: 'Web白熱Eラーニング',
  //   siteUrl: 'https://tsuyopon.xyz/',
  //   description: 'Webの基本スキルと、僕が気になっている技術を動画で解説するサイト',
  // },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
