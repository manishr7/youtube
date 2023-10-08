import React from 'react'
import './SearchBar.css'
import SearchList from './SearchList'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import { useState } from 'react'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchLI, setsearchLI] = useState(false)
    const TitleArray=["video1","Video2","Animation videos","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
    console.log(searchQuery)
    return (
        <div className="SearchBar_container1">
            
            <div className="SearchBar_container2">
                <div className="Search_div">
                    <input type="text" className="iBox_SearchBar" placeholder='Search'
                        onChange={e => setSearchQuery(e.target.value)}
                        onClick={e=>setsearchLI(true)}
                        value={searchQuery} />
                    <FaSearch className='searchIcon_SearchBar' 
                    onClick={e=>setsearchLI(false)}/>
                    <BsMicFill className='Mic_SearchBar' />
                    {
                        searchQuery && searchLI &&
                        <SearchList 
                        setSearchQuery={setSearchQuery}
                        TitleArray={TitleArray}/>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar