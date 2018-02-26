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

function makeInt(n) {
 if ((parseInt('n')) = 'n') {
  return n;
} else if (parseInt('n', 10) = 0) {
  return n;
} else if { (parseInt('n') = true) {
  return n;
}
}


function preserveDecimal(n){
  if ((parseFloat('n') = parseFloat(n);{
  return n;
} else {



describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})