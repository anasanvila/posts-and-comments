import { useState, useEffect } from "react";
//import useInput from "../hooks/useInput";
import { RadioGroup, RadioOption } from "./RadioGroup";
import { SelectGroup, SelectOption } from "./SelectGroup";

const Form = (props) => {
  const [filter, setFilter] = useState("name");
  const [value, setValue] = useState("");
  //const searchValue = useInput("");
  //console.log(props.users);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [filter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "filter je",
      //searchValue.value,
      filter,
      "a value je ",
      value
    );
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>

      <div
        style={{
          background: "white",
          width: "150px",
          borderRadius: "5px",
          padding: "3px",
          fontSize: "10px",
          marginRight: "6px",
        }}
      >
        Search by:
        <RadioGroup onChange={setFilter} selected={filter}>
          <RadioOption value="name">name</RadioOption>
          <RadioOption value="username">username</RadioOption>
        </RadioGroup>
      </div>
      {/* <input
        id="search"
        className="form-control me-2"
        placeholder="Search"
        {...searchValue}
      /> */}
      <SelectGroup onChange={setValue} selectedOption={filter}>
        {props?.users?.map((user) => {
          console.log("user=", user[`${filter}`]);
          console.log();
          return (
            <SelectOption value={user[`id`]}>{user[`${filter}`]}</SelectOption>
          );
        })}
      </SelectGroup>
      <button
        //disabled={!getIsFormValid()}
        className="btn btn-success"
        type="submit"
        onClick={() => console.log(value)}
      >
        Go
      </button>
    </form>
  );
};

export default Form;
