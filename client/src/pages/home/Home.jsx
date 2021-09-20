import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import './home.css'
import { useState } from "react"
export default function Home(){
    const [mobileMenu,setMobileMenu] = useState(false);
    const [mobileRightbar,setMobileRightbar] = useState(false);
    return(
        <>
        <Topbar mobileMenu ={mobileMenu} setMobileMenu = {setMobileMenu} mobileRightbar={mobileRightbar} setMobileRightbar={setMobileRightbar}/>
        <div className="homeContainer">
            <Sidebar mobileMenu ={mobileMenu} />
            <Feed/>
            <Rightbar mobileRightbar = {mobileRightbar}/> 
        </div>
        
        </>
    )
}