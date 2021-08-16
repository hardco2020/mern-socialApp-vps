import './singlePost.css'
import Topbar from "../../components/topbar/Topbar"
import Post from "../../components/post/Post"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router';
export default function SinglePost() {
    //抓取postid來找使用者貼文
    let location = useLocation();
    //抓取postid來找使用者貼文
    const [post,setPost] = useState(null)
    //const postId = useParams().postId;
    useEffect(() => {
       const getPost = async()=>{
	   if (location.state.postId){
                console.log(location.state.postId)
            }else{
                console.log("wrong")
            }
           const res = await axios.get('/api/posts/'+location.state.postId)
           setPost(res.data.data)
       }
       getPost()
    }, [location.state.postId])
    return (
        <>
        <Topbar/>
        <div className = "singlePost">
            <div className="singlePostLeft"> 
            </div>
            <div className="singlePostCenter">
                {post && <Post post ={post}/>}  
            </div>
            <div className="singlePostRight">

            </div>
        </div>
        </>
    )
}
