import Link from 'next/link';

const PostLink = ({ id }) => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default PostLink;
