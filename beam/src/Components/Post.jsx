import React from "react";
import '../Styling Sheets/Profile.css'
import "../Styling Sheets/Post.css";
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';
import { db } from '../firebase.js'


export default function Post ({post}){

    const deletePost = id => {
        db.collection("Posts")
        .doc(post.id)
        .delete();
    }


    return (
        <div className="post-container">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <img 
                            src="../default_profile.png" 
                            className="post-pic" 
                            alt="profile"/>
                        {post.name}
                    <div className="post-tag">
                    {post.tags.map((tag, index) => 
                        <Badge pill variant='dark' key={index}>
                            {tag}
                        </Badge>)}    
                    </div>
                    </Card.Title>
                    <Card.Text>
                        {post.description}
                    </Card.Text>  
                    <div> 
                        <a href={post.link}>
                        <img 
                            src="../note.jpg"
                            className="post-content-img" 
                            alt="album cover"/>  
                        </a>     
                        <div>
                            Album: {post.album} <br />
                            Track: {post.track} <br />
                            Artist: {post.artist} <br />
                        </div>
                        
                    </div>   
                    <img 
                        onClick={deletePost}
                        className="post-delete"
                        src="../delete.png"
                        alt="delete"/>
                </Card.Body>
            </Card>
        </div>
    );
}

