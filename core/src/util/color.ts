export function darken(color: string, percent: number) {
  const f = color.split(',')
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = parseInt(f[0].slice(4))
  const G = parseInt(f[1])
  const B = parseInt(f[2])
  return `rgb(${Math.round((t - R) * p) + R},${Math.round((t - G) * p) + G},${Math.round((t - B) * p) + B})`
}

export function getColor(colorx: string, alphax = 1, defaultx = true) {
  if (/^[#]/.test(colorx)) {
    const c = hexToRgb(colorx)
    if (alphax === 1) {
      // @ts-expect-error This is not null, but there may be some user input null
      colorx = `rgb(${c.r},${c.g},${c.b})`
    }
    else {
      // @ts-expect-error This is not null, but there may be some user input null
      colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`
    }
  }
  else if (/^rgba/.test(colorx)) {
    if (colorx.search(/.([0-9]\))$/) === -1 && !defaultx)
      colorx = colorx.replace(/.?([0-9]\))$/, `${alphax})`)
  }
  else if (/^(rgb)/.test(colorx)) {
    if (alphax !== 1) {
      colorx = colorx.replace(/^(rgb)/, 'rgba')
      colorx = colorx.replace(/\)$/, `,${alphax})`)
    }
  }
  return colorx
}

export function hexToRgb(hex: string): { r: number;g: number;b: number } | null {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export function isColor(colorx: string) {
  const vscolors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light']
  return vscolors.includes(colorx)
}

export function RandomColor(): string {
  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
  }
  return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
}

export function rColor(colorx: any, opacity = 1): string {
  if (/^[#]/.test(colorx)) {
    const c = hexToRgb(colorx)
    // @ts-expect-error This is not null, but there may be some user input null
    colorx = `rgba(${c.r},${c.g},${c.b},${opacity})`
  }
  else if (/^[rgb]/.test(colorx)) {
    let colorSplit = colorx.split(')')[0]
    if (!/^[rgba]/.test(colorx)) {
      colorSplit.replace('rgb', 'rgba')
      colorSplit += `,${opacity})`
    }
    else {
      colorSplit += ')'
    }
    colorx = colorSplit
  }
  const vscolors = ['primary', 'success', 'danger', 'warning', 'dark']
  const pickColorArray = {
    primary:'31, 116, 255',
    secondary : '121, 49, 177',
    danger : '255, 71, 87',
    success: '70, 201, 58',
    warning: '255,186,0',
    dark: '30, 30, 30',
    light: '245, 245, 245'
  }
  if (colorx) {
    if (/[#()]/.test(colorx)) {
      return colorx
    }
    else {
      if (vscolors.includes(colorx))
        // @ts-expect-error colorx is of type string and can be found, but the IDE will generate an error
        return `rgba(${pickColorArray[colorx]}),${opacity})`
      else
        return `rgba(31, 116, 255,${opacity})`
    }
  }
  else {
    return `rgba(31, 116, 255,${opacity})`
  }
}

export function contrastColor(elementx: string): boolean {
  let c = elementx
  if (/[#]/g.test(elementx)) {
    const rgbx = hexToRgb(elementx)
    // @ts-expect-error This is not null, but there may be some user input null
    c = `rgb(${rgbx.r},${rgbx.g},${rgbx.b})`
  }
  const rgb = c.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',')
  const yiq = ((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000
  if (yiq >= 128)
    return true

  else
    return false
}

export function setCssVariable(propertyName: string, value: string) {
  if (typeof window !== 'undefined')
    document.documentElement.style.setProperty(propertyName, value)
}

export function getVariable(styles: CSSStyleDeclaration, propertyName: string) {
  return String(styles.getPropertyValue(propertyName)).trim()
}

export function changeColor(colorInicial: string) {
  const colores = ['primary', 'success', 'danger', 'warning', 'dark']
  const pickColorArray = {
    primary:'31, 116, 255',
    secondary : '121, 49, 177',
    danger : '255, 71, 87',
    success: '70, 201, 58',
    warning: '255,186,0',
    dark: '30, 30, 30',
    light: '245, 245, 245'
  }
  let colorx

  if (colores.includes(colorInicial)) {
    const style = getComputedStyle(document.documentElement)
    colorx = getVariable(style, `--pick-${colorInicial}`)
  }
  else {
    if (/[rgb()]/g.test(colorInicial)) {
      colorx = colorInicial.replace(/[rgb()]/g, '')
    }
    else if (/[#]/g.test(colorInicial)) {
      const rgbx = hexToRgb(colorInicial)
      // @ts-expect-error This is not null, but there may be some user input null
      colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
    }
    else {
      // @ts-expect-error colorInicial is of type string and can be found, but the IDE will generate an error
      colorx = pickColorArray[colorInicial]
    }
  }
  return colorx
}
