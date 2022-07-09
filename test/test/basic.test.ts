import { describe, expect, it,test } from 'vitest'

describe('Hi', () => {
  it('should works', () => {
    expect(1 + 1).toEqual(2)
  })
})

const array = {
  a:'1',
  b:'2'
}

test('test demo',()=>{
  const arg:string = 'a'
  console.log(array[arg])
})
