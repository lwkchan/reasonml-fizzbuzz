open Jest;
open Expect;
open Fizzbuzz;

describe("Fizzbuzz", () => {
  test("Calling the function with 6, a multiple of 3 returns fizz", () =>
    expect(fizzbuzz(6)) |> toEqual("fizz")
  );
  test("Calling the function with 3, a multiple of 3 returns fizz", () =>
    expect(fizzbuzz(3)) |> toEqual("fizz")
  );
  test("Calling the function with 5, a multiple of 5 returns buzz", () =>
    expect(fizzbuzz(5)) |> toEqual("buzz")
  );
  test("Calling the function with 10, a multiple of 5 returns buzz", () =>
    expect(fizzbuzz(10)) |> toEqual("buzz")
  );
  test("Calling the function with 15, a multiple of 15 returns fizzbuzz", () =>
    expect(fizzbuzz(15)) |> toEqual("fizzbuzz")
  );
  test("Calling the function with 30, a multiple of 15 returns buzz", () =>
    expect(fizzbuzz(30)) |> toEqual("fizzbuzz")
  );
  test("Calling the function with 11 returns the string 11", () =>
    expect(fizzbuzz(11)) |> toEqual("11")
  );
  test("Calling the function with 49, returns the string 49", () =>
    expect(fizzbuzz(49)) |> toEqual("49")
  );
});