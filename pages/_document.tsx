import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          {/* Standard Meta */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />

          <link rel="icon" href="/favicon.ico" />

          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/site.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/reset.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/header.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/container.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/button.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/grid.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/input.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/icon.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/segment.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/item.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/image.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/divider.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/card.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/label.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/search.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/table.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/rail.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/list.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/tab.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/message.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/menu.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/dropdown.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/transition.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            className="ui"
            href="//cdn.jsdelivr.net/semantic-ui/2.2/components/statistic.min.css"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="//cdn.jsdelivr.net/gh/swagger-api/swagger-ui@v3.4.0/dist/swagger-ui.css"
          ></link>

          <style jsx>{`
            html {
              height: 100%;
            }

            body {
              height: 100%;
              margin: 0;
            }

            #__next {
              height: 100%;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
            }
          `}</style>
        </Head>

        <body>
          <Main />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.prototype.includes,modernizr:es6string,modernizr:es6array,Promise,fetch" />
          <script
            defer
            async
            dangerouslySetInnerHTML={{
              __html: `
            <!-- Piwik -->
            var _paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://stats.data.gouv.fr/";
              _paq.push(['setTrackerUrl', u+'piwik.php']);
              _paq.push(['setSiteId', 22]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
