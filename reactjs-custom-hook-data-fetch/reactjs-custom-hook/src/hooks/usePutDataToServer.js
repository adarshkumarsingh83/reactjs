import React from "react";
import axios from "axios";

const usePutDataToServer = (url, putBody) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .put(url, putBody)
      .then(response => {
        console.log(`usePutDataToServer response ${response}`);
        setLoading(false);
        setError("");
        setData(response.data);
      })
      .catch(error => {
        console.log(`usePutDataToServer error ${error}`);
        setLoading(false);
        setError(`Error while Data Loading ${error}`);
        setData([]);
      });
  }, []);
  return [loading, error, data];
};

export default usePutDataToServer;
