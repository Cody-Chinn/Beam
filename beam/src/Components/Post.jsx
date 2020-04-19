import React, { useState } from "react";
import '../Styling Sheets/Profile.css'
import "../Styling Sheets/Post.css";
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';


export default function Post (){
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>
                    <img 
                        src="../default_profile.png" 
                        className="post-pic" 
                        alt="profile"  />
                        Cory Chinn
                    <div className="post-tag">
                    
                        <Badge pill variant='dark'>
                            beats
                        </Badge>
                    
                    </div>
                    </Card.Title>
                    <Card.Text>
                        Check out my new music!
                    </Card.Text>  
                    <div> 
                        <img 
                            src="../note.jpg"
                            className="post-content-img" 
                            alt="album cover"/>       
                        <div>
                            Album: Mixtap <br />
                            Track: UFO <br />
                            Artist: Cory Chinn <br />
                        </div>
                    </div>   
                </Card.Body>
            </Card>
        </div>
    );
}

