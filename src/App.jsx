
import './App.css'
import ToDo from './todo';
import Food from './food';
import Singer from './singer';
import Users from './users';
import { Suspense } from 'react';
import Comments from './Comments';
// import Friends from './Friends'


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

  // const friendsFatch = async()=> {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   return res.json();
  // }


  const commentFetch = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    return res.json();
  }

function App() {

  const commentPromise = commentFetch();
  // const frientsjPromise = friendsFatch();
  console.log(commentPromise);


  const singers = [
    { id: 1, name: 'Dr. Mahfuz', age: 68 },
    { id: 2, name: 'Tahsan', age: 45 },
    { id: 3, name: 'Shuvro Dev', age: 57 }
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h2>Comments are comming...</h2>}>
        <Comments commentPromise= {commentPromise}></Comments>
      </Suspense>
      {/* <Suspense  fallback={<h3>Loding...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback ={<h3>Friends are comming for treet</h3>}>
        <Friends frientsjPromise={frientsjPromise}></Friends>
      </Suspense> */}

      {/* <ToDo task="Learn React"></ToDo> */}
      {/* <Developer name="Mojumdar" tech="JAVA"></Developer>
      <Developer name= "Rajon" tech="Python"></Developer>
      <Developer name= "Sabana" tech="javaScript"></Developer>
      <Student></Student>
      <Person></Person> */}
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      <Food hungry="have to eat somthing" isHungry={true}></Food>
      <Food hungry="im playing" isHungry={false}></Food>
      <Food hungry="i want sleep" isHungry={true}></Food>


    </>
  )
}

function Developer({ name, tech }) {
  // console.log(props);
  return (
    <div className='devloper'>
      <h3>Developer: {name}</h3>
      <p>Technology: {tech}</p>
    </div>
  )
}

function Person() {
  return (
    <div style={{
      padding: '10px',
      margin: '10px',
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <h3>Name:</h3>
      <p>Dept:</p>
    </div>
  )
}

function Student() {
  const styles = {
    color: 'red',
  }
  return (
    <h3 style={styles}>Name</h3>
  )
}

export default App
