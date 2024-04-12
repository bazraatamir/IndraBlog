import Link from "next/link";
function Nav() {
  return (
    <div className="w-[80%] h-[60px] flex">
      <ul className="flex gap-[10px]">
        <li>
          <Link href="/" className="uppercase">
            home
          </Link>
        </li>
        <li>
          <Link href="/pages/posts" className="uppercase">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="uppercase">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/pages/login" className="uppercase">
            login
          </Link>
        </li>
        <li>
          <Link href="/pages/register" className="uppercase">
            Regsiter
          </Link>
        </li>
        <li>
          <Link href="/pages/category" className="uppercase">
            Category
          </Link>
        </li>
        <li>
          <Link href="/publish" className="uppercase">
            publish
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
