import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "../Calendar";

describe("Calendar Component", () => {
  test("renders without crashing", () => {
    render(<Calendar />);
    expect(screen.getByText("TIME")).toBeInTheDocument();
  });

  test("renders correct number of day columns", () => {
    render(<Calendar />);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("renders correct number of time rows", () => {
    render(<Calendar />);
    const times = [
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
    ];
    times.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("highlights today correctly", () => {
    render(<Calendar />);
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const todayElement = screen.getByTestId("today");
    expect(todayElement.firstChild?.nodeValue).toBe(today);
  });

  test("renders events correctly", () => {
    render(<Calendar />);
    const events = [
      {
        day: "Monday",
        time: "9 AM",
        title: "Onboarding Session",
        color: "orange",
      },
      {
        day: "Friday",
        time: "3 PM",
        title: "Performance Review",
        color: "green",
      },
    ];
    events.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    });
  });
});
