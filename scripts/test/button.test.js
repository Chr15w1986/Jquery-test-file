/**
 * @jest-environment jsdom
 */

const { TestWatcher } = require("jest");
const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("Cards-jquery.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    // document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked!");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});