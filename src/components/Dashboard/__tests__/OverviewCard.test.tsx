import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OverviewCard from "../OverviewCard";
import { People } from "@mui/icons-material";

jest.mock("../../../context/Dashboard", () => ({
  useDashboard: jest.fn(() => ({ range: "daily" })),
}));

describe("OverviewCard Component", () => {
  const mockData = {
    value: 100,
    change: {
      percentage: 10,
      positive: true,
    },
  };

  test("renders with title and icon", () => {
    render(
      <OverviewCard
        title="Test Title"
        icon={<People />}
        isLoading={false}
        data={mockData}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByTestId("AddCircleOutlineIcon")).toBeInTheDocument();
  });

  test("renders data when not loading", () => {
    render(
      <OverviewCard
        title="Test Title"
        icon={<People />}
        isLoading={false}
        data={mockData}
      />
    );
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("last day")).toBeInTheDocument();
    expect(screen.getByText("10%")).toBeInTheDocument();
  });

  test("renders positive change correctly", () => {
    render(
      <OverviewCard
        title="Positive Change"
        icon={<People />}
        isLoading={false}
        data={mockData}
      />
    );
    expect(screen.getByText("10%")).toHaveStyle("color: rgb(46, 125, 50)");
  });

  test("renders negative change correctly", () => {
    const negativeChangeData = {
      ...mockData,
      change: { ...mockData.change, positive: false },
    };
    render(
      <OverviewCard
        title="Negative Change"
        icon={<People />}
        isLoading={false}
        data={negativeChangeData}
      />
    );
    expect(screen.getByText("10%")).toHaveStyle("color: rgb(211, 47, 47)");
  });

  test("renders loading state", () => {
    render(
      <OverviewCard title="Loading State" icon={<People />} isLoading={true} />
    );
    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });
});
