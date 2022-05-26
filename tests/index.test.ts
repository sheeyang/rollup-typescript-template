import index from "../src/index";

test("should return hello", () => {
    expect(index()).toBe("hello");
});
