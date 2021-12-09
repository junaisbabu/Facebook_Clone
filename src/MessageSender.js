import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import  PhotoLibraryIcon  from '@mui/icons-material/PhotoLibrary'
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from '@firebase/app-compat'

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        // some clever db stuff

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");

    }

    return (
        <div className="messageSender" >
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                    className="messageSender_input"
                    placeholder={`What's on your mind? ${user.displayName} `}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <input placeholder="image URL (Optional)"
                     value={imageUrl} 
                     onChange={e => setImageUrl(e.target.value)} />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color:"red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color:"green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmotionIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
