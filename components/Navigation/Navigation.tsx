import Link from 'next/link';

type LinkProps = {
  href: string;
};

const NavLink: React.FC<LinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <a className="cursor-pointer mr-3 text-lg underline" {...props}></a>
    </Link>
  );
};

export const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/list">Long List</NavLink>
    </nav>
  );
};
