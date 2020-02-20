import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "grey"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "orange"
  }
};

const ModalClassConsumer = () => {
  const [open, setOpen] = React.useState(false);

  const openMoalRequest = () => {
    console.log("execute on the modal has requested to open ");
    setOpen(true);
  };

  const afterOpenModal = () => {
    console.log("execute after the modal has opened");
  };

  const afterCloseModal = () => {
    console.log("execute after the modal has close");
  };

  const onRequestToCloseModal = () => {
    console.log("executed on  modal close requeste");
    setOpen(false);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <button onClick={openMoalRequest}>OPEN MODAL</button>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={onRequestToCloseModal}
        style={customStyles}
        contentLabel="ESPARK SAMPLE MODAL"
        parentSelector={() => document.querySelector("#espark")}
      >
        <h1>THIS IS SAMPLE ESPARK MODAL DATA </h1>
        <br />
        <button onClick={onRequestToCloseModal}>CLOSE MODAL</button>
      </Modal>
    </div>
  );
};

export default ModalClassConsumer;
