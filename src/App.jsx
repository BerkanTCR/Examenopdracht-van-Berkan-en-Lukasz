import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "./pages/Navigationbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Documentatie from "./pages/Documentatie.jsx";
import Downloaden from "./pages/Downloaden.jsx";
import NoPage from "./pages/NoPage.jsx";

const App = () => {
    return (
        <>

            <BrowserRouter>

                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/documentatie" element={<Documentatie />} />
                    <Route path="/downloaden" element={<Downloaden />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;