import { Route, Routes } from "react-router-dom";
import { inicio } from "../../componentes/contenedor/inicio";

export const ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<inicio/>} />
        </Routes>
    )
}