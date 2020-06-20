import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Fetchdata() {
    const[posts,setposts]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            setposts(res.data);
        })
        .catch(err=>{console.log(err)})
    },[])
    return (
        <div>
            <ul>
    {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
            
        </div>
    )
}
