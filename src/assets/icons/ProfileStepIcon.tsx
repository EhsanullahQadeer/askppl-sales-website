import React from 'react'
type ShareStepIconProps = React.SVGProps<SVGSVGElement>;

const ProfileStepIcon = (props:ShareStepIconProps) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      d="M12.5 2C18.0237 2 22.5 6.47778 22.5 12C22.5 17.5222 18.0237 22 12.5 22"
      stroke="currentColor"
      stroke-opacity={props["strokeOpacity"]}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 21.5C8.31163 21.0953 7.19532 20.5107 6.22302 19.7462M6.22302 4.25385C7.19532 3.50059 8.31163 2.90473 9.5 2.5M2.5 10.2461C2.71607 9.08813 3.16019 7.96386 3.79638 6.94078M2.5 13.7539C2.71607 14.9119 3.16019 16.0361 3.79638 17.0592"
      stroke="currentColor"
      stroke-opacity={props["strokeOpacity"]}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 16.5C10.5726 14.302 14.4051 14.1986 16.5 16.5M14.7179 9.75C14.7179 10.9926 13.7215 12 12.4925 12C11.2634 12 10.2671 10.9926 10.2671 9.75C10.2671 8.50736 11.2634 7.5 12.4925 7.5C13.7215 7.5 14.7179 8.50736 14.7179 9.75Z"
      stroke="currentColor"
      stroke-opacity={props["strokeOpacity"]}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
  )
}

export default ProfileStepIcon
