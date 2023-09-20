import { useState } from "react";
import ModalComponent from "./ModalComponent";

const CompoundTable = () => {

    const [data, setData] = useState([
        [{ id: 111 }, { name: "adarsh" }, { email: "adarsh@kumar" }, { address: { city: "city1" ,  state: "state1" ,  county: "county1" ,country:"country1"} } ],
        [{ id: 222 }, { name: "radha" }, { email: "radha@singh" }, { address: { city: "city2" ,  state: "state2" ,  county: "county2" , country: "country2" } }],
        [{ id: 333 }, { name: "shakti" }, { email: "shakti@singh" }, { address: { city: "city3" , state: "state3" , county: "county3" , country: "country3" } }]
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