import Layout from '../comps/MyLayout';
import PostLink from '../comps/PostLink';

const indexPageContent = (
  <>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </>
);

const Index = () => (
  <Layout content={indexPageContent}>

  </Layout>
);

export default Index;
