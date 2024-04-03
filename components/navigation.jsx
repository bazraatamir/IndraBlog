import Link from "next/link";
function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/pages/login">login</Link>
        </li>
        <li>
          <Link href="/pages/register">Regsiter</Link>
        </li>
        <li>
          <Link href="/pages/category">Category</Link>
        </li>
        <li>
          <Link href="/posts">Upload</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
