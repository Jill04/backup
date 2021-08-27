import React, {useState,useEffect}  from 'react'

function HookEffect() {

    // const [count,setCount] = useState(0);
    // const [name,setName]  = useState('')

    const [x ,setX] = useState(0)
    const [y ,setY] = useState(0)
    
    useEffect(() =>{
       
    //  document.title = `You clicked ${count} times`
    // },[count])
    console.log("use effect called")
    window.addEventListener("mousemove", e => {setX(e.clientX);setY(e.clientY)})

    return(
        window.removeEventListener("mousemove", e => {setX(e.clientX);setY(e.clientY)})
    )
    },[])

    return(
        <div>
            {/* <input type = 'text' value ={name} onChange ={e => setName(e.target.value)}/>
        
            <button  onClick ={ () => setCount(count+1)}>Clicked {count} times </button> */}
            X - {x} Y - {y}
        </div>
    )
}

export default HookEffect
