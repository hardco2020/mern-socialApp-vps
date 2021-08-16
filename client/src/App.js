import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom'
import axios from 'axios';
import SinglePost from './pages/singlePost/SinglePost';
import jwt_decode from "jwt-decode";
function App() {
  let history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token")
  //console.log(token)
  //const jwt = process.env.REACT_APP_EXAMPLE_JWT
  //設定axios的proxy
  if(token!==null){
    console.log("認證成功")
    axios.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer "+token  ;
    return config;
    });
    const token_time = jwt_decode(token).exp*1000
    console.log(token_time)
    console.log(new Date(token_time))
    console.log(new Date())
    if( new Date()<new Date(token_time)){
      console.log("還可以用")
    }else{
      localStorage.clear()
      history.push('/login')
    }
  }
  // axios.interceptors.request.use(function (config) {
  //   config.headers.Authorization = "Bearer "+token  ;
  //   return config;
  // });
  axios.defaults.baseURL=process.env.REACT_APP_API
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* 確認有login才能進去Home */}
          {user? <Home/> : <Register/> }
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/> :<Login/>}
        </Route>
        <Route path="/register">
          {user? <Redirect to="/"/> :<Register/>}  
        </Route>
        <Route path="/messenger">
          {!user? <Redirect to="/" /> : <Messenger/>}
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/post">
          <SinglePost/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
