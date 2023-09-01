import VideoButton from "../../Presentation/components/VideoButton";
import {fireEvent, render, screen} from "@testing-library/react";
describe("test VideoButton component",  () => {

    test( "Checks if the correct button image is shown when a video is playing", () => {
        const handleClick = jest.fn();
        //When the video is playing, the pause button should be shown
        const {rerender} = render(<VideoButton onClick={handleClick} isPlaying={true} />);
        const playBtn = screen.getByTestId('btn_play_pause');
        const img = screen.getByTestId('img_play_pause');
        fireEvent.click(playBtn);

        expect(playBtn).toBeInTheDocument();
        expect(img).toBeInTheDocument();

        expect(img.src).toContain("pause_button.svg");

        //When the video is not playing, the play button is shown
        rerender(<VideoButton onClick={handleClick} isPlaying={false} />);
        fireEvent.click(playBtn);
        expect(img.src).toContain("play_button.svg");
    });

    test("Checks if the play/pause button was clicked", () => {
        const handleClick = jest.fn();
        render(<VideoButton onClick={handleClick} isPlaying={true} />);
        const playBtn = screen.getByTestId('btn_play_pause');
        fireEvent.click(playBtn);

        expect(playBtn).toBeInTheDocument();
        expect(handleClick).toHaveBeenCalledTimes(1);
        fireEvent.click(playBtn);
        expect(handleClick).toHaveBeenCalledTimes(2);
    });
});