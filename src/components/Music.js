import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

export default function Music() {
    let [videoState, setVideoState] = useState(0)
    let [saved, setSaved] = useState(undefined);

    function toggle() {
        try {
            let player = document.getElementById('player');
            if (videoState) {
                player.pause()
                setVideoState(0);
            } else {
                player.play();
                setVideoState(1);
            }
        } catch (e) {
            console.log('exception caught ' + e);
        }
    }
    let play = process.env.PUBLIC_URL + '/icons/play.png'
    let pause = process.env.PUBLIC_URL + '/icons/pause.png'
    return (
        <div className="music tw-w-12 tw-h-12 tw-fixed tw-right-0 tw-bottom-[50%] tw-bg-orange-900 tw-rounded-[7px_0px_0px_7px] tw-flex tw-items-center tw-justify-center">
            <audio className='tw-hidden' id="player">
                <source src={process.env.PUBLIC_URL + "/cannz_beat.mp3"} type="audio/mpeg" />
            </audio>
            <img className="hover:tw-scale-125 selection:tw-scale-125 tw-w-8" border="0" onClick={toggle} src={videoState ? pause : play} />
        </div>
    )
}
