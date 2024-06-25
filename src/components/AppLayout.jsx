import BentoBox from "./BentoBox";
import Navbar from "./Navbar";
import SideBar from "./Sidebar"

const AppLayout=()=>{
    return(
        <>
        <SideBar/>
        <Navbar/>
        <BentoBox/>
        </>
    )
}

export default AppLayout;