import './friend.css'
import { useHistory } from 'react-router';
export default function Friend({user}) {
    const history = useHistory();
    return (
        <div onClick={() => history.push({pathname:"/profile",state:{username: user.username}})}>
            <li className="sidebarFriend">
                <img src={user.profilePicture === "" ? "https://i.imgur.com/HeIi0wU.png" : user.profilePicture}  alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
