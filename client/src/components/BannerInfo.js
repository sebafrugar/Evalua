import React from 'react';
import info from '../img/info.png'

const BannerInfo = () => {
    return (
        <div>
            <div className='banner'>
                <p className='banner-message'>
                    Bienvenido al sistema de <br/>evaluación de clima laboral escolar
                </p>
            </div>
            <div className='info'>
                <h2>¿Qué es Evalúa?</h2>
                <div className='info-contents'>
                    <div>
                        <p>Donec ut neque purus. Nam euismod sapien sit amet purus interdum maximus. Suspendisse id dignissim dui, in interdum sapien. Duis et velit eu magna sodales porta vitae in diam. Sed at faucibus ante. Quisque ultricies porttitor faucibus. Sed feugiat id dui et vestibulum. Donec bibendum mi ut nisi auctor, non porta nisi consectetur. Duis a justo dignissim, rutrum magna eget, facilisis nibh. Duis a libero nec massa placerat mattis.</p>
                    </div>
                    <div>
                        <img src={info}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerInfo;
