import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button'
import '../Styling Sheets/EditProfile.css'
import { db } from '../firebase.js'
 
const EditProfile = () => {

  const [prof, setProfile] = useState({
    firstName: '',
    lastName: '',
    title: '',
    bio: '',
    tags: []
  });

  useEffect(() => {
    console.log('Using Effect');

    const unsub = db.collection('People').onSnapshot(snapshot => {
      const userInfo = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProfile(userInfo[0]);
      console.log(userInfo[0]);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleSubmit = e => {

    // Need to convert the string into individual tags
    prof.tags = document.getElementById('tags').value.split(" ");

    e.preventDefault();
    const updateRef = db.collection('People').doc(prof.id); 
    prof.id = null;
    updateRef.set({
        firstName: prof.firstName,
        lastName: prof.lastName,
        title: prof.title,
        tags: prof.tags,
        bio: prof.bio
    }).then(setProfile({
        firstName: prof.firstName,
        lastName: prof.lastName,
        title: prof.title,
        bio: prof.bio,
        tags: prof.tags
    })).catch(error => {
        console.log(error);
    });
  };

  const handleChange = e => {
    setProfile({ ...prof, [e.target.name]: e.target.value });
  };
  
    return (
      <div>
        <div className="edit-profile-container col-md-6">
          <form onSubmit={handleSubmit}>
          <label className='active' htmlFor='firstName'>
            First Name
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={prof.firstName}
              onChange={handleChange}
              className='validate edit-profile-input'
              required
            />
          </div>

          <br />

          <label className='active' htmlFor='lastName'>
            Last Name
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={prof.lastName}
              onChange={handleChange}
              className='validate edit-profile-input'
              required
            />
          </div>

          <br />

          <label className='active' htmlFor='title'>
            Title
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='title'
              name='title'
              value={prof.title}
              onChange={handleChange}
              placeholder='Singer, Engineer, etc.'
              className='validate edit-profile-input'
              required
            />
          </div>

            <br />
          
          <label className='active' htmlFor='bio'>
            Bio
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='bio'
              name='bio'
              value={prof.bio}
              onChange={handleChange}
              placeholder='Hi, nice to meet you'
              className='validate edit-profile-input'
              required
            />
          </div>

          <br />
          
          <label className='active' htmlFor='tags'>
            tags
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='tags'
              name='tags'
              value={prof.tags}
              onChange={handleChange}
              placeholder='beats, country, etc.'
              className='validate edit-profile-input'
              required
            />
          </div>

          <br />

            <Button variant="secondary" type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    );
}
 
export default EditProfile;