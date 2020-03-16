import Link from 'next/link';

const PostLink = ({ id, name }) => (
  <li key={id}>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
      
      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }
      
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default PostLink;
