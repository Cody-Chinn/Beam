import React from 'react';
import "../Post.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Post () {

    return (
        <div className="post-container col-md-6">
            <Card>
                <Card.Body>
                    <Card.Title>
                    <img 
                        src="../default_profile.png" 
                        className="post-pic" 
                        alt="profile"  />
                        Cory Chinn
                    <div className="post-tag">
                        <Button variant="secondary">Engineer</Button>{' '}
                    </div>
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
        </div>

    )
}