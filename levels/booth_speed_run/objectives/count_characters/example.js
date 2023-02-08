// TODO:Figure out how many times the letter 'x' appears in this string

const string =
  "PQXmxopteQuVqGYcfbPkjoAHSLDzaWIEXjIddaPHDzgoreVjZqfpkMVxXvAnKwSVjTFZOdTeqiiPTygx";

console.log(
  string.split("").filter((char) => char === "X" || char === "x").length
);
