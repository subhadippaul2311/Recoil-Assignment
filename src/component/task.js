
import style from './task.module.css'

import {taskListAtom} from './atom'
import {useRecoilValue} from 'recoil'
import {useNavigate} from "react-router-dom"

const Task=()=>{
    const Navigate=useNavigate()

    const data=useRecoilValue(taskListAtom);

    const handlenavigate=()=>{
        Navigate('/')
    }


    return (
        <div className={style.taskDiv}>
            <h1> Task Todo </h1>
            <ul>
                {data.map((ele,index)=>{
                    return(
                        <li key={index}>{ele}</li>
                    )

                })}
            </ul>

            <button onClick={handlenavigate}> Go to home page</button>
        </div>
    )
}


export {Task}