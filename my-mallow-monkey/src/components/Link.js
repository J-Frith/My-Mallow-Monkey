import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

/*
Acknowledgement:
This file was modified from Stephen Grider's 'Modern React with Redux' Udemy course
*/

// A component that changes the current page in the app
// NB: At time of writing, Link is used in the navigation bar
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-yellow-100",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
