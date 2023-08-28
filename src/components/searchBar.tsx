import axios from "axios";
interface BarProps {
  children: Promise<any>;
}
const SearchBar = () => {
  return (
    <>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
      ></input>
    </>
  );
};

export default SearchBar;
