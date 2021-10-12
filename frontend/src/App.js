import {HashRouter as Router, Switch,Route} from "react-router-dom";
import {Box} from "@material-ui/core";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import PostDetails from "./components/Post/PostDetail";
import CreatePost from "./components/Post/CreatePost";
import EditPost from "./components/Post/EditPost";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
      <Router>
        <Header/>
        <Box style = {{marginTop: 64}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = '/postDetails/:id' component={PostDetails}></Route>
            <Route path = '/createPost' component={CreatePost}></Route>
            <Route path = '/editPost' component={EditPost}></Route>
            <Route path = '/login' component={Login}></Route>
            <Route path = '/register' component= {Register}></Route>
          </Switch>
        </Box>
      </Router>
  );
}

export default App;
