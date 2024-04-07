import { useState } from "react";
import useInput from "../hooks/useInput";
import { RadioGroup, RadioOption } from "./RadioGroup";

const Form = () => {
  const [filter, setFilter] = useState("");
  const searchValue = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search je", searchValue.value, "a filter je ", filter);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        id="search"
        className="form-control me-2"
        placeholder="Search"
        {...searchValue}
      />
      <div
        style={{
          background: "white",
          width: "150px",
          borderRadius: "5px",
          padding: "3px",
        }}
      >
        <RadioGroup onChange={setFilter} selected={filter}>
          <RadioOption value="name">name</RadioOption>
          <RadioOption value="id">id</RadioOption>
        </RadioGroup>
      </div>
      <button
        //disabled={!getIsFormValid()}
        className="btn btn-success"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default Form;
