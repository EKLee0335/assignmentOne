import React from "react"
import './search.css'
function Search(props){
   return (<div className='col'>
                <div className='row'>
                    <input className='myInput' onChange={props.handelChange}></input>
                </div>
           </div>)
}
export default Search