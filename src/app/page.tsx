import RootLayout from "./layout";
import { Layout, About, Team, Lighthouse } from '@components';

export default function Home() {
  return (
    <Layout>
      <About></About>
      <Team></Team>
      <Lighthouse></Lighthouse>
    </Layout>
  );
}