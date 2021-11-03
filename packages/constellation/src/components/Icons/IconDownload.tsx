import type { IconProps } from './types'

const IconDownload = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M19 9h-4V3H9v6H5l7 7 7-7ZM5 18v2h14v-2H5Z' fill={color} />
    </svg>
  )
}

export default IconDownload