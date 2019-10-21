import React from 'react';
import '../../resources/styles.css';
import calendar from '../../resources/images/icons/calendar.png';
import location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';
const Venuenfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendar})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">24 Oct 2019 @7:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1000} duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${location})` }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">
                    HCL Technologies Sector 126 Noida
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Venuenfo;
