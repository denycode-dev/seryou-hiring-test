import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import { setShowAuth } from "./store/slices/localSlice"
import { useDispatch, useSelector } from "react-redux";

// Page
import Home from "./pages";
import Favorite from "./pages/Favorite";
import WatchList from "./pages/WatchList";
import MovieDetail from "./pages/MovieDetail";
import AuthButton from "./components/AuthButton";

// eslint-disable-next-line react/prop-types
function App() {
  const {showAuth} = useSelector((state)=>state.localSlice)
  return (
    <Router>
      <div className="bg-black flex flex-col items-stretch pb-12 min-h-[100vh]">
        {
          showAuth ? <AuthButton /> : null
        }
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
