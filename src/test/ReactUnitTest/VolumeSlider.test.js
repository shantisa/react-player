import VolumeSlider from "../../Presentation/components/VolumeSlider";
import {fireEvent, render, screen} from "@testing-library/react";

describe("test VolumeSlider component", () => {
    test("It should allow the user to change the volume", () => {
        const handleChange = jest.fn();
        render(<VolumeSlider changeVolume={handleChange} maxVol={100} volume={50} />);
        const slider = screen.getByTestId('volume_slider');

        fireEvent.change(slider, { target: { value: "90" } });

        expect(slider).toBeInTheDocument();
        expect(slider.value).toBe("90");
        expect(handleChange).toHaveBeenCalledWith("90");
    });

    test("It should change the vol_icon based on the volume of the slider", () => {
        const handleChange = jest.fn();
        const {rerender} = render(<VolumeSlider changeVolume={handleChange} maxVol={100} volume={50} />);
        const slider = screen.getByTestId('volume_slider');
        const vol_icon = screen.getByTestId('vol_image');

        expect(slider).toBeInTheDocument();
        expect(vol_icon).toBeInTheDocument();

        //vol_up icon is shown when the volume is >= 50
        expect(vol_icon.src).toContain("vol_up.svg");

        //vol_down icon is shown when the volume is less than 50 but greater than 0
        rerender(<VolumeSlider changeVolume={handleChange} maxVol={100} volume={40} />);
        expect(vol_icon.src).toContain("vol_down.svg");

        //vol_mute icon is shown when the volume is 0
        rerender(<VolumeSlider changeVolume={handleChange} maxVol={100} volume={0} />);
        expect(vol_icon.src).toContain("vol_mute.svg");
    });

});
