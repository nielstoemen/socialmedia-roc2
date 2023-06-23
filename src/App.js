import logo from './logo.svg';
import './App.css';
import './firebase.js';
import React, { useState, useEffect } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore'
import { db } from './firebase.js';
import { getDatabase, ref, set, addDoc } from "firebase/firestore";

function App() {

  

  //-------------------------------------

    const [getUsersList, setUsersList] = useState([]);
    const todos = collection(db, "todos");
    const users = [];


    useEffect(()=>{
        const getUsersList = async () => {
          const data = await getDocs(todos);
          setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getUsersList();
      },[])


      getUsersList.forEach((data) => {
        users.push(<h3 className='Username' key={data.id}> {data.test}</h3>)
        users.push(<button key={data.id}>Send Friendship</button>)
        //users.push(<h2 className='Password'>{data.Password}</h2>)
      })

      //------------------------------------------------------
        

    // const [getTitle, setTitle] = useState("testuser");
    // const [getTask, setTask] = useState("task1");
    // const [getStatus, setStatus] = useState("To do");

    //   const createJob = async () =>{
    //   await addDoc(
    //     jobCollectionRef,
    //   {title: getTitle,
    //     task: getTask,
    //     status: getStatus
    //   });
      
  // }



  const [name, setName] = useState();
    const [age, setAge] = useState();
 
    // Push Function
    const Push = () => {
        db().ref("user").set({
            name: name,
            age: age,
        }).catch(alert);
    }



  //---------------------------------------------
    



      return(
        <div className="users">
            { users }

            <center>
                <input placeholder="Enter your name" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input placeholder="Enter your age" value={age}
                    onChange={(e) => setAge(e.target.value)} />
                <br /><br />
                <button onClick={Push}>PUSH</button>
            </center>
            
            
        </div>
      );
    
  
}

export default App;


// import { db } from '../../dbconfig.js'
// import { collection, getDocs } from 'firebase/firestore'
// import { useEffect, useState } from 'react';

// function UserList() {
//   const [getUsersList, setUsersList] = useState([]);
//   const usersCollectionRef = collection(db, "Users");
//   const users = [];

//   useEffect(()=>{
//     const getUsersList = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//     }
//     getUsersList();
//   },[])

//   getUsersList.forEach((data) => {
//     users.push(<h3 className='Username' key={data.id}> {data.Username}</h3>)
//     users.push(<button key={data.id}>Send Friendship</button>)
//     //users.push(<h2 className='Password'>{data.Password}</h2>)
//   })

//   return(
//     <div className="users">
//         { users }

//     </div>
//   );
// }

// export default UserList;



// const [todos, setTodos] = useState([]);
 
//     const fetchPost = async () => {
       
//         await getDocs(collection(db, "todos"))
//             .then((querySnapshot)=>{               
//                 const newData = querySnapshot.docs
//                     .map((doc) => ({...doc.data(), id:doc.id }));
//                 setTodos(newData);                
//                 console.log(newData[0].username);
//             })
       
//     }
   
//     useEffect(()=>{
//         fetchPost();
//     }, [])

//     return (
//       <div className="todo-content">
//       { todos.username }
//     </div>