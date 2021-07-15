import React from 'react';
import Expbox from '../components/expbox/Expbox';
import Pro from '../components/pro/Pro';
import Socialbox from '../components/social/Socialbox';
import './Body.css';

const Body = () => {
    return (
        <div className="body_main"> 
            <div className="body_profile_start" >
                <div className="profile_line" >
                   <div>
                        <img src="images.jpg" />
                    </div>
                    <div className="profile_line_content" >
                        AVINESH TRIPATHI
                    </div>
                </div>
            </div>
            <div className="color_div">
                    <div className="about_div">
                        
                    </div>
                    <div className="socialbox_div">
                        <Socialbox /> 
                    </div>
                    <div className="expbox_div">
                        <Expbox />
                    </div>
                    <div className="pro_div">
                        <Pro />
                    </div>
                   

                </div>
        </div>
    );
}




export default Body