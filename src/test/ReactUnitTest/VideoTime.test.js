import VideoTime from "../../Presentation/components/VideoTime";
import {render,screen} from "@testing-library/react";

// This test is for when the video time is less than 1hr long
test("Checks if the timestamp is rendered", () => {
   render(<VideoTime videoTime={"00:10"}/>);
    const timeElement = screen.getByText("00:10");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.textContent).toMatch(/^(?:[0-5][0-9]):(?:[0-5][0-9])$/)
});