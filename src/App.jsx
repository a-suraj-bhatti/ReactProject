import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header.jsx'
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              image={componentsImg}
              alternate="This is an alternate name of the image"
              title="This is my title"
              description="This is my description"
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
