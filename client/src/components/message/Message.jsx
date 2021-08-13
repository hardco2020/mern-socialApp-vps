import './message.css'
import {format} from 'timeago.js'
export default function Message({message,own,data}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <div onClick={() => {window.location.href="/profile/"+data.username}} >
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
