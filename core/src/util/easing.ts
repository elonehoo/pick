export const name = 'easing'

/**
 * no easing, no acceleration
 */
export function linear(t: number, b: number, c: number, d: number): number {
  return c * t / d + b
}

/**
 * accelerating from zero velocity
 */
export function easeInQuad(t: number, b: number, c: number, d: number): number {
  t /= d
  return c * t * t + b
}

/**
 * decelerating to zero velocity
 */
export function easeOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d
  return -c * t * (t - 2) + b
}

/**
 * acceleration until halfway, then deceleration
 */
export function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

/**
 * accelerating from zero velocity
 */
export function easeInCubic(t: number, b: number, c: number, d: number): number {
  t /= d
  return c * t * t * t + b
}

/**
 * decelerating to zero velocity
 */
export function easeOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d
  t--
  return c * (t * t * t + 1) + b
}

/**
 * acceleration until halfway, then deceleration
 */
export function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
}

/**
 * accelerating from zero velocity
 */
export function easeInQuart(t: number, b: number, c: number, d: number): number {
  t /= d
  return c * t * t * t * t + b
}

/**
 * decelerating to zero velocity
 */
export function easeOutQuart(t: number, b: number, c: number, d: number): number {
  t /= d
  t--
  return -c * (t * t * t * t - 1) + b
}

/**
 * acceleration until halfway, then deceleration
 */
export function easeInOutQuart(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return c / 2 * t * t * t * t + b
  t -= 2
  return -c / 2 * (t * t * t * t - 2) + b
}

/**
 * accelerating from zero velocity
 */
export function easeInQuint(t: number, b: number, c: number, d: number): number {
  t /= d
  return c * t * t * t * t * t + b
}

/**
 * decelerating to zero velocity
 */
export function easeOutQuint(t: number, b: number, c: number, d: number): number {
  t /= d
  t--
  return c * (t * t * t * t * t + 1) + b
}

/**
 * acceleration until halfway, then deceleration
 */
export function easeInOutQuintfunction(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return c / 2 * t * t * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t * t * t + 2) + b
}

export function easeInSine(t: number, b: number, c: number, d: number): number {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
}

export function easeOutSine(t: number, b: number, c: number, d: number): number {
  return c * Math.sin(t / d * (Math.PI / 2)) + b
}

export function easeInOutSine(t: number, b: number, c: number, d: number): number {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
}

export function easeInExpo(t: number, b: number, c: number, d: number): number {
  return c * Math.pow(2, 10 * (t / d - 1)) + b
}

export function easeOutExpo(t: number, b: number, c: number, d: number): number {
  return c * (-Math.pow(2, -10 * t / d) + 1) + b
}

export function easeInOutExpo(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return c / 2 * Math.pow(2, 10 * (t - 1)) + b
  t--
  return c / 2 * (-Math.pow(2, -10 * t) + 2) + b
}

export function easeInCirc(t: number, b: number, c: number, d: number): number {
  t /= d
  return -c * (Math.sqrt(1 - t * t) - 1) + b
}

export function easeOutCirc(t: number, b: number, c: number, d: number): number {
  t /= d
  t--
  return c * Math.sqrt(1 - t * t) + b
}

export function easeInOutCirc(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1)
    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
  t -= 2
  return c / 2 * (Math.sqrt(1 - t * t) + 1) + b
}
