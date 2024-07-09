import Document, { Html, Head, Main, NextScript } from "next/document";
import { Script } from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _iub = _iub || [];
                _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"floatingPreferencesButtonDisplay":"bottom-right","perPurposeConsent":true,"siteId":3411238,"whitelabel":false,"cookiePolicyId":87039527,"lang":"it","cookiePolicyUrl":"https://www.iubenda.com/privacy-policy/87039527", "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-right","showTitle":false }};
              `,
            }}
          />
          <script
            async
            type="text/javascript"
            src="https://cs.iubenda.com/autoblocking/3411238.js"
          ></script>
          <script
            async
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Maitree:wght@200;300;400;500;600;700&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></script>
          <meta
            name="google-site-verification"
            content="0ijiX29zHbhM4fP7fjQ6Imgd3PbpjZ2Xir1rKPR6eZM"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
