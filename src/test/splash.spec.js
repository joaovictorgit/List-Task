/*function sum(a, b) {
  return a + b;
}

test("add", () => {
  expect(sum(1, 2)).toBe(3);
});*/
import { render } from "@testing-library/react-native";
import { screen } from "@testing-library/react-native";
import SplashScreen from "../Pages/Splash/splash-screen";

describe("Test Splash Screen", () => {
  render(<SplashScreen />);

  it("should be able upload image", () => {
    const image = screen.getByTestId("image-splash");
    expect(image);
  });
});

/*describe("Home.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  it("Contains the List Task text", async () => {
    await page.goto("http://localhost:19006");
    await page.waitForSelector(".Text");
    const text = await page.$eval(".Text", (e) => e.textContent);
    expect(text).toContain("Lista de Tarefas");
  });

  afterAll(() => browser.close());
});*/
