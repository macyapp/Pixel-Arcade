import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("firstName", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.firstName?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.firstName?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
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
