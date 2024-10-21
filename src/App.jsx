import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Post from "./components/Post";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
      <Profile />
      <Post />
    </div>
  )
}

export default App;