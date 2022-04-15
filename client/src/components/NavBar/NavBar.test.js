import React from "react";
import { render, screen } from "@testing-library/react";
//import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./NavBar";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
  it("Should have a link to /home", () => {
    screen.logTestingPlaygroundURL();
    const e = screen.getByText(/home/i);
    expect(e.innerHTML).toBe("HOME");
  });

  it("Should have a link to /create", () => {
    const e = screen.getByText(/create/i);
    expect(e.innerHTML).toBe("CREATE");
  });
  it("Should have a link to /", () => {
    const e = screen.getByText("BACK");
    expect(e.innerHTML).toBe("BACK");
  });
});
