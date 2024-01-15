import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { DashboardPage } from "../../Pages/DashboardPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { NotFoundPage } from "../../Pages/NotFoundPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";

export const RouterMain = () => {
    
    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};
