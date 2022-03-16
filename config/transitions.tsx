export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
}

//clip path animation

export const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    transition: { duration: 1.2 },
  },
  enter: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.18, 1],
    },
  },
}

// search list animation
export const switchLayout = {
  initial: { opacity: 0, y: '130%' },
  enter: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 1.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    y: '130%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

export const slideup = {
  initial: { y: '50%' },
  enter: {
    y: '0%',
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const revealIn = {
  initial: {
    y: '110%',
    opacity: 0,
  },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: '110%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
}

export const revealInOut = {
  initial: {
    y: '110%',
    opacity: 0,
    rotateX: '-80deg',
    transformPerspective: '500px',
  },
  enter: {
    y: '0%',
    opacity: 1,
    rotateX: '0deg',
    transition: {
      duration: 1.15,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  exit: {
    y: '110%',
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
}

export const barAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 0.35,
    },
  },
}

export const variantsAni = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.025 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
}

// export const menuInOut = {
//   initial: { y: '110%', opacity: 0 },
//   enter: {
//     y: '0%',
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: [0.83, 0, 0.17, 1],
//     },
//   },
//   exit: {
//     y: '110%',
//     opacity: 0,
//     transition: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
//   },
// }

export const menuInOut = {
  initial: { y: '110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    y: '110%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}
