import { useState } from "react";
import Navbar from "./components/Navbar";
import Route from "./components/Route";
import MyMonkeyPage from "./pages/MyMonkeyPage";
import FruitStandPage from "./pages/FruitStandPage";

function App() {
  // State tracking the logged in user
  const [user, setUser] = useState(null);

  // State tracking counts for each type of food
  const [foodCounts, setFoodCounts] = useState({
    Banana: 3,
    Grape: 2,
    Watermelon: 1,
  });

  // State tracking monkey hunger level
  const [hunger, setHunger] = useState(75);

  // State tracking whether the user needs to login or not
  const [showLoginModal, setShowLoginModal] = useState(!user);

  return (
    <div>
      <Navbar />
      <div>
        <Route path="/">
          <MyMonkeyPage
            user={user}
            setUser={setUser}
            foodCounts={foodCounts}
            setFoodCounts={setFoodCounts}
            hunger={hunger}
            setHunger={setHunger}
            showLoginModal={showLoginModal}
            setShowLoginModal={setShowLoginModal}
          />
        </Route>
        <Route path="/fruitstand">
          <FruitStandPage user={user} />
        </Route>
      </div>
    </div>
  );
}

export default App;
