import { changeCalculator } from './../src/CoinCounter.js'
import { changeCalculator2 } from './../src/CoinCounter.js'
import { ChangeCalc} from './../src/CoinCounter.js'

describe('changeCalculator', () => {
  test('should correctly give change back', () => {
    const changeBack = changeCalculator(499)
    expect(changeBack).toEqual(
      'you get 19 quarters, 2 Dimes, 0 Nickels,4 Pennies'
    )
  })
})

describe('changeCalc', () => {
  test('should correctly give change back', () => {
    const penny = 1
    const nickel = 5
    const dime = 10
    const quarter = 25
    const coins = [quarter, dime, nickel, penny]
    const index = 0

    const changeBack = ChangeCalc(499, 25)
    expect(changeBack).toEqual(

      'you get 19 quarters, 2 Dimes, 0 Nickels,4 Pennies'
    )
  })
})
