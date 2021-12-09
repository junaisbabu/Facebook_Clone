import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* hardcode */}

      {/* <Post 
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvf-BzHS_QhrdvDnWIx8Mhp1xpsZSTPyW3Mw&usqp=CAU"
            message="WOW this works!"
            timestamp="This is a timestamp"
            username="junaisdvs"
            image="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            /> */}
    </div>
  );
}

export default Feed;
