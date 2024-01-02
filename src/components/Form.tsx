import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "",
    age: "",
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
          value={person.firstName}
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
          value={person.age}
          onChange={(e) =>
            setPerson((prevState) => ({
              ...prevState,
              // Keep age as a string, and only use the numerical value when necessary
              age: e.target.value,
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
