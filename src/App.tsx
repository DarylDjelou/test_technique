import { useState } from "react";
import SearchBar from "./components/searchBar";
import PhysicianList from "./components/PhysicianList";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <SearchBar
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.currentTarget.value)
          }
        ></SearchBar>
        <PhysicianList
          input="text"
          url="https://hds-staging.toktokdoc.com/physicians?search=_&limit=100"
        ></PhysicianList>
      </div>
    </>
  );
}

export default App;
