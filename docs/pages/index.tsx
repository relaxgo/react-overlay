import Head from 'next/head';
//import GitHubButton from 'react-github-btn';
import Page from '$/components/layouts/Page';

export default function Home() {
  return (
    <Page>
      <div className="container">
        <Head>
          <title>React-overlay</title>
          <meta name="description" content="react-overlay" />
        </Head>

        <h1 className="title">Welcome to React-overlay</h1>

        <p className={'description'}>
          The easy way to manger all react overlays, like modal, toast
        </p>

        <div></div>
      </div>
      <style jsx>{`
        .container {
          padding: 4rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </Page>
  );
}
