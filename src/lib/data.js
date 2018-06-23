// 'straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake'
const layoutBackground = () => {
  const layouts = []
  for(let i=0 ;i<10; i++) {
    layouts.push([])
  }
  for(let i=0; i<10; i++) {
    for(let j=0; j<25; j++) {
      layouts[i].push('grey')
    }
  }
  return layouts
}

export const data = {
  block: 30,
  strokeWidth: 3,
  tetrisItem: {
    straight: {
      color: '#00a8ff',
      shape: [[1,1,1,1],
              [0,0,0,0],
              [0,0,0,0],
              [0,0,0,0]]
    },
    square: {
      color: '#fbc531',
      shape: []
    },
    cross: {
      color: '#8c7ae6',
      shape: []
    },
    leftGun: {
      color: '#fbc531',
      shape: []
    },
    rightGun: {
      color: '#273c75',
      shape: []
    },
    leftSnake: {
      color: '#44bd32',
      shape: []
    },
    rightSnake: {
      color: '#2f3640',
      shape: []
    },
  },
  layoutBackground: layoutBackground()
}