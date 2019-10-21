import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.150903656126!2d77.32783350156274!3d28.53858575049313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6794e765be3%3A0x981648f7dd7936c1!2sHCL%20Technologies!5e0!3m2!1sen!2sin!4v1571582337193!5m2!1sen!2sin"
        width="100%"
        height="500 px"
        title="maplocation"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div className="location">Location</div>
      </div>
    </div>
  );
};

export default Location;
