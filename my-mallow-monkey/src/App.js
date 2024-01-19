import { useState } from "react";
import Navbar from "./components/Navbar";
import Route from "./components/Route";
import LoginPage from "./pages/LoginPage";
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

  return (
    <div>
      <Navbar />
      <div>
        <Route path="/">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/mymonkey">
          <MyMonkeyPage
            user={user}
            foodCounts={foodCounts}
            setFoodCounts={setFoodCounts}
            hunger={hunger}
            setHunger={setHunger}
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
