import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Remove or comment out the Google Analytics scripts */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6DZG57JG5F"></script> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6DZG57JG5F');
        `}} /> */}
      </Head>
      <body>
        <script id="theme-switcher" dangerouslySetInnerHTML={{ __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        `}} strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
