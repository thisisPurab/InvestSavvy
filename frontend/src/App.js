import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
                    ></Route>
                    <Route
                        path="/signup"
                        element={<Signup></Signup>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
