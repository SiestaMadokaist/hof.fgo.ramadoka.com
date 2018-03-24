const React = require('react');
const ReactDom = require('react-dom');
import root from 'window-or-global'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
      },
      {
        path: '/HoF',
      },
    ]
  },
  Document: ({ Html, Head, Body, children, siteProps, renderMeta }) => (
    <Html lang="en-US">
      <title>
        Hall of Fame (fgo.ramadoka.com)
      </title>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="FGO, mobile game, hall of fame, Fate, Fate/Grand Order" />
        <meta name="description" content="We, esport FGO now" />
        <meta property="og:site_name" content="fgo.ramadoka.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fgo.ramadoka.com" />
        <meta property="og:title" content="Hall of Fame for Fate/Grand Order" />
        <meta property="og:image" content="https://images-fgo.ramadoka.com/static/banner-v1.jpg" />
        <meta property="og:image:width" content="1980" />
        <meta property="og:image:height" content="1122" />
        <meta property="fb:pages" content="496806567045945" />
        <meta property="fb:app_id" content="738879266276384" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
