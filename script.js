const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventor = inventors.filter((inv) => inv.year < 1600 && inv.year >= 1500);
console.log(inventor);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map((inv) => `${inv.first} ${inv.last}`);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthYear = inventors.map((inv) => inv.year);
// console.log(birthYear);
const age = birthYear.sort((a, b) => a - b);
console.log(age);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLivedTotal = inventors.reduce(
  (acc, inv) => acc + (inv.passed - inv.year),
  0
);

console.log(yearsLivedTotal);

// 5. Sort the inventors by years lived
const yearsDifference = inventors.map((inv) => inv.passed - inv.year);
const yearsLived = yearsDifference.sort((a, b) => b - a);
console.log(yearsLived);

// 7. sort Exercise
// Sort the people alphabetically by last name

// I thought we need to sort them just by last names without first names so I came up with
// this solution below

// const sortedNames = people
//   .map((item) => {
//     const [lastName, firstName] = item.split(",");
//     return lastName;
//   })
//   .sort();

// The second solution after watching the video and understanding the desired results
const sortedPeople = people.sort((lastPerson, firstPerson) => {
  const [aLast, afirst] = lastPerson.split(",");
  const [bLast, bFirst] = firstPerson.split(",");

  return aLast > bLast ? 1 : -1;
});
console.log(sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const counts = {};
data.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
