import { EXAMPLES } from "../data";
import TabButton from "./TabButton"
// this is a hook or hook function
// must be inside component functions or other (custom) hooks
// only call Hooks at top level i.e. not in if statements etc.
// when state is changed, it tells component
import { useState } from "react";

export default function Examples(){
  // by default React components will only exectue component functions once
  // they need to be told when to update
  // when told, it'll compare the jsx files and update the ui
  // we need to tell React to re-execute component functions
  // this is where 'state' comes in

  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // this schedules the updated value
    // it will not be available till the component updates
    setSelectedTopic(selectedButton);
    // this will print the new value immediately, as it does not schedule it
    console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
    return(
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* --- OPTION 1 FOR CONDITIONAL RENDERING */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* --- OPTION 2 FOR CONDITIONAL RENDERING */}
          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* --- OPTION 3 FOR CONDITIONAL RENDERING */}
          {tabContent}
        </section>
    )
}