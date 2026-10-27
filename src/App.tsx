


import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Post from './Post'
import Todos from './Todos'
// import Comments from './comments'
import Albums from './Albums'
import Photo from './Photo'


// import Counter from './Counter'
// import Cart from './Cart'

const photoDataPromise=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/photos')
  const data= await res.json();
  return data;
}

const albumsDataPromise= async()=> {
  const res=await fetch ('https://jsonplaceholder.typicode.com/albums')
  const data= await res.json();
  return data;
}

const usersDataPromise= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await res.json();
  return data;
  
}

const postDataPromise=async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts')
  const data= await res.json();
  return data;
}
const commentsDataPromise=async() =>{
  const res= await fetch('https://jsonplaceholder.typicode.com/comments')
  const data= await res.json();
  return data;
}

function App() {
  // function handleClick() {
  //   alert ('button clicked')
  // }
// const handleClick = () => {
//   alert ('click me 2')
// }
// const handleAddToCart = (id) => {
//   alert ('buying item'+ id)
// }


  return (
    <>
    <Suspense>
      <Photo photoDataPromise={photoDataPromise()}></Photo>
    </Suspense>
    <Suspense fallback={<p>loading..</p>}>
      <Albums albumsDataPromise={albumsDataPromise()}></Albums>
    </Suspense>
{/* <Suspense fallback={<p>loading..</p>}>
  <Comments commentsDataPromise={commentsDataPromise()}></Comments>
</Suspense> */}
    {/* <Todos></Todos> */}
    {/* <Suspense fallback={<p>loading..</p>}>
      <Users usersDataPromise={usersDataPromise()}></Users>
    </Suspense> */}
    {/* <Suspense fallback={<p>loaded post...</p>}>
      <Post postDataPromise={postDataPromise()}></Post>
    </Suspense> */}
    {/* <Counter></Counter> */}
    {/* <Cart></Cart> */}
      {/* <h1>My React</h1> */}
{/* <button onClick={handleClick}>Click me 1</button>
<button onClick={handleClick}>Click me 2</button>
<button onClick={() => alert('click me 3')}>Click me 3</button>
<button onClick={() => handleAddToCart(455)}>Buy this</button> */}

    </>
  )
}

export default App
