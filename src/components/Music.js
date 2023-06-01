import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

export default function Music() {
    let [videoState, updateVideoState] = useState(0)
    let [saved, setSaved] = useState("");
    const opts = {
        height: '0',
        width: '0',
        playerVars: {
            autoplay: 0,
        },
    };





    function _onReady(event) {
        // access to player in all event handlers via event.target
        setSaved(event);
    }

    function toggle() {
        try {
            if (typeof (saved) != 'undefined') {
                if (videoState) {
                    saved.target.pauseVideo();
                    updateVideoState(0);
                } else {
                    saved.target.playVideo();
                    updateVideoState(1);
                }
            }
        } catch (e) {
            console.log('exception caught');
        }
    }
    let play = process.env.PUBLIC_URL + '/icons/play.png'
    let pause = process.env.PUBLIC_URL + '/icons/pause.png'
    return (
        <div class="music tw-w-12 tw-h-12 tw-fixed tw-right-0 tw-bottom-[50%] tw-bg-orange-900 tw-rounded-[7px_0px_0px_7px] tw-flex tw-items-center tw-justify-center">
            <YouTube videoId="cIZhlFIyJ_Y" opts={opts} onReady={_onReady} />
            <img class="hover:tw-scale-125 selection:tw-scale-125 tw-w-8" border="0" onClick={toggle} src={videoState ? pause : play} />
        </div>
    )
}
