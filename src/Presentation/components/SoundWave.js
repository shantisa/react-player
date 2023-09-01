import React, {forwardRef} from "react";
import "../styles/SoundStyle.scss"

/**
 * SoundWave Component
 *
 * This component renders a sound wave visualization using an HTML canvas.
 * The ref provided to this component allows external access to the canvas element.
 *
 *  @param props - Component properties
 *  @param ref - A ref forwarded from the parent component to access the canvas element
 */
const SoundWave = forwardRef((props, ref) => {
    return(
        <div className="waveContainer">
            <canvas id="wave" ref={ref}></canvas>
        </div>
    );
});
export default SoundWave;