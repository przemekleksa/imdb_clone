import React from 'react';
import './notfound.scss';
import sorry from './sorry.png';

function play(){
    let audio = document.getElementById("audio");
    audio.play();
              }

const NotFound = () => {
    return ( 
        <div className="container">
            <audio id="audio" src="./sorry.mp3"></audio>
            <div class="four-o-four">
                <div className="image"><img src={sorry} alt="hal" class="sorry" onMouseEnter="this.play()" /></div>
                <div class="sign">404</div>
            </div>
        </div>
     );
}
 
export default NotFound;
