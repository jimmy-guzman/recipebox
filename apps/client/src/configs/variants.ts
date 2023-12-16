import { Variants } from 'framer-motion'

export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      amount: 'all',
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
} satisfies Variants

export const slide = {
  initial: {
    x: '-100%',
    opacity: 0.01,
  },
  exit: {
    x: '-100%',
    opacity: 0.01,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
} satisfies Variants
