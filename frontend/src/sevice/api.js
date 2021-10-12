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
export const createPost = async (post)=>{
    try{
        return await axios.post(`${url}/post`,post)
    }
    catch(err){
        console.log('error while posting ',err);
    }
};