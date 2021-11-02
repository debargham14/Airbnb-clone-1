import { Button } from '@mui/material'
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage_info">
                <p> 72 stays •	26 August to 30 August • 2guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

            </div>
            <SearchResult
            img="https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022__340.jpg"
            
            location="Entire rental unit in X Arrondissement"
            title="
            Montmartre Sacré Coeur/ Cosy 25m2/ Orthopedic bed"
            
            description="2 guests · 1 bedroom · 1 bed · 1 bathroom
            Wifi · Kitchen · Washing machine · Heating"
            star={4.9}
            price="₹3,640/ night"
            total="₹11250 total"/>
            <SearchResult
            img="https://cdn.pixabay.com/photo/2021/08/14/01/58/museum-6544420__340.jpg"
            
            location="Entire rental unit in X Arrondissement"
            title="
            Montmartre Sacré Coeur/ Cosy 25m2/ Orthopedic bed"
            
            description="2 guests · 1 bedroom · 1 bed · 1 bathroom
            Wifi · Kitchen · Washing machine · Heating"
            star={4.9}
            price="₹3,640/ night"
            total="₹11250 total"/>
        </div>
    )
}

export default SearchPage
