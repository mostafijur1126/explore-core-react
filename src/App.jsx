
import './App.css'
import ToDo from './todo';
import Food from './food';
import Singer from './singer';

function App() {

  const singers =[
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2 , name: 'Tahsan', age: 45},
    {id:3 , name: 'Shuvro Dev', age: 57}
  ]

  return (
    <>
      <h1>Vite + React</h1>
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

function Developer({name, tech}) {
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
      padding:'10px',
      margin:'10px',
      border:'2px solid red',
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
