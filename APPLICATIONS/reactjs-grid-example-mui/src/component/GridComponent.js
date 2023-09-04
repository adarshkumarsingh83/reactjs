
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { React, useEffect, useState } from "react";

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 30,
    textAlign: "center",
    color: "white",
    gap: 10,
    borderRadius: 8,
    border: '2px solid',
    borderColor: '#E7EBF0',
    backgroundColor: 'rgba(0 0 0 / 0.5)'
  }
};

const InnerGrid = ({ col }) => {
  return col.map((e, index) => 
    <Grid key={index} item xs={4}>
          <Paper style={classes.paper}>{e[0]} {e[1]}</Paper>
    </Grid>
  )
};

const GridComponent = () => {

  const [dataEntries, setDataEntries] = useState([]);
  const [data, setData] = useState(
    {
      key1: "1value", key2: "2value", key3: "3value", key4: "4value",
      key5: "5value", key6: "6value", key7: "7value", key8: "8value",
      key9: "9value", key10: "10value", key11: "11value", key12: "12value",
      key13: "13value", key14: "14value", key15: "15value", key16: "16value",
      key17: "17value"
    }
  );

  useEffect(() => {

    if (dataEntries.length === 0) {
      let result = Object.entries(data);
       setDataEntries(result);
       console.log(result)
    }   
  });
    
  return (

    <div style={classes.root}>
      <Grid container spacing={1} justifyContent="center">
        <Grid container item xs={6} spacing={3} justifyContent="center" alignItems="center" >
          <InnerGrid col={dataEntries} />
        </Grid>
      </Grid>
  
    </div>
  );
    
}

export default GridComponent;