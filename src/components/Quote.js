import React from "react";
import { useDispatch } from "react-redux";

import { deleteQuote } from "../store/quotes-actions";
import "./Quote.css";

const Quote = (props) => {
const dispatch = useDispatch();

const deleteHandler = () => {
  dispatch(deleteQuote(props.id));
}

  return (
    <div className="quote" onClick={deleteHandler}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Quote;
