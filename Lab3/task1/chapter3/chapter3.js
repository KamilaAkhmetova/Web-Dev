// What’s wrong with the code style below?
function pow(x, n) {//space between arguments and {} on the next line
  let result = 1;//no spaces between =
  
  for(let i=0;i<n;i++) result*=x;//no bracets
  
  return result;
}

let x = prompt("x?",'');//on the new line
let n = prompt("n?",'')//spaces and new line

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else { 
  alert( pow(x, n) );
}

//What’s wrong in the test of pow below?
it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
//all 3 tests are in the same block, if first fails others won't be checked
describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});
//
