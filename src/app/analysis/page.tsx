import { Layout } from '@components';
import { Header, Healthcare, Education } from '@analysis/components';

export default function Analysis() {
  return (
    <Layout>
      <Header></Header>
      <Healthcare></Healthcare>
      <Education></Education>
    </Layout>
  );
}