import type { IconProps } from './types'

const IconBlockchainCircle = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM5.375 10.69l.657-.657 5.068 2.538v6.48a1.613 1.613 0 0 1-.432-.316L5.375 13.39a1.873 1.873 0 0 1 0-2.7Zm12.593-.657.657.657a1.872 1.872 0 0 1 0 2.7l-5.293 5.345a1.613 1.613 0 0 1-.432.315v-6.479l5.068-2.538Zm-4.583-4.662 3.312 3.321-4.68 2.322-4.653-2.322 3.321-3.32a1.882 1.882 0 0 1 2.7 0Z'
        fill={color}
      />
    </svg>
  )
}

export default IconBlockchainCircle