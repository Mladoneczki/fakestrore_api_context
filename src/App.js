import Termekek from "./components/Public/Termekek";
import TermekUrlap from "./components/Admin/termekUrlap.js";

function App() {


  return (
    <div className="container">
      <header className="App-header">
        <h1>FakeStore Webshop</h1>
        
      
      </header>
      <section>
        <TermekUrlap/>
      </section>
      <article>
        <Termekek/>
      </article>
      <footer>Vivien</footer>
    </div>
  );
}

export default App;
