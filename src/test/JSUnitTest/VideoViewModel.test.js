import VideoViewModel from "../../Presentation/ViewModel/VideoViewModel";
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

// Mock state.
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}))

describe("test VideoViewModel", () => {
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
    })

    it("test checkURLValidity", () => {
        const viewModel = VideoViewModel();
        let actual = viewModel.checkURLValidity("example.com");
        expect(actual).toBe(false);

        actual = viewModel.checkURLValidity("https://www.example.com");
        expect(actual).toBe(true);
    })
});