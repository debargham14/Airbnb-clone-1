import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

//Es7 snippets 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home_section">
                <Card  
                src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night"/>
                <Card src="https://cdn.pixabay.com/photo/2021/08/05/07/55/daffodils-6523446__340.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night"/>
                <Card src="https://cdn.pixabay.com/photo/2015/06/08/15/20/rec-room-802017__480.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night"/>
                  
            </div>
            <div className="home_section">
            <Card  
                src="https://cdn.pixabay.com/photo/2014/12/10/06/49/venetian-562762__340.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night"/>
                <Card src="https://cdn.pixabay.com/photo/2015/03/18/21/17/bora-bora-680010__480.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night"/>
                <Card src="https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785__480.jpg" title="Entire Homes" description="Comfortable private places, with rooms for friends and family" price="Rs.3500/night" />
                  
            </div>  

        </div>
        
    )
}

export default Home
   