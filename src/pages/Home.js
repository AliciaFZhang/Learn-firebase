import React, {useState, useEffect} from 'react';
import { getDocs, deleteDoc, doc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config.js';

function Home({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  })

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }
  return(
    <div className="homepage">
      {postLists.map((post) => {
        return <div><div>{post.title} </div>
        { isAuth && post.author.id === auth.currentUser.uid  && (<div><button onClick={()=>deletePost(post.id)}>❌</button></div>)}
        </div>
      })}
    </div>
  );
}
export default Home;