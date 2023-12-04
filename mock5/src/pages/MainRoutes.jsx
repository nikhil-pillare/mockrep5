
import { Route, Routes } from "react-router-dom"
import Appointment from "./Appointment"

export const MainRoutes=()=>{

    return <Routes>
        <Route path="/" element={<Appointment/>}/>
        {/* <Route path="/contact" element={<contactManagement/>}/> */}
        
    </Routes>
}