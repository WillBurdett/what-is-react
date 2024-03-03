import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data.js'

// this is a hook or hook function
// must be inside component functions or other (custom) hooks
// only call Hooks at top level i.e. not in if statements etc.
// when state is changed, it tells component to re-execute
import { useState } from "react";

// npm run dev
function App() {
  // by default React components will only exectue component functions once
  // they need to be told when to update
  // when told, it'll compare the jsx files and update the ui
  // we need to tell React to re-execute component functions
  // this is where 'state' comes in
  let tabContent = "Please click a button";

  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    // this schedules the updated value
    // it will not be available till the component updates
    setSelectedTopic(selectedButton);
    // this will print the new value immediately, as it does not schedule it
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* --- METHOD 1 (do for each) --- */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
            {/* --- METHOD 2 (do for each) --- */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
