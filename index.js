var a, b

function add(a, b) {
    return a + b;              
}

function subtract(a, b) {
    return a - b;              
}

function multiply(a, b) {
    return a * b;              
}

function divide(a, b) {
    return a / b;              
}

function inc(n){
  n = n + 1;
  return n;
}

function dec(n){
  n = n - 1;
  return n;
}

function makeInt(n){
 if (parseInt('n') = 'n'){
  return n;
} else if  { (parseInt('n', 10) = 0);
  return n;
} else { (parseInt('n') = true);
  return n;
  
  
  function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}


function preserveDecimal(n){
  parseFloat('n');
  return n;
}


describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})