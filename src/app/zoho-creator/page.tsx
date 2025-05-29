import React from 'react'
import ZohoCreatorHero from './ZohoCreatorHero'
import ZiaHero from './ZiaHero'
import AIBanner from './AIBanner'
import ContactUs from '../contact-us/ContactUs'

const page = () => {
    return (
        <div>
            <ZohoCreatorHero />
            <ZiaHero />
            <AIBanner />
            <ContactUs/>
        </div>
    )
}

export default page
