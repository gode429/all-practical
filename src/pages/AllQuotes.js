import { useSelector } from "react-redux";
import Quote from "../components/Quote";

const AllQuotes = (props) => {
  const quoteList = useSelector(state => state.quotes.quoteList);

  return (
    quoteList &&
    quoteList.map((item) => {
      return (
        <Quote
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      );
    })
  );
};

export default AllQuotes;
