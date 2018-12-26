// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Fizzbuzz = require("../src/fizzbuzz.bs.js");

describe("Fizzbuzz", (function () {
        Jest.test("Calling the function with 6, a multiple of 3 returns fizz", (function (param) {
                return Jest.Expect[/* toEqual */12]("fizz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(6)));
              }));
        Jest.test("Calling the function with 3, a multiple of 3 returns fizz", (function (param) {
                return Jest.Expect[/* toEqual */12]("fizz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(3)));
              }));
        Jest.test("Calling the function with 5, a multiple of 5 returns buzz", (function (param) {
                return Jest.Expect[/* toEqual */12]("buzz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(5)));
              }));
        Jest.test("Calling the function with 10, a multiple of 5 returns buzz", (function (param) {
                return Jest.Expect[/* toEqual */12]("buzz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(10)));
              }));
        Jest.test("Calling the function with 15, a multiple of 15 returns fizzbuzz", (function (param) {
                return Jest.Expect[/* toEqual */12]("fizzbuzz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(15)));
              }));
        Jest.test("Calling the function with 30, a multiple of 15 returns buzz", (function (param) {
                return Jest.Expect[/* toEqual */12]("fizzbuzz", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(30)));
              }));
        Jest.test("Calling the function with 11 returns the string 11", (function (param) {
                return Jest.Expect[/* toEqual */12]("11", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(11)));
              }));
        return Jest.test("Calling the function with 49, returns the string 49", (function (param) {
                      return Jest.Expect[/* toEqual */12]("49", Jest.Expect[/* expect */0](Fizzbuzz.fizzbuzz(49)));
                    }));
      }));

/*  Not a pure module */
