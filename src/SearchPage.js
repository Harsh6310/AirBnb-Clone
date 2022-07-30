import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPageInfo'>
                <p>
                    62 stays • 3 march to 9 march • 2 guest
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button 
                variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button 
                variant='outlined'>
                    Type of place
                </Button>
                <Button 
                variant='outlined'>
                    Price
                </Button>
                <Button 
                variant='outlined'>
                    Rooms and Beds
                </Button>
                <Button 
                variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult 
                img='https://i.pinimg.com/originals/3a/89/59/3a8959f959df6159e58b80d8ebbf4a81.jpg'
                location='Private room in the center of London'
                title='Stay at this luxurious house'
                description='1 guest • 1 bedroom • 1 bathroom • WiFi • Kitchen • Free Parking • Washing Machine'
                star={4.83}
                price='£90 / night'
                total='£270 total'
            />
            <SearchResult 
                img='https://nimvo.com/wp-content/uploads/2017/09/Mirrored-nightstands-steal-the-show-in-this-bedroom-750x495.jpg'
                location='Spacious Room in heart of Asta'
                title='Stay at this Spacious house'
                description='2 guest • 1 bedroom • 1.5 bathroom • WiFi • Kitchen • Ironing • Free Parking • Washing Machine • Fire Detection Alarm'
                star={4.45}
                price='£77 / night'
                total='£231 total'
            />
            <SearchResult 
                img='https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/08/dreamstime_s_66458532.jpg'
                location='Private apartment in lush green area of Birmingham'
                title='Independent luxury studio apartment'
                description='4 guest • 2 bedroom • 2 bathroom • WiFi • Kitchen • Ironing • Free Parking • Washing Machine • Fire Detection Alarm'
                star={4.69}
                price='£105 / night'
                total='£315 total'
            />
            <SearchResult 
                img='https://empire-s3-production.bobvila.com/slides/14370/widened/off_white_tiny_bedroom.jpg?1591217264'
                location='Comfortable private room near Waterloo'
                title='5 mins to Kingston station'
                description='2 guest • 1 bedroom • 1 bathroom • WiFi • Ironing • Free Parking • Fire Detection Alarm'
                star={4.25}
                price='£50 / night'
                total='£150 total'
            />
            <SearchResult 
                img='https://static.toiimg.com/photo/51107660.cms'
                location='Luxurious private room in posh area of London'
                title='5-Star Luxury Apartment'
                description='6 guest • 3 bedroom • 4 bathroom • WiFi • Kitchen • Ironing • Free Parking • Washing Machine • Fire Detection Alarm'
                star={4.88}
                price='£130 / night'
                total='₹390 total'
            />
        </div>
    )
}

export default SearchPage
