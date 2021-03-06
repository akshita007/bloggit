import {HashRouter as Router, Switch,Route} from "react-router-dom";
import {Box} from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import PostDetails from "./components/Post/PostDetail";
import CreatePost from "./components/Post/CreatePost";
import EditPost from "./components/Post/EditPost";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import {useEffect} from "react";
import {logoutUser, verifyToken} from "./sevice/api";

function App() {
  useEffect(()=>{
    const checkToken = async () =>{
      if(localStorage.getItem('token') !==null){
        let data =  await verifyToken();
        if(!data.success){
          await logoutUser();
          window.location.reload();
        }
      }
    }
    checkToken()
  },[])
  return (
      <Router>
        <Header/>
        <Box style = {{marginTop: 64}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = '/postDetails/:id' component={PostDetails}></Route>
            <Route path = '/createPost' component={CreatePost}></Route>
            <Route path = '/editPost/:id' component={EditPost}></Route>
            <Route path = '/login' component={Login}></Route>
            <Route path = '/register' component= {Register}></Route>
          </Switch>
        </Box>
        <Footer/>
      </Router>
  );
}

export default App;
