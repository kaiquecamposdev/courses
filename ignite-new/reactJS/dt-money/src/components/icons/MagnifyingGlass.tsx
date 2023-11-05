export function MagnifyingGlass(data: {
  width: number
  height: number
  fill: string
}) {
  return (
    <svg
      width={data.width}
      height={data.height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 5.5C9.52944 5.5 5.5 9.52944 5.5 14.5C5.5 19.4706 9.52944 23.5 14.5 23.5C19.4706 23.5 23.5 19.4706 23.5 14.5C23.5 9.52944 19.4706 5.5 14.5 5.5ZM2.5 14.5C2.5 7.87258 7.87258 2.5 14.5 2.5C21.1274 2.5 26.5 7.87258 26.5 14.5C26.5 21.1274 21.1274 26.5 14.5 26.5C7.87258 26.5 2.5 21.1274 2.5 14.5Z"
        fill={data.fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8644 20.8643C21.4502 20.2785 22.3999 20.2785 22.9857 20.8643L29.0607 26.9393C29.6465 27.5251 29.6465 28.4749 29.0607 29.0606C28.4749 29.6464 27.5252 29.6464 26.9394 29.0606L20.8644 22.9856C20.2786 22.3999 20.2786 21.4501 20.8644 20.8643Z"
        fill={data.fill}
      />
    </svg>
  )
}
