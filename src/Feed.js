import React, { useState, useEffect } from "react";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  // usestate will hold store the input + post data for that moment
  const [input, setInput] = useState([""]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    {
      /* once the button click this event will happen  
      that's mean input 'text' going to push to the realtime listen (useEffect)collection
      list of things going to add in the database 
      */
    }
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            {/* this input will store the data to "input usestate" by 
            everything we type it's firing up an event and pushing to setInput */}
            <input
              placeholder="Start a Post"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* post button below */}
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={ViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
