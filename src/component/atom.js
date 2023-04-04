import {atom} from 'recoil';


const valueAtom=atom({
    key:'value',
    default:''
})


const taskListAtom=atom({
    key:'taskatom',
    default:[]
})



export{valueAtom, taskListAtom}