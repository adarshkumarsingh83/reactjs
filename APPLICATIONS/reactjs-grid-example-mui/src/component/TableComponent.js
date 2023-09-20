
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { React, useEffect, useState }  from "react";
const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue"
  }
};

const TableRow = ({col1,col2,col3 }) => {
  return (
    <tr>
      <td>{col1}</td>
      <td>{col2}</td>
      <td>{col3}</td>
    </tr>
  )
};

const TableComponent = () => {

  const [row, setRow] = useState([]);
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);
  const [dataEntries, setDataEntries] = useState([]);
  const [data, setData] = useState(
    {
      key1: "1value", key2: "2value", key3: "3value", key4: "4value",
      key5: "5value", key6: "6value", key7: "7value", key8: "8value",
      key9: "9value", key10: "10value", key11: "11value", key12: "12value",
      key13: "13value", key14: "14value", key15: "15value", key16: "16value"
    }
  );

  useEffect(() => {
    
    if (dataEntries.length === 0) {
      let result = Object.entries(data);
       setDataEntries(result);
       console.log(result)
    }

    if(col1.length === 0 && col2.length === 0 && col3.length === 0){
      let subLenght = Math.round(dataEntries.length / 3);
      console.log("size for array "+subLenght)
      setCol1(dataEntries.slice().splice(0, subLenght))
      setCol2(dataEntries.slice().splice(subLenght, subLenght))
      setCol3(dataEntries.slice().splice(subLenght + subLenght, dataEntries.length))
    }
    console.log(col1);
    console.log(col2);
    console.log(col3);      
  });
    
      for(var i=0; i <= col1.length ; i++ ){
        setRow(<TableRow col1={col1} col2={col2} col3={col3} />)
      }
  return (
         <table>{ row } </table>
    );
    
}



export default TableComponent;