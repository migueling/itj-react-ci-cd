import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React is cool! link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Thanks everyone!/i);
  expect(linkElement).toBeInTheDocument();
});
