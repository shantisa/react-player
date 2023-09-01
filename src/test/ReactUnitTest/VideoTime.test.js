import VideoTime from "../../Presentation/components/VideoTime";
import {render,screen} from "@testing-library/react";

// This test is for when the video time is less than 1hr long
test("Checks if the timestamp is rendered with the correct format", () => {
   const {rerender} = render(<VideoTime videoTime={"00:10"} videoDuration={"00:15"}/>);
    const timeElement = screen.getByTestId("vidTime");

    //Checks for the timestamp format MM:SS
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.textContent).toBe("00:10 / 00:15");

    //Checks for the timestamp format HH:MM:SS
    rerender(<VideoTime videoTime={"11:58:10"} videoDuration={"12:00:00"}/>);
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.textContent).toBe("11:58:10 / 12:00:00");
});