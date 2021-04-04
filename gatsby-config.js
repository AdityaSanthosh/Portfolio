module.exports = {
  siteMetadata: {
    title: "Aditya's Personal Site",
    author: "Santhosh Aditya"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
};
