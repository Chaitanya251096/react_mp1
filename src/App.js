import React, {useState} from 'react';
import './App.css';

function App() {

const [inputText, setInputText] = useState('')
const [inputText1, setInputText1] = useState('')
const [inputText2, setInputText2] = useState('')
const [inputText3, setInputText3] = useState('')
const [inputText4, setInputText4] = useState('')
const [updated, setUpdated] = useState("0000 0000 0000 0000");
const [updated1, setUpdated1] = useState("Chaitanya Chandge");
const [updated2, setUpdated2] = useState('00');
const [updated3, setUpdated3] = useState('00');
const [updated4, setUpdated4] = useState('000');
const [isVisible, setIsVisible] = useState(true);
const [isVisible1, setIsVisible1] = useState(true);
const [errorText, setErrorText] = useState('')
const [errorText1, setErrorText1] = useState('')
const [errorText2, setErrorText2] = useState('')
const [errorText3, setErrorText3] = useState('')
const [errorText4, setErrorText4] = useState('')

 


 


const handleChange =(e)=>{ 
  
setInputText(e.target.value)
}
const handleChange1 =(e)=>{ 
  
  setInputText1(e.target.value)
  }

  const handleChange2 =(e)=>{ 
  
    setInputText2(e.target.value)
    }

    
  const handleChange3 =(e)=>{ 
  
    setInputText3(e.target.value)
    }
    
  const handleChange4 =(e)=>{ 
  
    setInputText4(e.target.value)
    }

    const validateForm = () =>{

 
      let isError = false
      if(inputText.length <= 0){
          setErrorText('Card number is required');
          isError = true
      }
      let isError1 = false
      if(inputText1.length <= 0){
          setErrorText1('Card holder name is required');
          isError1 = true
       
      }
      let isError2 = false
      if(inputText2.length <= 0){
          setErrorText2('Month and Year is required');
          isError2 = true
         
      }
      let isError3 = false
      if(inputText3.length <= 0){
          setErrorText3(' CVC required');
          isError3 = true
         
      }
      
     
  
      return isError;
      return isError1;
      return isError2;
      return isError3;
     
  
  
      
   
     
      
  }




const handleClick1 = ()=>{

  setIsVisible(current => !current);
  setIsVisible1(current1 => !current1);
  setInputText("")
  setInputText1("")
  setInputText2("")
  setInputText3("")
  setInputText4("")
  setUpdated("0000 0000 0000 0000")
  setUpdated1("Chaitanya Chandge")
  setUpdated2("00")
  setUpdated3("00")
  setUpdated4("000")

}


  return (
      <>
      <div className='container'>
      <div className='backOne'>
      <div className='frontCard'>
          <div className='logo'><div className='logo2'></div></div>
          <div className='cardPart1'>
            
          <div id='cardNum' >
          {updated}
          </div>
          <div className='cardPart2'>
             <div id='cardName'>{updated1}</div>
            <div><span id='cardMonth'>{updated2}</span>/<span id='cardYear'>{updated3}</span></div>
          </div>
          </div>

        </div>
        <div className='backCard'>
        <div><p id='cVV'>{updated4}</p></div>
        </div>
      </div>
      



      <div className='backTwo'>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        if(validateForm()){
                
          return
         }


         const cardNum= document.getElementById("cardNum") 
         const cardName= document.getElementById("cardName")
         const cardMonth= document.getElementById("cardMonth") 
         const cardYear= document.getElementById("cardYear") 
         const cVV= document.getElementById("cVV")
        
            
         cardNum.innerText = setUpdated(inputText);
         cardName.innerText = setUpdated1(inputText1);
         cardMonth.innerText = setUpdated2(inputText2);
         cardYear.innerText = setUpdated3(inputText3);
         cVV.innerText = setUpdated4(inputText4);
         setIsVisible(current => !current);
         setIsVisible1(current1 => !current1);
         
       

                setInputText("")
                setInputText1("")
                setInputText2("")
                setInputText3("")
                setInputText4("")
                setErrorText("")
                setErrorText1("")
                setErrorText2("")
                setErrorText3("")
                setErrorText4("")
                

       

      
      }} className='formDetail' style={{visibility: isVisible ? 'visible' : 'hidden'}}>

      <label htmlFor="">CARD NUMBER</label>
      <br />
      <input 
      maxLength={19}
      value={inputText} 
      onChange={handleChange}
      placeholder='eg. 1231 1231 1231 1231'
      className='cardDT'
      
      />
      <p style={{color: 'red'}}>{errorText}</p>
      <br />

      <label htmlFor="">CARD-HOLDERS NAME</label>
      <br />
      <input 
      placeholder='eg. Chaitanya Chandge'
      value={inputText1} 
      onChange={handleChange1}
      className='cardDT'
      />
      <p style={{color: 'red'}}>{errorText1}</p>
      
      <br />
      <div className='dateCvv'>
        <div>
      <label htmlFor="">EXPIRY DATE (MM/YY)</label>
      <br />
      <input   
      placeholder='MM'
      value={inputText2} 
      onChange={handleChange2}
      className='otrCardDT1'
      />
      <input  
      placeholder='YY'
      value={inputText3} 
      onChange={handleChange3}
      className='otrCardDT2'
      />
      <p style={{color: 'red'}}>{errorText2}</p>
      </div>
      <div>
      <label className='labelCVV' htmlFor="cVV">CVC</label>
      <br />
      <input   
      placeholder='eg. 123'
      value={inputText4} 
      onChange={handleChange4}
      className='otrCardDT3'
      />
      <p style={{color: 'red'}}>{errorText3}</p>

      </div>



      </div>
      
      
      <br />

      

      <button type='submit'>Confirm</button>
      </form>
      

      <div className='sucMsg' style={{visibility: !isVisible1 ? 'visible' : 'hidden'} } >
        <h1>Transaction is Successful !!!</h1>
        <button onClick={handleClick1}>continue</button>
      </div>
     
            </div>





           
            </div>
          
      </>
  );
}

export default App;
