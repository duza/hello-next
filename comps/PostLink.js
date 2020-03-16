import Link from 'next/link';

const PostLink = ({ id, name }) => (
  <li key={id}>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{name}</a>
    </Link>
  </li>
);

export default PostLink;
