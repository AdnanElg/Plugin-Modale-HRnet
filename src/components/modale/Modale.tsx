import "./Modale.scss";
import user from "../../assets/user.svg";
import close from "../../assets/close.svg";

const Modal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="modale">
      <div className="modale__content">
        <img
          className="modale__content__close"
          src={close}
          alt="icône close"
          onClick={onClose}
        />
        <div className="modale__content__block1">
          <img
            className="modale__content__block1__img"
            src={user}
            alt="icône user"
          />
          <h3>Confirmation</h3>
          <hr className="modale__content__block1__line"></hr>
        </div>
        <div className="modale__content__block2">
          <p>New collaborator</p>
          <p>Successfully registered</p>
          <hr className="modale__content__block2__line"></hr>
        </div>
        <div className="modale__content__block3">
          <button>Add new employée</button>
          <button>Employées List</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
