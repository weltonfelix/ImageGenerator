import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <style>
          {
            `
              div {
                width: 100vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
              }
            `
          }          
        </style>
      </Head>
      <div>
        <p>
          Try: <br/>
          <code>/api/jpeg</code><br/>
          <code>/api/png</code><br/>
          <code>/api/pdf</code><br/>
        </p>
      </div>
    </>
  );
}