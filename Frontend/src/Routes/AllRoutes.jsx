import {Routes, Route} from "react-router-dom";

import InvalidRouteError from '../Pages/InvalidRouteError'
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/signup" element={<Signup/>}>Signup</Route>
            <Route path="*" element={<InvalidRouteError/>}>Addproduct</Route>
        </Routes>
    );
}

export default AllRoutes;
