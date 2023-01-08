import { render, screen } from "@testing-library/react-native";
import Home from "../Pages/Home/home-screen";

describe("Home Screen", () => {
  render(<Home />);
  it("should be able title home screen", () => {
    expect(screen.getByText("Lista de Tarefas"));
  });
});
