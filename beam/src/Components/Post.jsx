import React from 'react';
import "../Post.css";
import Card from 'react-bootstrap/Card'

export default function Post () {

    return (
        <Card className="post-container col-md-6">
            <Card.Body>
                <Card.Title>
                <img 
                    src="../logo192.png" 
                    className="post-pic" 
                    alt="profile"  />
                    Cory Chinn
                </Card.Title>
                <Card.Text>
                    Check out some of my new music!
                </Card.Text>  
                <div> 
                    <img 
                        src="../note.jpg"
                        className="post-content-img" 
                        alt="album cover"/>       
                    <div>
                        Album: mixtape <br />
                        Track: UFO <br />
                        Artist: Cory Chinn <br />
                    </div>
                </div>   
            </Card.Body>
        </Card>
    )
}