import React, {forwardRef} from "react";
import "../styles/SoundStyle.scss"
const SoundWave = forwardRef((props, ref) => {
    return(
        <div className="waveContainer">
            <canvas id="wave" ref={ref}></canvas>
        </div>
    );
});
export default SoundWave;