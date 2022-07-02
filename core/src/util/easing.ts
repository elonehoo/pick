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

/**
 * decelerating to zero velocity
 */
export function easeOutQuad(t:number, b:number, c:number, d:number):number {
  t /= d;
  return -c * t*(t-2) + b;
}

/**
 * acceleration until halfway, then deceleration
 */
export function easeInOutQuad(t:number, b:number, c:number, d:number):number {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}
