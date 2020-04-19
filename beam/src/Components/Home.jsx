import Post from './Post';
import React, { Component, useState, useEffect } from "react";
import '../Styling Sheets/Home.css'
import { db } from '../firebase.js'

class Home extends Component {

    render() {
      return (
        <div className="col-md-6 home-feed">
            <Post />
        </div>
      );
    }
  }
   
  export default Home;