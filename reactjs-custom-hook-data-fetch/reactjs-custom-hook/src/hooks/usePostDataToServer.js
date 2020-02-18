import React from "react";
import axios from "axios";

const usePostDataToServer = (url, postBody) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .post(url, postBody)
      .then(response => {
        console.log(`usePostDataToServer response ${response}`);
        setLoading(false);
        setError("");
        setData(response.data);
      })
      .catch(error => {
        console.log(`usePostDataToServer error ${error}`);
        setLoading(false);
        setError(`Error while Data Loading ${error}`);
        setData([]);
      });
  }, []);
  return [loading, error, data];
};

export default usePostDataToServer;
