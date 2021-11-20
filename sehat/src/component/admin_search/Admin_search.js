import React from 'react';
import './Admin_search.css'
import { useState } from 'react';
import Demo from './Demo.json';
function Admin_search()
{
const [searchTerm,setSearchTerm]=useState(" ");
return(
    <div >
      <input type="text" placeholder="Search by city "
      onChange={(event) =>{
      setSearchTerm(event.target.value);
      }} />
            {Demo.filter((val)=>{
              if(searchTerm==" ")
              {
                return val;
              }
              else if(val.city.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            }).map((val,key)=>{
              return(
                <div className="position">
                    <table id="customers">
       <thead>
         <tr>
         <th>Id</th>
          <th>Name</th>
                    <th>Contact</th>
                    <th>City</th>
                 <th>Acknowledge</th>
                 </tr>
                 </thead>
                <tr key={key}>
                   <td> {val.id}</td>
                 <td>{val.name}</td>
                 <td>{val.number}</td>
                 <td>{val.city}</td>
                 <td><button type="button" class="btn btn-primary">Notify</button></td>
                </tr></table></div>
              )})
}
              
              </div>
 
)
}

export default Admin_search;