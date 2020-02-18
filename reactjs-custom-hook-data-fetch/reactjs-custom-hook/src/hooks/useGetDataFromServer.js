import React from "react";
import axios from "axios";

const useGetDataFromServer = url => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(`useGetDataFromServer response ${response}`);
        setLoading(false);
        setError("");
        setData(response.data);
      })
      .catch(error => {
        console.log(`useGetDataFromServer error ${error}`);
        setLoading(false);
        setError(`Error while Data Loading ${error}`);
        setData([]);
      });
  }, []);
  return [loading, error, data];
};

export default useGetDataFromServer;
