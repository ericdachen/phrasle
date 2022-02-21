import React, {useState} from "react";
import "./showmodal.css";
import Modal from "./modal/modal";

function ShowModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
  }

  const hideModal = () => {
      setShowModal(false);
  }

  return (
    <div>
        <Modal show={showModal} handleClose={hideModal}>
            <p>Modal</p>
        </Modal>
        <div className="statsIcon" onClick={openModal}/>
    </div>
  );
}

export default ShowModal;