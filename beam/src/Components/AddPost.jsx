import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import '../Styling Sheets/AddPost.css'
 
class AddPost extends Component {
  render() {
    return (
      <div>
        <div className="add-post-container col-md-6">
          <Form>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post description</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formAlbum">
              <Form.Label>Album</Form.Label>
              <Form.Control type="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formAlbum">
              <Form.Label>Audio</Form.Label>
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
}
 
export default AddPost;