import React, { useContext } from 'react'
import './table.css'
import { userInput,dataList } from '../context/context'
function Table(props){
    const input = useContext(userInput)
    const data = useContext(dataList)
    const display =()=>{
        if(data!== undefined){
            if(input === undefined){
                let show = data.map(item=>{
                return <tr key={item.objectID}>
                          <td>{item.objectID}</td>
                          <td>{item.author}</td>
                          <td>{item.num_comments}</td>
                          <td>{item.title}</td>
                          <td>{item.url}</td>
                          <td><button onClick={()=>props.deleteItem(item)}>Delete</button></td>
                       </tr>
                })
                console.log(show)
                return show.slice(0,props.btnCnt*10)
            }
            else{
                 let tmp = [];
                 data.forEach((item)=>{
                     if(item.title!== null){
                          if(item.title.toLowerCase().indexOf(input.toLowerCase())!==-1){
                            tmp.push(item)
                          }
                     }
                    
                 })
                 let show = tmp.map(item=>{
                    return <tr key={item.objectID}>
                              <td>{item.objectID}</td>
                              <td>{item.author}</td>
                              <td>{item.num_comments}</td>
                              <td>{item.title}</td>
                              <td>{item.url}</td>
                              <td><button onClick={()=>props.deleteItem(item)}>Delete</button></td>
                           </tr>
                    }) 
                    console.log(input)
                    return show
            }
        }
       
    }
    return(
        (data === undefined)? <p>wait...</p>:
        <table className="table table-striped">
          <thead>
             <tr className="bg-primary">
               <th scope="col">ID</th>
               <th scope="col">Author</th>
               <th scope="col">Comments</th>
               <th scope="col">Title</th>
               <th scope="col">URL</th>
               <th scope="col">Remove</th>
             </tr>
          </thead>
          <tbody>
            {display()}
          </tbody>
        </table>
    )
}
export default Table