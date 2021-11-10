import * as React from 'react'
import styles from './index.css'

interface Props {
  value: number
  color?: string
  isIndeterminate?: boolean
  isStriped?: boolean
  style?: React.CSSProperties
  className?: string
}

const ProgressBar = ({
  value,
  color,
  isIndeterminate,
  isStriped,
  style,
  className
}: Props) => {
  let progressBarClassNames = styles.progressBar
  const progressWidth = isIndeterminate ? '50%' : `${value}%`

  if (isStriped && !isIndeterminate)
    progressBarClassNames = progressBarClassNames + ` ${styles.stripeProgress}`

  if (isIndeterminate)
    progressBarClassNames = progressBarClassNames + ` ${styles.animateProgress}`
  return (
    <div className={`${styles.progressContainer} ${className}`} style={style}>
      <div
        className={progressBarClassNames}
        style={{ width: progressWidth, backgroundColor: color || 'green' }}
      />
    </div>
  )
}

export default ProgressBar
