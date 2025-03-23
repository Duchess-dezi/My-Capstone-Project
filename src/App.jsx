import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ShopList from "./components/ShopList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/shoplist" element={<ShopList />} />
            </Routes>
        </Router>
    );
}

export default App;
