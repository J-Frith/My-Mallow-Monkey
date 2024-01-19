import Button from "./Button";

// Displays a mallow monkey and buttons for different kinds of food
function MonkeyPanel({
  monkeyName,
  hunger,
  setHunger,
  foodCounts,
  setFoodCounts,
}) {
  const foodTypes = ["Banana", "Grape", "Watermelon"];

  // Handler for food type button to adjust appropriate food counter and hunger level
  const handleFoodClick = (foodName) => {
    if (hunger + 5 <= 100 && foodCounts[foodName] > 0) {
      setFoodCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[foodName] -= 1;
        return newCounts;
      });

      setHunger((prevHunger) => {
        return prevHunger + 5;
      });
    }
  };

  // Maps each food type to a button
  const renderedButtons = foodTypes.map((name, index) => (
    <div key={index} className="flex flex-row gap-2 items-center">
      <Button onClick={() => handleFoodClick(name)} secondary>
        {name}
      </Button>
      <p>{foodCounts[name]}</p>
    </div>
  ));

  return (
    <div className="flex items-center justify-center mt-5">
      <img
        src={`${process.env.PUBLIC_URL}/images/mallow-monkey.png`}
        alt="Mallow Monkey"
        className="size-1/3"
      />
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold">{monkeyName}</h1>
        <div className="flex flex-col gap-5 border p-5 ml-5">
          {renderedButtons}
        </div>
        <div className="bg-gray-500 p-5 font-bold text-white w-32 text-center">
          {hunger}/100
        </div>
      </div>
    </div>
  );
}

export default MonkeyPanel;
