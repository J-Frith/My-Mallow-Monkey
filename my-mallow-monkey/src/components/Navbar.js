import Link from "./Link";

function Navbar() {
  const links = [
    { label: "Login", path: "/" },
    { label: "My Mallow Monkey", path: "/mymonkey" },
    { label: "Fruit Stand", path: "/fruitstand" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mx-6 pb-2"
        activeClassName="border-b-4 border-orange-500"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex justify-center bg-gray-200 p-4">
      {renderedLinks}
    </div>
  );
}

export default Navbar;
