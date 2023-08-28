import axios from "axios";
import SearchBar from "./components/searchBar";

async function get_data_array(): Promise<any[]> {
  const response = await axios.get(
    "https://hds-staging.toktokdoc.com/physicians?search=_&limit=100"
  );
  const Array = [];
  Array.push(response.data);
  return Array;
}
function App() {
  const data = get_data_array();
  console.log(data);
  return (
    <>
      <div>
        <SearchBar />
        {data[0]["identifiantpp"]}
      </div>
    </>
  );
}

export default App;
