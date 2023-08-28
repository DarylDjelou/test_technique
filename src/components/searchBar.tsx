import React, { useEffect, useState } from "react";
interface searchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({ onChange }: searchProps) => {
  return (
    <>
      <input
        onChange={onChange}
        className="form-control form-control-lg"
        type="text"
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
      ></input>
    </>
  );
};

export default SearchBar;
