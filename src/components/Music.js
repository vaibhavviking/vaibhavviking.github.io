import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

export default function Music() {
    let [videoState, updateVideoState] = useState(0)
    let [saved,setSaved] = useState("");
    const opts = {
        height: '0',
        width: '0',
        playerVars: {
            autoplay: 1,
        },
    };
    
    function _onReady(event) {
        // access to player in all event handlers via event.target
        setSaved(event);
    }

    function toggle(){
        if(typeof(saved)!='undefined'){
            if(videoState){
                saved.target.pauseVideo();
                updateVideoState(0);
            }else{
                saved.target.playVideo();
                updateVideoState(1);
            }
        }
    }
    let play = process.env.PUBLIC_URL+'/icons/play.png'
    let pause = process.env.PUBLIC_URL+'/icons/pause.png'
    return (
        <div class="music">
            <YouTube videoId="cIZhlFIyJ_Y" opts={opts} onReady={_onReady} />
            <img border="0" onClick={toggle} src={videoState?pause:play} />
        </div>
    )
}
