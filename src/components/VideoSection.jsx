// src/components/VideoSection.jsx
import React from 'react';

const VideoSection = () => {
    return (
        <section className="w3l-video-sec" id="video">
            <div className="container">
                <div className="w3l-index5 py-5">
                    <div className="history-info align-self text-center py-5 my-lg-5">
                        <div className="position-relative py-5 my-lg-5">
                            <a href="#small-dialog1" className="popup-with-zoom-anim play-view text-center position-absolute">
                                <span className="video-play-icon">
                                    <span className="fa fa-play"></span>
                                </span>
                            </a>
                            {/* Dialog for video (you can implement a modal for this) */}
                            {/* <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                                <iframe src="https://player.vimeo.com/video/124801644" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;