import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FunFactSection from "./FunFactSection";
import { BrowserRouter as Router } from "react-router-dom";

describe("FunFactSection", () => {
  it("renders the title and body text correctly", () => {
    render(
      <Router>
        <FunFactSection />
      </Router>
    );

    const funFactTitle = screen.getByText((content, node) => node?.textContent === "Fun Fact");
    expect(funFactTitle).toBeInTheDocument();

    const bodyText = screen.getByText("...");
    expect(bodyText).toBeInTheDocument();

    const mintLink = screen.getByRole("link", { name: /Mint an NFT Now/i });
    expect(mintLink).toBeInTheDocument();
    expect(mintLink).toHaveAttribute("href", "/mint");
  });
});