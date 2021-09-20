import "./topbar.css"
import Notice  from '../notice/Notice'
import { Search,Notifications,ExitToApp, Menu, ArrowBack, Cancel, ImportContacts} from "@material-ui/icons"
import { MenuItem,CircularProgress} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import { useMediaQuery } from 'react-responsive'
export default function Topbar({mobileMenu,setMobileMenu,mobileRightbar,setMobileRightbar}){
    let history = useHistory();
    //const [member,setMember] = useState({});
    const [search, setSearch] = useState("");
    const [display,setDisplay] = useState(false);
    const [results,setResults] = useState([]);
    const [searching,setSearching] = useState(false);
    const [noticePopup,setNoticePopup] = useState(false)
    const [notices,setNotices] = useState(null)
    const [newNotice,setNewNotice] = useState(null)
    const user = JSON.parse(localStorage.getItem("user"))
    const wrapperRef = useRef(null) //利用此點判斷滑鼠的落點區域

    const isMobile = useMediaQuery({
        query: '(max-width: 850px)'
      })
    // const [mobileMenu,setMobileMenu] = useState(false);
    const [searchbar,setSearchbar] = useState(false);
    //導入notification
    useEffect(()=>{
       const getNotification = async()=>{
           try{
                const res = await axios('/api/notice/'+user._id+"/"+0)
                setNotices(res.data.data)
                console.log()
                setNewNotice(res.data.data.reduce(function(n, val) {
                    return n + (!val.read.includes(user._id));
                }, 0))
           }catch(err){
               console.log(err)
           }
       } 
       getNotification()
    },[])
    //判斷搜尋欄開關
    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOuteside)
        return ()=>{
            document.removeEventListener('mousedown',handleClickOuteside)
        };
    },[]);

    const handleClickOuteside = event =>{
        const {current:wrap} = wrapperRef;
        if (wrap&& !wrap.contains(event.target)){
            setDisplay(false);
        }
    }

    const signout = () =>{
        localStorage.clear();
	    window.location.href='/' 
        //window.history.pushState(null, '/login');
        //window.location.reload()
    }
    //console.log(member.city)
    //透過user token在對遠端做要求
    useEffect(()=>{
        if (search===""){

        }else{
            let cancel
            setSearching(true)
            const searching = async()=>{
                try{
                    const searchResult = await axios.get('api/users/search/'+search,{
                        cancelToken: new axios.CancelToken(c => cancel = c)
                    })
                    setResults(searchResult.data.data)
                    setSearching(false)
                }catch(err){
                    console.log(err)
                    setSearching(false)
                    setResults([])
                }
            };
            searching()
            return () => cancel()
        }
    },[search])
    //此處做切版
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                {isMobile && <Menu onClick={()=>setMobileMenu(!mobileMenu)}/>}
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">{isMobile ? "HardCo." :"HardCo.Social"}</span>
                </Link>
            </div>
            <div className="topbarCenter" ref={wrapperRef}>
                <div className={searchbar ? "searchbarMobile": "searchbar"}>

                    <Search className="searchIcon"/>
                    <input
                        placeholder="尋找朋友、貼文或影片"
                        className="searchInput"
                        onChange={(e)=>setSearch(e.target.value)}
                        onClick ={()=>setDisplay(!display)}
                    />
                    {isMobile===true ? <Cancel onClick={()=>setSearchbar(true) }/> : null}
                </div>
                <div style={isMobile ? searchbar ? {display:"flex"} : {display:"none"} : {display:"none"}}>
                    <Search className="searchIcon"  onClick={()=>setSearchbar(!searchbar)}/>
                </div>
                {display &&(
                    <div className="autoContainer">

                        {results.map((value)=>{
                            return(
                                <div onClick={() => history.push({pathname:"/profile",state:{username: value.username}})} key={value._id}>
                                    <MenuItem className="searchItem">
                                        <img src={value.profilePicture!==""? value.profilePicture:"https://i.imgur.com/HeIi0wU.png"} alt="" className="topbarImg" />
                                        {value.username}
                                    </MenuItem>
                                </div>
                                
                            )
                        })}
                            {searching? <div className="onSearch"><CircularProgress color="gray" size="30px"/> </div>: null}
                    </div>
                 )}  
                
            </div>
            <div className="topbarRight"  style={searchbar ? {display:"flex"} : {display:"none"}}>
                {/* <div className="topbarLinks">
                </div> */}
                <div className="topbarIcons">
                    {/* <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div> */}
                    {/* <Link to={"/messenger"} style={{textDecoration:"none" ,color:"inherit"}}>
                    <div className="topbarIconItem">
                        <Chat/>
                    </div>
                    </Link> */}
                    
                    {noticePopup &&(
                        <Notice notices = {notices} />
                 )}  
                    
                    
                </div>
                <div onClick={() => history.push({pathname:"/profile",state:{username: user.username}})}>
                <img src={user.profilePicture ? user.profilePicture : "https://i.imgur.com/HeIi0wU.png"} alt="" className="topbarImg" />
                </div>
                <div style={{display:"flex"}}>
                <div className="topbarIconItem" onClick={()=>setNoticePopup(!noticePopup)}>
                        <Notifications/>

                        {
                            //算出notices內 read= false的數量 
                            newNotice!==0 && 
                            <span className="topbarIconBadge">
                                { newNotice }
                            </span>
                            
                        }              
                        
                </div>
                <div className="topbarIconItem">
                    {isMobile && <ImportContacts onClick={()=>setMobileRightbar(!mobileRightbar)}/>}
                </div>
                <div className="topbarIconItem">
                        <ExitToApp/>
                        <span onClick={signout}>{isMobile ? "": "登出"}</span>
                </div>
                </div>
            </div>
        </div>
    )
}
