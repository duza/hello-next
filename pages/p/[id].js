import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

import Layout from '../../comps/MyLayout';

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <div className="markdown">
      <Markdown
        source={`
${show.summary.replace(/<[/]?[pb]>/g, '')}
${show.image ? `### Poster\n\n![${show.name}](${show.image.medium})` : ''}
      `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
