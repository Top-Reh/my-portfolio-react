import React,{useState,useEffect} from "react";
import './dice-style.css';

export default function Dice() {
    const [numbers,setnumbers] = useState([]);
    const [buttontext,setbuttontext] = useState('Start');
    const [firstClickedValue,setFirstClickedValue] = useState('');
    const [starting,setStarting] = useState(false);
    const [thetime,setTheTime] = useState(null);
    const [thefastesttime,setTheFastestTime] = useState(null);
    const [showTheTime,setShowTheTime] = useState(null);
    
    function randomNumbers() {
        return Math.ceil(Math.random()*6)
    }
    function RollDice() {
        if (buttontext === 'Try again'|| buttontext ==='Next match') {
            startthegame();
            setStarting(false);
            setTheTime(null);
            //setTheLastestTime(null);
            setShowTheTime(null);
            setbuttontext('Start');
        } else if (buttontext === 'Start'|| buttontext ==='Roll'){
            setbuttontext('Roll');
            setnumbers(prenum => 
                prenum.map(num => num.ishold ? num : {value:randomNumbers(),ishold:false})   
            ) 
            setStarting(true);
        }
        
        //setbuttontext('Try again' ? numbers : setnumbers(prevnum => prevnum.map({value:randomNumbers(),ishold:false})))
    }
    function startthegame() {
        const newNumbers = [];
        for (let i = 0; i < 10; i++) {
            newNumbers.push({value:randomNumbers(),ishold:false});
            setnumbers(newNumbers);
            setFirstClickedValue('')
            allInONeEffect();
        }
    }
    function allInONeEffect() {
        setTheTime('');
        //setTheLastestTime('');
        setShowTheTime('');
    }

    /*function dynamicColor() {
         setnumbers(prenum => prenum.map())
    }*/

    //const styles = {backgroundColor : numbers.ishold ? 'white' : 'green'}
    function toggleHold(index) {
        if (starting) {
            setnumbers(prenum => prenum.map((num,i) => i===index ? {...num,ishold: !num.ishold} : num)
            // num => num.value === index ? {...num,ishold:!num.ishold} : num    
            )
            setStarting(true);
            setFirstClickedValue(prev => prev === '' ? numbers[index].value : prev)
            console.log(firstClickedValue)
            if (!thetime) {
                setTheTime(Date.now())
            }
        } else {
            console.log('not starting')
            alert('Press the start button first!')
        } 
    }

    /*function time() {
        const date = new Date();
        const second = date;
        console.log(second)
        return second;
    }*/

    /*function caculatedTime() {
        return setShowTheTime(Math.abs(thelastesttime - thetime));
    }*/
   
   function fastesttimeEver() {
    return  localStorage.getItem('fastestTime');
   }

    useEffect(() => {
        startthegame()     
        const savedFastestTime = localStorage.getItem('fastestTime')    
        if (savedFastestTime) {
            setTheFastestTime(parseFloat(savedFastestTime));
        }  
    },[])

    useEffect(()=> {
        if (numbers.length > 0 && numbers.every(num => num.ishold)) {
            setbuttontext(numbers.every(num => num.value === firstClickedValue) ? 'Next match' : 'Try again')
            //setTheLastestTime(Date.now())
            if (thetime) {
                const newTime = (Date.now() - thetime)/1000;
                setShowTheTime(newTime);
                if (!thefastesttime||newTime < thefastesttime) {
                    setTheFastestTime(newTime);
                    localStorage.setItem('fastestTime',newTime);
                }
            }   
            console.log( localStorage.getItem('fastestTime')) 
        }
    },[numbers]);

    return (
        <div className="containerdice">
            <h1 className="theh1">TEST YOUR HAND HOW FIRST!</h1>
            <div className="numbers">
                {numbers.map((num,index)=> <h1 className='hdiv' key={index} style={{backgroundColor : num.ishold ? num.value === firstClickedValue ? 'green' : 'red' : 'white'}} onClick={()=>toggleHold(index)}>{num.value}</h1>)}
            </div>
            <div className="btndiv">
                <button onClick={RollDice}>{buttontext}</button>
            </div>
            <p>The time is {showTheTime || '0'}s</p>
            <p>The fastest time is {fastesttimeEver()}s</p>
        </div>
    )
}
