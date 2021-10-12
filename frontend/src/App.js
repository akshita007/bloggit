import {HashRouter as Router, Switch,Route} from "react-router-dom";
import {Box} from "@material-ui/core";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import PostDetails from "./components/Post/PostDetail";
import CreatePost from "./components/Post/CreatePost";

function App() {
  return (
      <Router>
        <Header/>
        <Box style = {{marginTop: 64}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = '/postDetails' component={PostDetails}></Route>
            <Route path = '/CreatePost' component={CreatePost}></Route>
          </Switch>
        </Box>
      </Router>
  );
}

export default App;
