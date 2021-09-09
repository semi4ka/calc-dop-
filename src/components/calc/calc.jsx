import React,{useState} from "react";
import './style.css';
import Scoreboard from "./scoreboard";
import Operators from "./operators";
import LeftPanel from "./leftPanel";
import {mathAction} from "../../utils";

const Calc = ()=>{
  const [scoreboard, setScoreboard]=useState(0);
  const [history, setHistory]=useState('');
  const [isNewScore, setIsNewScore]=useState(false);
  const [res, setRes] = useState(0);
  const [operator, setOperator] = useState(null);


 const handleLeftPanel = (e)=>{
   const {target}=e;
   let txt = target.innerText;
   if(txt==='AC'){
    setScoreboard(0);
    setIsNewScore(false);
    setRes(0);
    setOperator(null);
   }else{
      if(isNewScore){ // если новый набор
        let trueVal = txt.slice(-1);
        console.log('slice', trueVal);
        if(trueVal==='.') trueVal='0.'
        setScoreboard(trueVal);
        setIsNewScore(false);
      }else{
        console.log(txt); 
        setScoreboard((scoreboard===0?'':scoreboard)+txt);
      }
   }

 }
 const handleOperators = (e)=>{
  setIsNewScore(true);
  const {target}=e;
  const currentNum = Number(scoreboard);
  console.log('scoreboard', scoreboard);
  console.log(currentNum, "currentNum");
  if(operator){
    const {resNum, resTxt}=mathAction(operator, res, currentNum);
    setRes(resNum);
    setHistory(resTxt);
  }else{
    setRes(currentNum);
  }
  console.log(res);
  setOperator(target.innerText);
  
 }

 const handleRes = (e)=>{
  const currentNum = Number(scoreboard);
  if(operator){
    console.log(mathAction(operator, res, currentNum));
    const {resNum, resTxt} = mathAction(operator, res, currentNum);
    setRes(resNum);
    console.log('res', res);
    setScoreboard(resNum);
    setHistory(resTxt);
    setOperator(null);
    setIsNewScore(true);
    setRes(0);
  }
 }



    return (
       
        <div className="calculator">
          <div className="scoreboardTxt">{history}</div>
  <Scoreboard scoreboard={scoreboard}/>
  <div className="buttons">
<Operators handleOperators={handleOperators}/>
<LeftPanel handleLeftPanel={handleLeftPanel}/>
    <div className="equal" onClick={handleRes}>=</div>
  </div>
</div>
    );
}
export default Calc;