import { useContext } from "react";
import NavigationContext from "../context/navigation";

// Makes navigation context available to any component below it in the component tree
function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
