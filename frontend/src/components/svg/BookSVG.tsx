
function SvgComponent() {
  return (
    <svg
      className="h-36 w-36 text-blue-500"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 19a9 9 0 019 0 9 9 0 019 0M3 6a9 9 0 019 0 9 9 0 019 0" />
      <path d="M3 6L3 19" />
      <path d="M12 6L12 19" />
      <path d="M21 6L21 19" />
    </svg>
  )
}

export default SvgComponent
