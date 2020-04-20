import React, { useState, useEffect } from "react";
import '../Styling Sheets/Profile.css'
import { db } from '../firebase.js'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import history from "../history.js"

 
const Profile = () => {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    console.log('Using Effect');

    const unsub = db.collection('People').onSnapshot(snapshot => {
      const userInfo = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProfile(userInfo);
      console.log(userInfo);
    });

    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);


    return (
      <div>
        <div className="profile-container col-md-6">
          <div>
            <img className="profile-pic" src="./default_profile.png" alt="headshot"/>
            {profile.map((prof, ndx) => (
              <div key={ndx}>
                <h1>{prof.firstName} {prof.lastName}</h1>
                <h2>{prof.title}</h2>
                {prof.tags.map((value, index) =>
                  <Badge pill variant='dark' key={index}>
                    {value}
                  </Badge>
                  )}
                  <br />
              </div>
          ))}
        </div>
        <br />
          <div>
            <h4 className="profile-biography-hdr">Musical Biography: </h4>
            <p className="profile-biography">{profile.map(prof => prof.bio)}</p>
          </div>
            <Button variant="secondary" size="small" onClick={() => history.push('/edit-profile')}>
                  Edit
            </Button>
        </div>
      </div>
    );
}
 
export default Profile;