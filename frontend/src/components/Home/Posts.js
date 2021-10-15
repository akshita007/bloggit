import {Grid} from "@material-ui/core";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getPosts} from "../../sevice/api";
import Post from "./Post";



const Posts = ()=>{
    const [posts,setPosts] = useState([]);
    //let posts=[1,2,3,4,5,6,7,8,9]
    useEffect(()=>{
        const fetchPost = async ()=>{
            let data = await getPosts();
            console.log(data);
            setPosts(data);
        }
        fetchPost();
    },[]);
    return(
        posts.map((post) => (
        <Grid item lg={3} sm={4} xs={12}>
            <Link to={`/postDetails/${post._id}`} style={{textDecoration:"none",color:"inherit"}}>
                <Post post={post} key={post._id} />
            </Link>
        </Grid>
        )) 
    )
};

export default Posts;