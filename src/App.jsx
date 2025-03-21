import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
