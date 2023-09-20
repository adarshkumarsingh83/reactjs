import { useState } from "react";
import ModalComponent from "./ModalComponent";

const CompoundTable = () => {

    const [data, setData] = useState([
        [{ id: 111 }, { name: "adarsh" }, { email: "adarsh@kumar" }, {
            address: {
                city: "city1", state: "state1", county: "county1", country: "country1",
                key1: "value1", key2: "value2", key3: "value3", key4: "value4", key5: "value5",
                key6: "value6", key7: "value7", key8: "value8", key9: "value9", key10: "value10",
                key11: "value11", key12: "value12", key13: "value13", key14: "value14", key15: "value15",
                key16: "value16", key17: "value17", key18: "value18", key19: "value19", key20: "value20",
                key21: "value11", key22: "value22", key23: "value23", key24: "value24", key25: "value25",
                key26: "value16", key27: "value27", key28: "value28", key29: "value29", key30: "value30",
                key31: "value11", key33: "value33", key33: "value33", key34: "value34", key35: "value35",
                key36: "value16", key37: "value37", key38: "value38", key39: "value39", key40: "value40",
                key41: "value11", key44: "value44", key44: "value44", key44: "value44", key45: "value45",
                key46: "value16", key47: "value47", key48: "value48", key49: "value49", key50: "value50"
            }
        }],
        [{ id: 222 }, { name: "radha" }, { email: "radha@singh" }, {
            address: {
                city: "city2", state: "state2", county: "county2", country: "country2",
                key1: "value1", key2: "value2", key3: "value3", key4: "value4", key5: "value5",
                key6: "value6", key7: "value7", key8: "value8", key9: "value9", key10: "value10",
                key11: "value11", key12: "value12", key13: "value13", key14: "value14", key15: "value15",
                key16: "value16", key17: "value17", key18: "value18", key19: "value19", key20: "value20",
                key21: "value11", key22: "value22", key23: "value23", key24: "value24", key25: "value25",
                key26: "value16", key27: "value27", key28: "value28", key29: "value29", key30: "value30",
                key31: "value11", key33: "value33", key33: "value33", key34: "value34", key35: "value35",
                key36: "value16", key37: "value37", key38: "value38", key39: "value39", key40: "value40",
                key41: "value11", key44: "value44", key44: "value44", key44: "value44", key45: "value45",
                key46: "value16", key47: "value47", key48: "value48", key49: "value49", key50: "value50"
            }
        }],
        [{ id: 333 }, { name: "shakti" }, { email: "shakti@singh" }, {
            address: {
                city: "city3", state: "state3", county: "county3", country: "country3",
                key1: "value1", key2: "value2", key3: "value3", key4: "value4", key5: "value5",
                key6: "value6", key7: "value7", key8: "value8", key9: "value9", key10: "value10",
                key11: "value11", key12: "value12", key13: "value13", key14: "value14", key15: "value15",
                key16: "value16", key17: "value17", key18: "value18", key19: "value19", key20: "value20",
                key21: "value11", key22: "value22", key23: "value23", key24: "value24", key25: "value25",
                key26: "value16", key27: "value27", key28: "value28", key29: "value29", key30: "value30",
                key31: "value11", key33: "value33", key33: "value33", key34: "value34", key35: "value35",
                key36: "value16", key37: "value37", key38: "value38", key39: "value39", key40: "value40",
                key41: "value11", key44: "value44", key44: "value44", key44: "value44", key45: "value45",
                key46: "value16", key47: "value47", key48: "value48", key49: "value49", key50: "value50"
            }
        }]
    ]);

    const [show, setShow] = useState(false);

    const [selectedData, setSelectedData] = useState({});


    const hanldeClick = (selectedRec) => {
        console.log(selectedRec)
        setSelectedData(selectedRec);
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };

    
    const RenderTableRow = ({ column }) => {

        console.log(column);
        
        return (
            Object.keys(column).map((key) => {
                console.log(key + " = " + column[key]);
                if (key != "address") {
                    return <><td> {key} </td>  <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>  <td> {column[key]} </td></>
                } else {
                    return <>
                        <td> {key} </td>  <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
                        <td><a href="#" onClick={() => hanldeClick(column[key])}> click for details.... </a></td>
                    </>
                }
                
            })
        );
    };

   const RenderTableData = ({ row }) => {  
    
        return row.map((element, index) => {
            return (
                <tr key={index}>
                    <RenderTableRow column={element} />
                </tr>
            )
        })
    };

    return (        
        data.map((element) => {
            return (
               <div className="App">
                    <table class="table" id='data'>
                        <thead>
                        </thead>
                        <tbody>
                            <RenderTableData row={element} />
                        </tbody>
                    </table>
             { show && <ModalComponent details={selectedData} handleClose={hideModal} /> }
            </div>
            )
          })
    )
}



export default CompoundTable;