import React from 'react'

const Background = () => {
  const bgStyle = `
    background: hsl(195deg, 20%, 86%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
  `

  return (
    <div style={bgStyle}>
    </div>
  )
}

export default Background
