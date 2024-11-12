import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <style>
      {
        '@keyframes spinner_Oiah{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}to{transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        transformOrigin: 'center',
        animation: 'spinner_Oiah .75s step-end infinite'
      }}
    >
      <path
        d="M3 12c0 1.988-3 1.988-3 0 0-1.987 3-1.987 3 0ZM3.75 5.438c1.725 1.012.225 3.6-1.5 2.587-1.725-.975-.225-3.562 1.5-2.587ZM8.062 2.25c1.013 1.725-1.612 3.225-2.587 1.5C4.462 2.025 7.05.525 8.062 2.25ZM24 12c0 1.988-3 1.988-3 0 0-1.987 3-1.987 3 0Z"
        className="tw-fill-neutral-400"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M22.313 6c1.012 1.725-1.613 3.225-2.588 1.5C18.712 5.775 21.3 4.275 22.312 6ZM18 1.688c1.725 1.012.225 3.6-1.5 2.587C14.775 3.3 16.275.713 18 1.688Z"
      />
      <path
        d="M21.75 15.938c1.725 1.012.225 3.6-1.5 2.587-1.725-.975-.225-3.562 1.5-2.587ZM18.563 20.25c1.012 1.725-1.613 3.225-2.588 1.5-1.012-1.725 1.575-3.225 2.588-1.5ZM13.5 22.5c0 1.988-3 1.988-3 0 0-1.987 3-1.987 3 0Z"
        className="tw-fill-neutral-400"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M13.5 1.5c0 1.988-3 1.988-3 0 0-1.987 3-1.987 3 0Z"
      />
      <path
        d="M7.5 19.688c1.725 1.012.225 3.6-1.5 2.587-1.725-.975-.225-3.562 1.5-2.587ZM4.312 16.5C5.325 18.225 2.7 19.725 1.725 18 .712 16.275 3.3 14.775 4.312 16.5Z"
        className="tw-fill-neutral-400"
        opacity={0.5}
      />
    </g>
  </svg>
)
export default SvgComponent
