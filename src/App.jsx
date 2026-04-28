import Cards from "./components/Cards";
import { CardItems } from "./data/CardItems";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <Cards CardItems={CardItems}></Cards>
    </div>
  );
}

export default App;
