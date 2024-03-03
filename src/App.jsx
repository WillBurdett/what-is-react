import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

// npm run dev
function App() {
  return (
    // empty 'fragments' are a nameless alternative to divs
    // best use case when no styling or additional info is needed
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
