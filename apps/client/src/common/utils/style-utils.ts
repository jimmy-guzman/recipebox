export const toNumber = (pixels: string): number => parseInt(pixels, 10)

/**
 * - Calculates 'em' values from 'px' values
 * - Supports multiple 'px' values
 * @example
 * em('0px 10px 20px -5px', '18px') // 0em 0.56em 1.11em -0.28em
 */
export const em = (target: string, context = '16px'): string => {
  return target
    .split(' ')
    .map((t) => `${(toNumber(t) / toNumber(context)).toFixed(2)}em`)
    .join(' ')
}
