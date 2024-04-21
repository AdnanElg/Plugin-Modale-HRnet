import Modale from "./components/modale/Modale";

const App = () => {
  return (
    <main>
      <Modale
        // Propriété indiquant si la modale est visible ou non
        visible={false}
        // Fonction de fermeture de la modale
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
};

export default App;
