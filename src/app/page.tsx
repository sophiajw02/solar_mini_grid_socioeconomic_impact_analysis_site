import { Layout, About, Survey, Demo } from '@components';

export default function Home() {
  return (
    <Layout>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <About></About>
      <Demo></Demo>
      <Survey></Survey>

    </Layout>
  );
}