import Modale from "./components/modale/Modale";

const App = () => {
  return (
    <main>
      <Modale
        visible={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
};

export default App;
