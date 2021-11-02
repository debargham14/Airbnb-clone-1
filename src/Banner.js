import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Banner.css'
import Search from './Search';

function Banner() {
    const history = useHistory();
    const[showSearch, setShowSearch] =useState(false);
    return (
        
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                
            <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchbutton" variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
        </div> 
    <div className="banner_info">
     <h1>Not sure where to go? Perfect.</h1>   
     <Button onClick={()=> history.push('/search')} variant='outlined'>I'm flexible</Button>
    </div>
    </div>
    )
}

export default Banner
