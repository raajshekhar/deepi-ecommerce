import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Must */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge; IE=11" />
          <link rel="shortcut icon" href='/favicon.ico' />
          <meta name="theme-color" content="#f6e2da" />
          <link rel="manifest" href="/manifest.json" />

          {/* Android */}

          <meta name='mobile-web-app-capable' content='yes' />

          {/* iOS */}
          <meta name='apple-mobile-web-app-title' content='Deepika Ecommerce' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <link rel="apple-touch-icon" href='/favicon.ico' />

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
