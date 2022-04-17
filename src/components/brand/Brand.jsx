import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

import './brand.css'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassian} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
        </div>
    )
}

export default Brand
