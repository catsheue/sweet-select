import "./App.css";
import SelectBar from "./container/SelectBar";
import { useSweetSelect } from "./hooks/useSweetSelect";
import TreeSelector from "./container/TreeSelector";
import { useSweetTree } from "./hooks/useSweetTree";
import { useSweetShort } from "./hooks/useSweetShort";
import ShortSelectBar from "./container/ShortSelectBar";

const fakeList = [
  { name: "cuteLuna", id: 1 },
  { name: "abc", id: 2 },
  { name: "green", id: 3 },
  { name: "purple", id: 4 },
  { name: "pink", id: 5 },
  { name: "yellow", id: 5 },
  { name: "miou", id: 7 },
  { name: "google", id: 8 },
  { name: "amazon", id: 9 },
  { name: "facebook", id: 10 },
  { name: "icecream", id: 11 },
  { name: "bubble", id: 12 },
  { name: "microsoft", id: 13 },
  { name: "apple", id: 14 },
  { name: "strawberry", id: 15 },
  { name: "banana", id: 16 },
  { name: "doraemon", id: 17 },
  { name: "12345", id: 18 },
  { name: "67890", id: 19 },
  { name: "euro", id: 20 },
];

const shortList = [
  { name: "cuteLuna", id: 1 },
  { name: "abc", id: 2 },
];
function App() {
  const defaultSelect = useSweetSelect();
  const defaultTree = useSweetTree();
  const defaultShort = useSweetShort();
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-select-type">Default Select Bar</h2>
        <SelectBar {...defaultSelect} placeholder="test" list={fakeList} />
        <h2 className="App-select-type">Default Short</h2>
        <ShortSelectBar {...defaultShort} list={shortList} />

        <h2 className="App-select-type">Tree Selector</h2>
        <TreeSelector {...defaultTree} />
      </header>
    </div>
  );
}

export default App;
