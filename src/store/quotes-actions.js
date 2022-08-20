//import { uiActions } from "./ui-slice";
import { quotesActions } from "./quotes-slice";

export const fetchQuotesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://all-practise-9c0f1-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      let loadedQuotes = [];
      for (const key in data) {
        loadedQuotes.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      return loadedQuotes;
    };
    try {
      const quoteData = await fetchData();
      dispatch(
        quotesActions.fetchAllQuotes({
          items: quoteData || [],
        })
      );
    } catch (error) {
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching cart data failed!",
      //     })
      //   );
    }
  };
};

export const createQuote = (obj) => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );

    const sendRequest = async (obj) => {
      const response = await fetch(
        "https://all-practise-9c0f1-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await sendRequest(obj);
      if (data) {
        dispatch(quotesActions.createQuote({id: data.name, ...obj}));
      }

      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       title: "Success!",
      //       message: "Sent cart data successfully!",
      //     })
      //   );
    } catch (error) {
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Sending cart data failed!",
      //     })
      //   );
    }
  };
};

export const deleteQuote = (id) => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );

    const sendRequest = async (id) => {
      const response = await fetch(
        `https://all-practise-9c0f1-default-rtdb.asia-southeast1.firebasedatabase.app/quotes/${id}.json`,
        {
          method: "DELETE",
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      //const data = await response.json();
      return response;
    };

    try {
      const response = await sendRequest(id);
      if (response.ok) {
        dispatch(quotesActions.deleteQuote(id));
      }

      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       title: "Success!",
      //       message: "Sent cart data successfully!",
      //     })
      //   );
    } catch (error) {
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Sending cart data failed!",
      //     })
      //   );
    }
  };
};