import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
function SearchList({TitleArray ,setSearchQuery}) {
    console.log(Array.isArray(TitleArray))
  return (
    <div className="Container_SearchList">
        {  
            
            TitleArray.map((m)=>{
               return <p
                
                key={m} className="titleItem"
                onClick={e=>setSearchQuery(m)}>
                  
                <FaSearch className='title_search_icon'/>
                {m}
               </p>
              
        }
            )
}
    </div>
  )
}

export default SearchList