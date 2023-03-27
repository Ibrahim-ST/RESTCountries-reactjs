import { useEffect, useState } from 'react';
import './App.css';
import Photos from './components/Photos/Photos';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Users></Users>
      <Photos></Photos>
     {/*  
      <LoadPost></LoadPost>
      <District name={"CTG"} specialty={"Dowry System"}></District>
      <District name={"Dhaka"} specialty={"Westernalism"}></District>
      <District name={"CoxBazar"} specialty={"Cheating"}></District> */}
    </div>
  );
}

function LoadPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Post : {posts.length}</h1>
      {
        posts.map(post => <Post
          title={post.title}
          body={post.body}
          id={post.id}
          userId={post.userId}
          key={post.id}
        ></Post>)
      }
      {/* {console.log(posts)} */}
    </div>
  );
}

function Post(props) {
  const postStyle = {
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: 'lightblue',
    margin: '15px',
  }
  return (
    <div style={postStyle}>
      <h2 style={{color: 'red', fontFamily:'cursive'}}>Post No: {props.id}</h2>
      <h3>User id: {props.userId}</h3>
      <h1>Title : {props.title}</h1>
      <p>Body : {props.body}</p>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '15px',

}

function District(props) {
  const [Power, setPower] = useState(1);
  const boostPower = () => setPower(Power * 2);
  /* const boostPower = () => {
    const newPower = Power*2;
    setPower(newPower);
  } */
  return (
    <div style={districtStyle} className="districtName">
      <h2>Name: {props.name}</h2>
      <p style={{ color: 'red' }}>Specialty : {props.specialty}</p>
      <h4>Power : {Power}</h4>
      <button onClick={boostPower}>Boost</button>
    </div>
  );
}

export default App;
