import Modal from "../modale/Modale";
import "./Button.scss";
import { useState } from "react";

const Button = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <button id="btn" type="button" onClick={handleClick}>
        Save
      </button>
      <Modal visible={isModalVisible} onClose={handleClose} />
    </div>
  );
};

export default Button;
