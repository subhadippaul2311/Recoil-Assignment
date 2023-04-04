 import {useRecoilState} from "recoil"
 import color from './atom'

 import style from './changeColor.module.css'


 export default function ChangeColor(){

    const[isColor,setIsColor]=useRecoilState(color);

    return(
        <div className={style.mainContainer}>
            <div className={style.home}>
                <h2 style={isColor?{color:"blue"}:{color:"red"}}>
                    Hi,I change the color on clicking the button
                </h2>
                <button className={style.button} onClick={()=>setIsColor(!isColor)}>Change Color</button>
            </div>
        </div>
    );
 }