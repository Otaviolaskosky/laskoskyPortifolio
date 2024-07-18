import React from 'react'
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";


export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            {/* <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a> */}
                            <a href='https://x.com/OLaskosky7'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Otavio Laskosky</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Laskosky Dev 👨🏻‍💻",
                                        1000,
                                        "Full Stack Developer 💻",
                                        1000,
                                        "PHP Dev 🌐",
                                        1000,
                                        "React Dev ⚛️",
                                        1000,
                                        "SQL Dev 🔵",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back and operations.
                            <br />
                            This Portfolio was made by me in React.js and Node.js.
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            Hire Me
                        </button>
                        <a href='laskoskycv.pdf' download="Laskosky's Resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}