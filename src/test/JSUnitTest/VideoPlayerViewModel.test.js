/* Test updateTime method */
import VideoPlayerViewModel from "../../Presentation/ViewModel/VideoPlayerViewModel";
import React, { useState, useRef } from 'react';
import { render, screen } from '@testing-library/react';

const ref = {
    current: { volume: 0 }
}
// Mock state.
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    useRef: () => {
        return ref;
    }
}))
describe("test VideoPlayerViewModel", () => {
    beforeEach(() => {
        //define a dummy State object to hold state
        function State(n) {
            this.value = n;
        }
        //return the actual value on valueOf() call
        State.prototype.valueOf = function () {
            return this.value;
        };
        //mock useState to return the object and the setter
        function mockState(init) {
            let state = new State(init);
            const setState = newState => {
                state.value = newState
            }
            return [state, setState];
        }
        //have all useState return mockState instead
        useState.mockImplementation(init => mockState(init))
        //reset ref state
        ref.current.volume = 0
    })

    it('test updateTime', function () {
        const viewModel = VideoPlayerViewModel();
        viewModel.updateTime(60);
        //call valueOf() to get actual value
        expect(viewModel.videoTime.valueOf()).toBe("01:00")
        viewModel.updateTime(66);
        expect(viewModel.videoTime.valueOf()).toBe("01:06")
        viewModel.updateTime(6);
        expect(viewModel.videoTime.valueOf()).toBe("00:06")
        viewModel.updateTime(100);
        expect(viewModel.videoTime.valueOf()).toBe("01:40")
        viewModel.updateTime(130);
        expect(viewModel.videoTime.valueOf()).toBe("02:10")
        viewModel.updateTime(660);
        expect(viewModel.videoTime.valueOf()).toBe("11:00")
        viewModel.updateTime(3600);
        expect(viewModel.videoTime.valueOf()).toBe("01:00:00")
    });

    it('test resetPlayer', function () {
        const viewModel = VideoPlayerViewModel();
        viewModel.resetPlayer();
        expect(viewModel.videoTime.valueOf()).toBe("00:00")
        expect(viewModel.isPlaying.valueOf()).toBe(false)
        expect(ref.current.volume).toBe(0.5)
    });

    it('test changeVolume', function () {
        const viewModel = VideoPlayerViewModel();
        viewModel.changeVolume(60);
        expect(viewModel.volume.valueOf()).toBe(60);
        expect(ref.current.volume).toBe(0.6);
    });

});