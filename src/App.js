import React,{useEffect, useState} from "react";
import Title from "./components/title/title";
import Search from "./components/search/search";
import Table from "./components/table/table";
import { dataList,userInput } from "./components/context/context";
import './App.css'
function App() {
  const [input,setInput] = useState();
  const [more, setMore] = useState('moreHide');
  const [btnCnt,setCnt] = useState(1);
  const [data,setData] = useState();
  useEffect(()=>{
     fetch("https://hn.algolia.com/api/v1/search?query=")
     .then(res => res.json())
     .then((result)=>{
        console.log(result.hits)
        setData(result.hits)
        setMore('moreDisplay')
      }
  )},[])
  useEffect(()=>{
    if(input===''){
      setMore('moreDisplay')
    }
    else{
      setMore('moreHide')
    }
  },[input])
  const handelChange = (event) =>{
    setInput(event.target.value);
  }
  const deleteItem = (target)=>{
    let tmp = data.filter((item)=>{return item!== target})
    setData(tmp)
  }
  const clickMore = ()=>{
       setMore('moreHide');
       setCnt(btnCnt+1);
  }
  return (
    <userInput.Provider value ={input}>
    <dataList.Provider value={data}>
      <div className='container'>
        <div className='row'>
           <Title/>
        </div>
        <div className='row'>
          <Search handelChange={handelChange}/>
        </div>
        <div className='row'>
          <Table deleteItem={deleteItem} btnCnt={btnCnt}/>
        </div>
        <button className={more} onClick={clickMore}>More</button>
      </div>
    </dataList.Provider>
    </userInput.Provider>
     
  );
}

export default App;
