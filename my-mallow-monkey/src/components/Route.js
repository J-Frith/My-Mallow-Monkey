import useNavigation from "../hooks/use-navigation";

// Used in App.js to determine if a page should be rendered
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
