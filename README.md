# Modale React Component

## [fr] :

Ce composant React, appelé Modale, offre une fenêtre modale simple et personnalisable pour une utilisation dans vos applications React. Il inclut des fonctionnalités telles qu'un bouton de fermeture, un bloc de confirmation et une structure flexible pour intégrer du contenu supplémentaire.

## [en] :

This React component, called Modal, provides a simple and customizable modal window for use in your React applications. It includes features such as a close button, a confirmation block, and a flexible structure for integrating additional content.

# Installation

## [fr] :

Pour installer et utiliser ce composant dans votre projet, vous pouvez utiliser npm. Ouvrez votre terminal et exécutez la commande suivante :

terminale :

- npm install modale-adn33

## [en] :

To install and use this component in your project, you can use npm. Open your terminal and execute the following command:

Terminal:

- npm install modale-adn33

### Exemple d'utilisation :

```jsx

## [fr] :

import Modale from "modale-adn33";
import { useState } from "react";

const VotreComposant = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/_ Le contenu de votre composant ici _/}

      <Modale visible={isModalVisible} onClose={handleModalClose}>
        {/* Votre contenu personnalisé pour la modale */}
        <p>Message de confirmation ou contenu supplémentaire ici.</p>
      </Modale>
    </div>
)};

```

## [en] :

Your code is using the modale-adn33 component to create a modal in a React functional component. Here's a exemple:

```jsx

import Modale from "modale-adn33";
import { useState } from "react";

const VotreComposant = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/_ Le contenu de votre composant ici _/}

      <Modale visible={isModalVisible} onClose={handleModalClose}>
        {/* Votre contenu personnalisé pour la modale */}
        <p>Message de confirmation ou contenu supplémentaire ici.</p>
      </Modale>
    </div>
)};

```

# Propriétés :

## [fr] :

- visible (boolean, requis) : Détermine si la modale est visible ou non.
- onClose (fonction, requis) : Fonction de rappel pour fermer la modale.
- children (ReactNode) : Contenu supplémentaire à afficher à l'intérieur de la modale.

## [en] :

- visible (boolean, required): Determines whether the modal is visible or not.
- onClose (function, required): Callback function to close the modal.
- children (ReactNode): Additional content to be displayed inside the modal.

# Styles :

## [fr] :

Le style par défaut est fourni dans le fichier Modale.scss, Vous pouvez soit importer ce fichier dans votre projet, soit créer vos propres styles en faisant référence aux noms de classe fournis.

```scss

.modale {
  // Votre style personnalisé ici
}

```

## [en] :

The default style is provided in the Modale.scss file. You can either import this file into your project or create your own styles by referencing the provided class names.

```scss

.modale {
  // Your custom styles here
}

```

# Dépendances :

## [fr] :

Ce composant utilise React, assurez-vous donc que React est une dépendance de votre projet.

N'hésitez pas à personnaliser et étendre ce composant pour répondre aux besoins spécifiques de votre projet. Si vous rencontrez des problèmes ou avez des suggestions d'améliorations, veuillez ouvrir un ticket sur le dépôt GitHub. Bon codage !


## [en] :

This component uses React, so make sure that React is a dependency in your project.

Feel free to customize and extend this component to meet the specific needs of your project. If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Happy coding!