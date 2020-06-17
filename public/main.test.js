const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const randomNumberOne = require("./main");
const randomNumberTwo = require("./main");
const playerOneDice = require("./main");
const playerTwoDice = require("./main");

jest.dontMock("fs");

describe("main.js test", () => {
  it("randomNumberOne should exist", () => {
    expect(randomNumberOne).toBeDefined();
  });

  it("randomNumberTwo should exist", () => {
    expect(randomNumberTwo).toBeDefined();
  });

  it("playerOneDice function should exist", () => {
    expect(playerOneDice).toBeDefined();
  });

  it("playerTwoDice function should exist", () => {
    expect(playerTwoDice).toBeDefined();
  });
});

describe("index.html test", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("Refresh me text in <h1> should exist", () => {
    expect(document.getElementById("refreshText")).toBeTruthy();
  });

  it("Image of first players dice should exist", () => {
    expect(document.getElementsByClassName("img1")).toBeTruthy();
  });

  it("Image of second players dice should exist", () => {
    expect(document.getElementsByClassName("img2")).toBeTruthy();
  });

  it("Roll button should exist", () => {
    expect(document.getElementById("roll")).toBeTruthy();
  });
});
