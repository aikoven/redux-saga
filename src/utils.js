export const TASK  = Symbol('TASK')
export const kTrue = () => true
export const noop = () => {}

export function check(value, predicate, error) {
  if(! predicate(value) )
    throw new Error(error)
}

function* sampleGen() {}
const genConstructor = sampleGen.constructor

export const is = {
  undef     : v => v === null || v === undefined,
  func      : f => typeof f === 'function',
  array     : Array.isArray,
  promise   : p => p && typeof p.then === 'function',
  generator : g => is.func(g) && g.constructor === genConstructor,
  iterator  : it => it && typeof it.next === 'function',
  throw     : it => it && typeof it.throw === 'function'
}

export function remove(array, item) {
  const index = array.indexOf(item)
  if(index >= 0)
    array.splice(index, 1)
}

export function autoIncrementer(seed = 1) {
  return () => seed++
}
