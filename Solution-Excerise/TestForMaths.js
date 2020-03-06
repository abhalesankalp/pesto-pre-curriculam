const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function adder(a, b) {
  return a + b 
}

function substract(a, b) {
  return a - b 
}

function multiply(a, b) {
  return a * b 
}

function divide(a, b){
	return a/b;
}

describe('adder', () => {
  it('adds two numbers', () => {
    const result = adder(1, 2)
    expect(result).toBe(3)
  })
})

describe('substract', () => {
  it('substract two numbers', () => {
    const result = substract(5, 2)
    expect(result).toBe(3)
  })
})

describe('divide', () => {
  it('divide two numbers', () => {
    const result = divide(6, 2)
    expect(result).toBe(3)
  })
})

describe('divide', () => {
  it('divide 6 by 2 expected to be fail', () => {
    const result = divide(6, 2)
    expect(result).toBe(4)
  })
})

describe('multiply', () => {
  it('multiply two numbers', () => {
    const result = multiply(5, 2)
    expect(result).toBe(10)
  })
})


module.exports = {
  describe,
  expect,
  it,
  matchers
}