import React from "react";
import axios from "axios";

const useDeleteDataFomServer = url => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .delete(url)
      .then(response => {
        console.log(`useDeleteDataFomServer response ${response}`);
        setLoading(false);
        setError("");
        setData(response.data);
      })
      .catch(error => {
        console.log(`useDeleteDataFomServer error ${error}`);
        setLoading(false);
        setError(`Error while Data Loading ${error}`);
        setData([]);
      });
  }, []);
  return [loading, error, data];
};
export default useDeleteDataFomServer;
