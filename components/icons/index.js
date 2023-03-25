export const GoerliIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
        <path
          fill="#25292E"
          fill-rule="evenodd"
          d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z"
          clip-rule="evenodd"
        />
        <path
          fill="url(#a)"
          fill-opacity=".3"
          fill-rule="evenodd"
          d="M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z"
          clip-rule="evenodd"
        />
        <path
          fill="url(#b)"
          d="M8.19 14.77 14 18.21l5.8-3.44-5.8 8.19-5.81-8.19Z"
        />
        <path fill="#fff" d="m14 16.93-5.81-3.44L14 4.34l5.81 9.15L14 16.93Z" />
        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="14"
            y1="0"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="14"
            x2="14"
            y1="14.77"
            y2="22.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity=".9" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export const PolygonIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
        <rect width="28" height="28" fill="#8247E5" rx="14" />
        <rect width="28" height="28" fill="url(#a)" fill-opacity=".3" rx="14" />
        <path
          fill="#fff"
          d="M18.28 10.92a1.06 1.06 0 0 0-1.06 0l-2.41 1.42-1.65.93-2.41 1.43c-.31.19-.72.19-1.06 0l-1.92-1.12a1.07 1.07 0 0 1-.53-.9v-2.2a1 1 0 0 1 .53-.9l1.9-1.08c.3-.18.7-.18 1.04 0l1.9 1.09c.3.18.52.52.52.9v1.42l1.64-.96V9.52a1 1 0 0 0-.52-.9l-3.5-2.04a1.06 1.06 0 0 0-1.06 0L6.13 8.63a1 1 0 0 0-.53.9v4.12a1 1 0 0 0 .53.9l3.56 2.04c.31.19.71.19 1.06 0l2.41-1.4 1.65-.95 2.41-1.4c.31-.19.72-.19 1.06 0l1.89 1.09c.3.18.53.52.53.9v2.2a1 1 0 0 1-.53.9l-1.9 1.11c-.3.19-.7.19-1.05 0l-1.89-1.08a1.07 1.07 0 0 1-.52-.9v-1.43l-1.65.96v1.43a1 1 0 0 0 .53.9l3.56 2.04c.31.19.72.19 1.06 0l3.56-2.04c.31-.19.53-.53.53-.9v-4.13a1 1 0 0 0-.53-.9l-3.6-2.07Z"
        />
        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="14"
            y1="0"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export const ConnextIcon = () => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        style={{
          width: 25,
          height: 25,
        }}
        alt="Connext_icon"
        src="https://media.licdn.com/dms/image/C4D0BAQFoACmGKRS9nQ/company-logo_200_200/0/1617268768651?e=2147483647&v=beta&t=_-R-9_LFchamNxvo6Z9KS8ha9W2f1MRmb6OTlUUR3yE"
      />
    );
  };
  