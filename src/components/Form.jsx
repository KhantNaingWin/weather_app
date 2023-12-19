import React, { useRef } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");
  return (
    <div className="w-100 d-flex justify-content-center mt-3">
      <input
        type="text"
        ref={searchKey}
        className="form-control"
        placeholder="Enter country"
      />
      <input
        type="button"
        onClick={() => fetchWeather(searchKey.current.value)}
        value="Search"
        className="btn btn-outline-dark ms-1 rounded"
      />
    </div>
  );
};

export default Form;
