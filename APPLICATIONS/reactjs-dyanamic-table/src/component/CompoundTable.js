import {useState} from "react";


const RenderTableRow = ({ column }) => {
     console.log(column);
    return (
        Object.keys(column).map((key) => {
            console.log(key+" = "+column[key]);
            return <><td> {key} { column[key]}</td></>
      })  
    );
}

const RenderTableData = ({ row }) => {
    return row.map((element, index) => {
        return (
            <tr key={index}>
              <RenderTableRow column={element} />
            </tr>
        )
    })
}

const CompoundTable = () => {

    const [data, setData] = useState([
        [{ id: 111 }, { name: "adarsh" }, { email: "adarsh@kumar" }],
        [{ id: 222 }, { name: "radha" }, { email: "radha@singh" }],
        [{ id: 333 }, { name: "shakti" }, { email: "shakti@singh" }]
    ]);


    return (
        
        data.map((element) => {
            return (<table id='data'>
                <tbody>
                    <RenderTableData row={element} />
                </tbody>
            </table> )
          })
    )
}

export default CompoundTable;