import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='homeSection'>
                <Card 
                    src='https://www.hogarmania.com/archivos/201709/organizar-fiestas-668x400x80xX.jpg'
                    title='Online Experiences'
                    description='Unique activities we can do together, led by a world of hosts.'
                />
                <Card 
                    src='https://www.homestratosphere.com/wp-content/uploads/2018/02/Large-custom-geodesic-house-apr2-1.jpg'
                    title='Unique Stays'
                    description='Spaces that are more than just a place to sleep'
                />
                <Card 
                    src='https://cdn.wallpapersafari.com/59/11/F0bsZw.jpg'
                    title='Entire homes'
                    description='Comfortable private places, with room for friends or family'
                />
            </div>
            <div className='homeSection'>
                <Card 
                    src='https://static-ssl.businessinsider.com/image/5c48b84f2bdd7f557a0c5255-2100/5.jp2'
                    title='Penthouse in London'
                    description='Enjoy the amazing sights of London with this stunning penthouse'
                    price='£350/night'
                />
                <Card 
                    src='https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2018/03/Discover-the-Ultimate-Master-Bedroom-Styles-and-Inspirations-6_1.jpg'
                    title='1 Bedroom apartment'
                    description='Superhost with great amenities and a fabulous shopping complex nearby'
                    price='£70/night'
                />
                <Card 
                    src='https://i2.wp.com/designwud.com/wp-content/uploads/2018/04/drawing-room-cam-01.jpg?fit=1050%2C624&ssl=1'
                    title='3 Bedroom Flat in Bournemouth'
                    description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
                    price='£130/night'
                />
            </div>
        </div>
    )
}

export default Home
