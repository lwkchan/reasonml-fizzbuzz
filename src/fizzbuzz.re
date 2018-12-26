let fizzbuzz = number =>
  switch (number mod 3, number mod 5) {
  | (0, 0) => "fizzbuzz"
  | (0, _) => "fizz"
  | (_, 0) => "buzz"
  | (_, _) => string_of_int(number)
  };