import React, { useRef, useState } from 'react'
import './Tictac.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data=["","","","","","","","",""];
const TicTac = () => {
  let [count,setcount]=useState(0)
 let [lock,setLock]=useState(false)
 let titleref=useRef()


let box_1=useRef(null)
let box_2=useRef(null)
let box_3=useRef(null)
let box_4=useRef(null)
let box_5=useRef(null)
let box_6=useRef(null)
let box_7=useRef(null)
let box_8=useRef(null)
let box_9=useRef(null)
 let box_array=[box_1,box_2,box_3,box_4,box_5,box_6,box_7,box_8,box_9]
const toggle=(e,num)=>{
  if(lock){
    return 0;
   }
    if(count%2===0){
        e.target.innerHTML = `<img src="${cross_icon}" />`;

        data[num]='x'
        setcount(count=>count+1)  
    }
  else {

        e.target.innerHTML = `<img src="${circle_icon}" />`;
        data[num]='0'
        setcount(++count)  
  }
  checkwin();
}

const checkwin=()=>{
if(data[0]===data[1] &&data[1]===data[2] && data[2]!==""){
    won(data[2]);
}
else if(data[3]===data[4] &&data[4]===data[5] && data[5]!==""){
won(data[5]);
}
else if(data[6]===data[7] &&data[7]===data[8] && data[8]!==""){
won(data[8]);

}
else if(data[0]===data[4] &&data[4]===data[8] && data[8]!==""){
won(data[8]);

}
else if(data[2]===data[4] &&data[4]===data[6] && data[6]!==""){
won(data[6]);

}
else if(data[0]===data[3] &&data[3]===data[6] && data[6]!==""){
won(data[6]);

}
else if(data[1]===data[4] &&data[4]===data[7] && data[7]!==""){
won(data[7]);

}
else if(data[2]===data[5] &&data[5]===data[8] && data[8]!==""){
won(data[8]);
}

}

const won=(winner)=>{
  setLock(true);
  if(winner==="x"){
  titleref.current.innerHTML=`Congratulation:<img src=${cross_icon} />is winner`
  }
  else{
  titleref.current.innerHTML=`Congratulation:<img src=${circle_icon} />is winner`
  }
  }
const reset=()=>{
setLock(false)
data=["","","","","","","","",""];
titleref.current.innerHTML="Tic Tac Toe In <span> React </span>"
  box_array.map((item)=>{
   item.current.innerHTML="";
  })
}

  return (
    <div className='container'>
       <h1 className='title' ref={titleref}>Tic Tac Toe Game In <span>React</span></h1>
         <div className='board'>
         <div className='row1'>
          <div className='boxes'  ref={box_1}  onClick={(e)=>toggle(e,0)}></div>
         <div className='boxes' ref={box_2}  onClick={(e)=>toggle(e,1)}></div>
         <div className='boxes' ref={box_3} onClick={(e)=>toggle(e,2)}></div>
          </div>           
  <div className='row2'>
          <div className='boxes' ref={box_4}  onClick={(e)=>toggle(e,3)}></div>
         <div className='boxes' ref={box_5}  onClick={(e)=>toggle(e,4)}></div>
         <div className='boxes' ref={box_6}  onClick={(e)=>toggle(e,5)}></div>
          </div>   
  <div className='row3'>
          <div className='boxes' ref={box_7} onClick={(e)=>toggle(e,6)}></div>
         <div className='boxes' ref={box_8} onClick={(e)=>toggle(e,7)}></div>
         <div className='boxes' ref={box_9}  onClick={(e)=>toggle(e,8)}></div>
          </div>   

         </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTac
