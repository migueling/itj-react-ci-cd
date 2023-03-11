import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React is cool! link", () => {
  render(<App />);
  const linkElement = screen.getByText(/React is cool!/i);
  expect(linkElement).toBeInTheDocument();
});
