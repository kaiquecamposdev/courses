export function Logo(data: { width: number; height: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.width}
      height={data.height}
      viewBox="0 0 41 38"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M40.0652 0.256714L30.2601 34.9917C30.2102 35.1494 30.0108 35.1967 29.8945 35.0863L23.3301 28.8583L28.2492 11.4514C28.2991 11.2937 28.1495 11.1518 27.9833 11.1991L9.63617 15.8662L3.10498 9.66969C2.98865 9.55932 3.03851 9.37011 3.20469 9.32281L39.7993 0.00444022C39.9655 -0.027094 40.115 0.11481 40.0652 0.256714Z"
        fill="#00B37E"
      />
      <path
        opacity="0.5"
        d="M23.3297 28.858L20.8037 37.8452C20.7538 38.0029 20.5544 38.0502 20.4381 37.9398L0.0634003 18.6251C-0.0529313 18.5147 -0.00307518 18.3255 0.163113 18.2782L9.63583 15.8658L23.3297 28.858Z"
        fill="#00B37E"
      />
      <path
        d="M28.2484 11.4511L23.3292 28.858L9.63533 15.8659L27.9825 11.1988C28.1487 11.1515 28.2982 11.2934 28.2484 11.4511Z"
        fill="#00B37E"
      />
    </svg>
  )
}