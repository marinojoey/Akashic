import React from 'react'
// import heroimage from '../heroimage.jpeg'

interface Props {
  scale: number
}

const MySVGComponent: React.FC<Props> = ({ scale }) => {
  const cx = 224.5 * scale
  const cy = 227.75 * scale
  const rx = 227.75 * scale
  const ry = 224.5 * scale
  const diameterScale = 0.95

  const clipRadius = Math.min(rx, ry) * diameterScale
  const imgX = cx - clipRadius
  const imgY = cy - clipRadius
  const imgDiameter = 2 * clipRadius

  return (
    <svg
      width={850 * scale}
      height={456 * scale}
      viewBox={`0 0 ${850 * scale} ${456 * scale}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip">
          <circle cx={cx} cy={cy} r={clipRadius} />
        </clipPath>
      </defs>

      <rect
        x={225 * scale}
        y={455.5 * scale}
        width={455.5 * scale}
        height={625 * scale}
        transform={`rotate(-90 ${225 * scale} ${455.5 * scale})`}
        fill="#4D977C"
      />

      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(-90 ${cx} ${cy})`} fill="#4D977C" />

      <image
        // alt="Joey Marino"
        x={imgX}
        y={imgY}
        width={imgDiameter}
        height={imgDiameter}
        // href={heroimage}
        clipPath="url(#clip)"
      />
    </svg>
  )
}

export default MySVGComponent
