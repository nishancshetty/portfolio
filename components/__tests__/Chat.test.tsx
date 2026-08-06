import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Chat from "../Chat";

// Mock scrollIntoView (not implemented in jsdom)
window.HTMLElement.prototype.scrollIntoView = vi.fn();

describe("Chat Component", () => {
  it("renders the input textbox", () => {
    render(<Chat />);

    const input = screen.getByPlaceholderText("Ask me anything...");

    expect(input).toBeTruthy();
  });
});