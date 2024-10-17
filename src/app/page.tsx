import { Layout, About, Survey, Team, Lighthouse } from '@components';

export default function Home() {
  return (
    <Layout>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <About></About>
      <Survey></Survey>
      <Team></Team>
      <Lighthouse></Lighthouse>
    </Layout>
  );
}