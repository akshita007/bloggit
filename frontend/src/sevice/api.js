import axios from 'axios';

const url = 'http://localhost:5000';


export const getPosts =async ()=>{
    try{
        const response = await axios.get(`${url}/post`);
        return response.data;
    }catch(err){
        console.log('error while getting post ',err)
    }
}
export const getPost = async (id)=>{
    try{
        const response = await axios.get(`${url}/post/${id}`);
        return response.data;
    }catch(err){
        console.log('error while getting post ',err)
    }
}
export const createPost = async (data)=>{
    try{
        return await axios.post(`${url}/post`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while posting ',err);
    }
};
export const editPost = async (id,post)=>{
    try{
        return await axios.put(`${url}/post/${id}`,post,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while posting ',err);
    }
};
export const deletePost = async (id)=>{
    try{
        return await axios.delete(`${url}/post/${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while deleting ',err);
    }
};

export const loginUser = async ({username,password})=>{
    try{
        await axios.post(`${url}/users/login`,{username,password})
        .then(res =>{
            if(res.data.token){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',res.data.user);
            }
        }).catch(err => console.log('error in fetching token ',err))
    }catch(err){
        console.log('error while login ',err);
    }
};

export const registerUser = async ({username,name,password})=>{
    try{
        const response = await axios.post(`${url}/users/register`,{username,name,password})
        console.log(response.data);
    }catch(err){
        console.log('error while registering user ',err);
    }
};
export const logoutUser = async ()=>{
    try{
        await axios.get(`${url}/users/logout`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return res;
            }).catch(err=>{
                console.log('logout err ',err);
            })
    }catch(err){
        console.log("error while logging out ",err);
    }
}

export const verifyToken = async () =>{
    try{
        const response = await axios.get(`${url}/users/checkJwt`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(err){
        console.log("error while checking ",err);
    }
};