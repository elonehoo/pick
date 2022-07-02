export const name:string = 'easing'

/**
 * no easing, no acceleration
 */
export function linear(t:number, b:number, c:number, d:number):number {
  return c * t / d + b;
}

/**
 * accelerating from zero velocity
 */
export function easeInQuad(t:number, b:number, c:number, d:number):number {
  t /= d;
  return c*t*t + b;
}


