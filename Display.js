import React,{useState} from 'react'
import HookEffect from './HookEffect'

function Display() {
    const [display , setDisplay ] = useState(true)

    return (
        <div>
            <button onClick ={() =>setDisplay(!display)}>Remove</button>
            {display && <HookEffect></HookEffect>}
        </div>
    )
}

export default Display
