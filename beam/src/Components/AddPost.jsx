import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import '../Styling Sheets/AddPost.css'
 
const AddPost = () => {
  
    return (
      <div>
        <div className="add-post-container col-md-6">
          <Form>

          <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formArtist">
              <Form.Label>Artist</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formTrack">
              <Form.Label>Track</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formAlbum">
              <Form.Label>Album</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post description</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formLink">
              <Form.Label>Link</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
}
 
export default AddPost;