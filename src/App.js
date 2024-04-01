import PostList from "./PostList";
import Navbar from "./Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App App-header">
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
