import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import Artists from "../pages/Artists";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}> 
                    <Route index element={<Home/>} />
                    <Route path="about" element={<Artists />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
