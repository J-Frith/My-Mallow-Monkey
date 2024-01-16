import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import MonkeyPage from "./pages/MyMonkeyPage";
import FruitStandPage from "./pages/FruitStandPage";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/">
          <MonkeyPage />
        </Route>
        <Route path="/fruitstand">
          <FruitStandPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
