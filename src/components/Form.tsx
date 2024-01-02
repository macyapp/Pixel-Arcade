import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "",
    age: 0,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the person data, e.g., send to a server or log to console
    console.log(person);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) =>
            setPerson((prevState) => ({
              ...prevState,
              firstName: e.target.value,
            }))
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) =>
            setPerson((prevState) => ({
              ...prevState,
              age: e.target.value ? parseInt(e.target.value) : 0, // Default to 0 or another appropriate value if empty
            }))
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
