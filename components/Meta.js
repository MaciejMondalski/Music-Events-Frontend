import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta name='keywords' />
      <meta name='description' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        rel='stylesheet'
      />
      <title>Music-Events</title>
    </Head>
  );
};

export default Meta;
