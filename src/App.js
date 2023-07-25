import logo from './logo.svg';
import './App.css';
import{useState,useEffect,useRef}from 'react';
function App() {
 const radius=50;
 const [circlecord,setCircleCord]=useState([]);
  useEffect(()=>
    document.addEventListener('click',drawCircle),//to add circle
   
  //  ()=> {document.removeEventListener('click',drawCircle)}//to remove circle
   
    [])
  const drawCircle = (e) => {
    const { clientX, clientY } = e;
    console.log(clientX, clientY)
    const newCircleCord = {
      top: clientY - radius,
      Bottom: clientY + radius,
      left: clientX - radius,
      right: clientX + radius,
      backgroundColor:'red',
    }
    setCircleCord(...circlecord, newCircleCord)
  }

  

  
  
    
  return (
    <div style={{ height:"100vh",width:"100vw"}}>
      <h1 style={{textAlign:"center"}}>Circle Click</h1>
            {circlecord.map((ele)=>{
              return (
                <>
                <Circle />
                </>
              )

            })}

    </div>
  );
}

const Circle = ({ top, left, background }) => {
  return <div
    style={{ position: "absolute", width: 50 * 2, height: 50 * 2, borderRadius: "50%", top, left, background }}></div>
};


export default App;
