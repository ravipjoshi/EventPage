import React from 'react';

const Location = () => {
    return (
        <div class="location_wrapper">
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11622.569180539322!2d-79.8777019764257!3d43.258918093125295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b838a1a05bd%3A0x54ea84eb866c672!2sHamilton%20City%20Centre!5e0!3m2!1sen!2sca!4v1585603854247!5m2!1sen!2sca" 
                    width="100%" 
                    height="500px" 
                    frameborder="0" 
                    allowfullscreen
                    >

           </iframe>
           <div className="location_tag">
                <div>Location</div>
           </div>
        </div>
    );
};

export default Location;