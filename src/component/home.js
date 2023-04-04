
import  style from './home.module.css'

import{useRecoilState} from 'recoil'
import{valueAtom, taskListAtom} from './atom'
import {useNavigate} from 'react-router-dom'


const Home=()=>{
    const[value,setValue]=useRecoilState(valueAtom);
    const[taskdata,setTaskdata]=useRecoilState(taskListAtom);

    const Navigate=useNavigate();

    const handleChangeValue=(e)=>{
        setValue(e.target.value)
    }

    const handleAddtask=()=>{
        setTaskdata([...taskdata,value])
        setValue('')
    }

    const handletaskpage=()=>{
        Navigate('/task')
    }



    return(
        <div className={style.homeDiv}>
            <h1 className={style.heading}>Add task in Todd List</h1>
            <input value={value} type="text" placeholder="Enter your text" onChange={handleChangeValue}/>
            <br/>
            <butoon onClick={handleAddtask}> Add Task </butoon>
            <button onClick={handletaskpage}>Check Task</button>
        </div>

    )
}

export {Home}