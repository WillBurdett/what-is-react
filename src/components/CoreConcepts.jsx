import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts() {
  return (
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
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
