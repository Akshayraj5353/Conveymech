import Header from "./components/Header";
import image from "./assects/image.jpg";

function App() {
  return (
    <div>
      <Header />
      <img className="" alt="logo" src={image} />
    </div>
  );
}

export default App;
