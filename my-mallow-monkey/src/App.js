import Navbar from "./components/Navbar";
import Route from "./components/Route";
import LoginPage from "./pages/LoginPage";
import MyMonkeyPage from "./pages/MyMonkeyPage";
import FruitStandPage from "./pages/FruitStandPage";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Route path="/">
          <LoginPage />
        </Route>
        <Route path="/mymonkey">
          <MyMonkeyPage />
        </Route>
        <Route path="/fruitstand">
          <FruitStandPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
