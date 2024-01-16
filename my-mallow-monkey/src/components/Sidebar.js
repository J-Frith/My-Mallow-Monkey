import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "MyMonkey", path: "/" },
    { label: "FruitStand", path: "/fruitstand" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default Sidebar;
