import Post from './Post';
import React, { useState, useEffect } from "react";
import '../Styling Sheets/Home.css'
import { db } from '../firebase.js'

const Home = () => {

      const [posts, setPosts] = useState([]);  

      useEffect(() => {
        console.log('Using Effect');
        const unsub = db.collection('Posts').onSnapshot(snapshot => {
          const postInfo = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setPosts(postInfo);
          console.log(postInfo);
        });

        return () => {
          unsub();
        }
      }, []);

      return ( 
        <div className="col-md-6 home-feed">
          {posts.map((post, index) => <Post key={index} post={post}/>)} 
        </div>
      );
}
   
  export default Home;