import React, { Component } from "react";
import '../Styling Sheets/Profile.css'
import Post from './Post';
import Tag from "./Tag";
 
class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-container col-md-6">
          <div>
            <img className="profile-pic" src="./default_profile.png" alt="headshot"/>
            <h1 className="">Cory Chinn</h1>
            <h2 className="">Engineer</h2>
            <Tag /> 
            <Tag />
            <Tag />
          </div>
          <br />
          <h4 className="profile-biography-hdr">Musical Biography: </h4>
          <p className="profile-biography">I found my musical passion in high school, 
            where I sang in choir and played guitar. Once I graduated, I stuck with
            guitar, learning more advanced scales and music theory until I found 
            my true passion in producing. I bough my first keyboard setup and practiced
            with Ableton, then moved to LA from Michigan to go to school for it. I'm 
            now stationed in LA permanently making beats and producing music that hopefully
            everyone loves.</p>
        </div>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
 
export default Profile;