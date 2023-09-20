

import "../App.css";


const ModalComponent = ({ handleClose, details }) => {

   const RenderTableData = ({ row }) => {  
  
      return (
            Object.keys(row).map((key) => {
               console.log(key + " = " + row[key]);             
              return <tr>
                <td> {key} </td>
                <td> {row[key]} </td>
              </tr>        
            })
      );
     
  };

  return (
          <div className="modal display-block">
            <section className="modal-main">
              <div className="App">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Value</th>
                      </tr>
                    </thead>
                  <tbody>
                      <RenderTableData row={details} />                     
                  </tbody>
                </table>
              </div>
              <button class="button button1" onClick={handleClose}>close</button>
            </section>
          </div>            
    );

};

export default ModalComponent;