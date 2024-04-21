import "./Modale.scss";
import user from "../../assets/user.svg";
import close from "../../assets/close.svg";

const Modale = ({
  visible, // Propriété indiquant si la modale est visible ou non
  onClose, // Fonction de gestion de la fermeture de la modale
  children, // Contenu de la modale
}: {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}) => {
  // Si la modale n'est pas visible, retourne null
  if (!visible) {
    return null;
  }
  // Retourne la modale avec son contenu si elle est visible
  return (
    <div className="modale">
      <div className="modale__content" data-testid="modale">
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modale;
