import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import '../Styling Sheets/AddPost.css'
import { db } from '../firebase.js'
 
const AddPost = () => {

  const [post, setPost] = useState({
    name: '',
    track: '',
    artist: '',
    album: '',
    description: '',
    link: '',
    tags: []
  });

  const handleSubmit = e => {

    // Need to convert the string into individual tags
    post.tags = document.getElementById('tags').value.split(" ");

    e.preventDefault();
    db.collection('Posts').add(post); // update
    setPost({
      name: '',
      track: '',
      artist: '',
      album: '',
      description: '',
      link: '',
      tags: []
    });
  };

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  
    return (
      <div>
        <div className="add-post-container col-md-6">
          <form onSubmit={handleSubmit}>
          <label className='active' htmlFor='name'>
            Name
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='name'
              name='name'
              value={post.name}
              onChange={handleChange}
              placeholder='first name last name'
              className='validate'
              required
            />
          </div>

          <br />

          <label className='active' htmlFor='artist'>
            Artist
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='artist'
              name='artist'
              value={post.artist}
              onChange={handleChange}
              placeholder='stage name'
              className='validate'
              required
            />
          </div>

          <br />

          <label className='active' htmlFor='track'>
            Track
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='track'
              name='track'
              value={post.track}
              onChange={handleChange}
              placeholder='Bohemian Rhapsody'
              className='validate'
              required
            />
          </div>

            <br />
          
          <label className='active' htmlFor='album'>
            Album
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='album'
              name='album'
              value={post.album}
              onChange={handleChange}
              placeholder='mixtape'
              className='validate'
              required
            />
          </div>

          <br />
          
          <label className='active' htmlFor='description'>
            Track Description
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='description'
              name='description'
              value={post.description}
              onChange={handleChange}
              placeholder='A cool tune to listen to in the car'
              className='validate'
              required
            />
          </div>

          <br />
          
          <label className='active' htmlFor='link'>
            link
          </label>
          <div className='input-field'>     
            <input
              type='text'
              id='link'
              name='link'
              value={post.link}
              onChange={handleChange}
              placeholder='youtube/spotify links'
              className='validate'
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
              value={post.tags}
              onChange={handleChange}
              placeholder='beats, country, etc.'
              className='validate'
              required
            />
          </div>

          <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
}
 
export default AddPost;