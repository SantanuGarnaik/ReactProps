import Child1 from "./Child1";
// import child1 form Child1 file
import Child2 from "./Child2";

function App() {
  let name = "chandan";
  return (
    <div className="App">
      <h1>I am Parent</h1>
      <Child1 name={name} age={45} />
      <Child2 />
    </div>
  );
}

export default App;
