import useNavigation from "../hooks/use-navigation";

/*
Acknowledgement:
This file was used from Stephen Grider's 'Modern React with Redux' Udemy course
*/

// Used in App.js to determine if a page should be rendered
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
