import { useState,useEffect } from "react";
function App(){
  const [psots,setPosts]=useState(null);
  useEffect
  fetch("https://jsonplaceholder.typicocde.com/posts")
  .then((dataJson)=>{
    return dataJson.json();
  })
  .then((data)=>{
    setPosts(data);
  })

  .catch((error)=>{
    console.log(error);
  });
} 

return(
  <>
    <ul>
      {posts}
    </ul>
  </>
)
export default App
