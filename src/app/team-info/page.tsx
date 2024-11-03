import { Layout } from '@components';
import { Lighthouse, Team, Header } from '@team-info/components';

export default function TeamInformation() {
  return (
    <Layout>
      <Header></Header>
      <Team></Team>
      <Lighthouse></Lighthouse>
    </Layout>
  );
}