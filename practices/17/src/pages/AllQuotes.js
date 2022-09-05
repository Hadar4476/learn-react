import React from "react";
import QuoteList from "../components/Quotes/QuoteList/QuoteList";

const quotes = [
  { id: "q1", author: "Authour #1", text: "Text from quote #1" },
  { id: "q2", author: "Authour #2", text: "Text from quote #2" },
  { id: "q3", author: "Authour #3", text: "Text from quote #3" },
  { id: "q4", author: "Authour #4", text: "Text from quote #4" },
  { id: "q5", author: "Authour #5", text: "Text from quote #5" },
];

const AllQuotes = () => {
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
