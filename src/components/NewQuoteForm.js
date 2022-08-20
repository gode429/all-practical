import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createQuote } from "../store/quotes-actions";
import "./NewQuoteForm.css";

const NewQuoteForm = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const history = useHistory();

  const submitHandler = () => {
    const obj = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    dispatch(createQuote(obj));
    history.push("/allQuotes");
  };
  return (
    <div className="form">
      <input type="text" ref={titleRef} placeholder="Title"></input>
      <input type="text" ref={descriptionRef} placeholder="Description"></input>
      <button onClick={submitHandler}>Save Quote</button>
    </div>
  );
};

export default NewQuoteForm;
