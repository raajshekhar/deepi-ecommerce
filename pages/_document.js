import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteImg from '../src/assests/images/banner-sarees-jewelry.png';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Must */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge; IE=11" />
          <link rel="shortcut icon" href='//favicon.ico' />
          <meta name="theme-color" content="#f6e2da" />
          <link rel="manifest" href="/manifest.json" />

          {/* Android */}

          <meta name='mobile-web-app-capable' content='yes' />

          {/* iOS */}
          <meta name='apple-mobile-web-app-title' content='Lasya Collections' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <link rel="apple-touch-icon" href='/favicon.ico' />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <meta property='og:type' content='website' />
          <meta property='og:title' content='Lasya Collections' />
          <meta property='og:description' content='Latest Sarees & Jewelry' />
          <meta property='og:site_name' content='Lasya Collections' />
          <meta property='og:url' content='https://raajshekhar.github.io/deepi-ecommerce/' />
          <meta property='og:image' content={siteImg} />

        </Head>
        <body>
          <Main />
          <NextScript mode="defer"/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
