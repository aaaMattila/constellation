import type { IconProps } from './types'

const IconDeposit = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M10.14 3h3.726c.619 0 1.117.498 1.117 1.118v7.823h4.085c.83 0 1.244 1.001.657 1.588l-7.085 7.087a.903.903 0 0 1-1.271 0L4.275 13.53c-.587-.587-.172-1.588.657-1.588h4.09V4.118c0-.62.498-1.118 1.117-1.118Z'
        fill={color}
      />
    </svg>
  )
}

export default IconDeposit