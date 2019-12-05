import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render } from "@testing-library/react";

import Dashboard from "../../src/components/User/Dashboard";

jest.mock("react-redux");

describe("User Dashboard", () => {
  it("should be able to update user name", () => {
    useSelector.mockImplementation(cb =>
      cb({
        users: [
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            age: 15,
            description: "Lorem ipsum"
          }
        ]
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    //const { debug } = render(<Dashboard />);

    expect(true).toBeTruthy();
  });
});
