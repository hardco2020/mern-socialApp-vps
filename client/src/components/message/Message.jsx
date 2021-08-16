import './message.css'
import {format} from 'timeago.js'
import { useHistory } from 'react-router'
export default function Message({message,own,data}) {
    let history = useHistory();
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <div onClick={() => history.push({pathname:"/profile",state:{username: data.username}})}>
                <img
                 className="messageImg"
                 src={data && data.profilePicture!=="" ? data.profilePicture : "https://i.imgur.com/HeIi0wU.png"}
                 alt="" 
                />
                </div>
                <p className="messageText">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}
