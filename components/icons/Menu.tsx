const Menu = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}
    >
      <path
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth={1}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )
}

export default Menu
