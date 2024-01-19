import { useContext } from "react";
import NavigationContext from "../context/navigation";

/*
Acknowledgement:
This file was used from Stephen Grider's 'Modern React with Redux' Udemy course
*/

// Makes navigation context available to any component below it in the component tree
function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
