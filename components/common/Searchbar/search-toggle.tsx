const SearchToggle = ({ toggle }: any) => (
  <button
    style={{ marginTop: '0.4em' }}
    aria-label="search toggle"
    onClick={toggle}
    className="cursor-pointer hide-for-mobile"
  >
    <span className="text-uppercase" style={{ color: 'inherit' }}>
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Search</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="inherit"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
    </span>
  </button>
)

export default SearchToggle
