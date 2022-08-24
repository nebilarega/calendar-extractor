import "../css/landing.css";

const LandingPage = ({ disabled, handleClick, getUrl }) => {
  return (
    <div className="main">
      <header className="header">
        <span className="title"> Welcome to 10 Acadamey Scheduler</span>
      </header>
      <main className="body">
        <div className="calendar__logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2" id="calendar-svg">
              <g data-name="Layer 3">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#baa497"
                  d="M1 12C1 4 4 1 12 1s11 3 11 11-3 11-11 11S1 20 1 12"
                />
                <path
                  fill="#d9d9d9"
                  d="M17.54 4.56H6.46A1.06 1.06 0 0 0 5.4 5.64v12.72a1.06 1.06 0 0 0 1.06 1.08h11.08a1.06 1.06 0 0 0 1.06-1.08V5.64a1.06 1.06 0 0 0-1.06-1.08Zm-8.6 1.68a.48.48 0 0 1 0-1 .48.48 0 0 1 0 1Zm6.12 0a.48.48 0 0 1 0-1 .48.48 0 1 1 0 1Z"
                />
                <path
                  fill="#008dff"
                  d="m4.85 18.23.49-5.3h13.32l.49 5.3a1.07 1.07 0 0 1-1.06 1.18H5.91a1.07 1.07 0 0 1-1.06-1.18Z"
                />
                <path
                  fill="#0066e0"
                  d="m4.57 7.93.77 5h13.32l.77-5a1.07 1.07 0 0 0-1.06-1.24H5.63a1.07 1.07 0 0 0-1.06 1.24Z"
                />
                <path
                  fill="#fff"
                  d="M11.68 16H7.93v-.38L10 13.34a5.45 5.45 0 0 0 .71-1 1.61 1.61 0 0 0 .2-.74 1.22 1.22 0 0 0-.33-.9 1.26 1.26 0 0 0-.92-.33 1.3 1.3 0 0 0-1 .39 1.36 1.36 0 0 0-.37 1H7.8a1.9 1.9 0 0 1 .2-.9 1.57 1.57 0 0 1 .65-.65 1.9 1.9 0 0 1 1-.24 1.77 1.77 0 0 1 1.28.43 1.54 1.54 0 0 1 .47 1.18 2.08 2.08 0 0 1-.26.92 7.26 7.26 0 0 1-.92 1.24l-1.68 1.89h3.14zm2.01-3.22h.51a1.76 1.76 0 0 0 .75-.15 1.14 1.14 0 0 0 .48-.41 1.13 1.13 0 0 0 .17-.6 1.19 1.19 0 0 0-.33-.9 1.26 1.26 0 0 0-.93-.33 1.33 1.33 0 0 0-.95.34 1.18 1.18 0 0 0-.37.89h-.49a1.58 1.58 0 0 1 .24-.85 1.55 1.55 0 0 1 .65-.59 2 2 0 0 1 .92-.21 1.81 1.81 0 0 1 1.28.44 1.63 1.63 0 0 1 .47 1.22 1.31 1.31 0 0 1-.27.8 1.7 1.7 0 0 1-.76.54 1.57 1.57 0 0 1 .85.54 1.48 1.48 0 0 1 .29.91 1.65 1.65 0 0 1-.5 1.24 1.9 1.9 0 0 1-1.34.46 2.24 2.24 0 0 1-1-.21 1.64 1.64 0 0 1-.7-.6 1.62 1.62 0 0 1-.24-.89h.49a1.22 1.22 0 0 0 .4.93 1.49 1.49 0 0 0 1 .36 1.41 1.41 0 0 0 1-.33 1.21 1.21 0 0 0 .36-1 1.1 1.1 0 0 0-.39-.91 1.73 1.73 0 0 0-1.13-.32h-.5z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="card">
          <div className="cookie__container">
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cookies-svgrepo-com 1" clipPath="url(#clip0_1_4)">
                <g id="crumbs">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M469.253 151.699L453.086 148.466C443.898 146.628 437.746 137.932 439.071 128.657L444.704 89.224C445.207 85.707 446.847 82.495 449.233 79.881C446.837 79.76 444.377 80.531 442.464 82.443L429.991 94.915C427.29 97.616 425.537 101.121 424.998 104.902L419.365 144.335C418.04 153.612 424.193 162.307 433.38 164.144L449.547 167.377C456.562 168.779 463.731 165.811 467.7 159.858L473.019 151.88C471.767 151.905 470.514 151.952 469.253 151.699Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_2"
                      d="M435.885 48.122C430.086 50.441 423.779 46.171 423.779 39.926V26.482H414.951C410.076 26.482 406.123 30.435 406.123 35.31V57.582C406.123 63.828 412.43 68.098 418.229 65.778L444.712 55.185C448.063 53.844 450.261 50.599 450.261 46.989V42.372L435.885 48.122Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_3"
                      d="M472.318 192.523L467.1 202.959C465.858 205.444 465.858 208.369 467.1 210.854L469.481 215.618C471.856 220.367 477.855 221.961 482.273 219.016L496.504 209.529C498.96 207.891 500.435 205.135 500.435 202.184V192.673C500.435 186.648 494.532 182.393 488.816 184.299L477.421 188.097C475.201 188.836 473.365 190.428 472.318 192.523Z"
                      fill="#FFD796"
                    />
                  </g>
                  <g id="Group_2">
                    <path
                      id="Vector_4"
                      d="M406.124 35.31V57.582C406.124 63.828 412.431 68.098 418.23 65.778L444.713 55.185C448.064 53.844 450.262 50.598 450.262 46.989V35.31C450.262 30.435 446.309 26.482 441.434 26.482H414.951C410.077 26.482 406.124 30.435 406.124 35.31Z"
                      fill="#FFE6A1"
                    />
                    <path
                      id="Vector_5"
                      d="M424.997 104.904L419.364 144.338C418.039 153.614 424.192 162.31 433.379 164.147L449.546 167.38C456.562 168.784 463.73 165.814 467.699 159.861L473.779 150.741C476.928 146.016 477.614 140.065 475.62 134.749L457.203 85.638C454.912 79.53 447.077 77.833 442.464 82.446L429.992 94.917C427.29 97.618 425.538 101.123 424.997 104.904Z"
                      fill="#FFE6A1"
                    />
                  </g>
                </g>
                <g id="cookie">
                  <path
                    id="Vector_6"
                    d="M479.632 248.36L455.291 253.228C447.191 254.848 439.05 250.635 435.695 243.086L409.622 184.42C407.415 179.453 403.043 175.781 397.771 174.462L384.188 171.067C376.328 169.102 370.815 162.041 370.815 153.939V59.803C370.815 55.404 369.172 51.163 366.209 47.911L333.415 11.925C303.848 2.562 271.976 -1.615 238.84 0.567C111.485 8.957 8.31599 112.557 0.544988 239.95C-8.52201 388.608 109.356 512 256.055 512C395.978 512 509.609 399.725 511.945 260.359L490.991 249.882C487.479 248.125 483.482 247.59 479.632 248.36Z"
                    fill="#FFE6A1"
                  />
                  <g id="Group_3">
                    <path
                      id="Vector_7"
                      d="M335.503 432.551C333.949 432.551 332.418 432.462 330.871 432.434C321.171 443.315 307.089 450.206 291.365 450.206C268.205 450.206 248.569 435.316 241.372 414.608C209.693 402.071 181.119 383.419 157.105 360.071C153.472 361.166 149.699 361.93 145.709 361.93C123.77 361.93 105.985 344.145 105.985 322.206C105.985 314.544 108.257 307.453 112.015 301.385C111.746 300.904 111.459 300.437 111.192 299.954C83.637 298.086 61.848 275.201 61.848 247.172C61.848 230.653 69.414 215.908 81.265 206.194C80.142 196.463 79.503 186.585 79.503 176.551C79.503 126.202 94.097 79.289 119.2 39.697C47.614 85.085 0.0549927 164.964 0.0549927 256C0.0549927 397.385 114.67 512 256.055 512C347.091 512 426.969 464.441 472.358 392.855C432.766 417.958 385.853 432.551 335.503 432.551Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_8"
                      d="M198.676 211.862C210.864 211.862 220.745 201.981 220.745 189.793C220.745 177.605 210.864 167.724 198.676 167.724C186.488 167.724 176.607 177.605 176.607 189.793C176.607 201.981 186.488 211.862 198.676 211.862Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_9"
                      d="M432.607 357.517C444.795 357.517 454.676 347.636 454.676 335.448C454.676 323.26 444.795 313.379 432.607 313.379C420.419 313.379 410.538 323.26 410.538 335.448C410.538 347.636 420.419 357.517 432.607 357.517Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_10"
                      d="M231.779 357.517C240.311 357.517 247.227 350.601 247.227 342.069C247.227 333.537 240.311 326.621 231.779 326.621C223.247 326.621 216.331 333.537 216.331 342.069C216.331 350.601 223.247 357.517 231.779 357.517Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_11"
                      d="M350.952 216.275C359.484 216.275 366.4 209.359 366.4 200.827C366.4 192.295 359.484 185.379 350.952 185.379C342.42 185.379 335.504 192.295 335.504 200.827C335.504 209.359 342.42 216.275 350.952 216.275Z"
                      fill="#FFD796"
                    />
                    <path
                      id="Vector_12"
                      d="M289.159 79.448C297.691 79.448 304.607 72.5317 304.607 64C304.607 55.4683 297.691 48.552 289.159 48.552C280.627 48.552 273.711 55.4683 273.711 64C273.711 72.5317 280.627 79.448 289.159 79.448Z"
                      fill="#FFD796"
                    />
                  </g>
                  <g id="Group_4">
                    <path
                      id="Vector_13"
                      d="M243.209 227.386L233.004 244.395C226.904 254.561 232.36 267.731 243.861 270.606L274.237 278.2C283.697 280.565 293.283 274.814 295.647 265.354L299.122 251.454C299.825 248.642 299.825 245.702 299.122 242.89L295.448 228.193C293.163 219.05 284.099 213.314 274.858 215.162L254.886 219.156C250.008 220.133 245.769 223.121 243.209 227.386Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_14"
                      d="M294.162 336.673L283.519 354.411C278.228 363.23 281.564 374.687 290.762 379.286L324.644 396.227C334.746 401.279 346.928 395.675 349.668 384.718L353.158 370.758L357.237 354.439C359.776 344.283 352.97 334.16 342.605 332.679L311.796 328.277C304.766 327.273 297.816 330.582 294.162 336.673Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_15"
                      d="M108.413 231.358L95.424 253.007C91.256 259.954 92.351 268.846 98.079 274.575L118.521 295.018C125.962 302.459 138.218 301.78 144.792 293.563L162.317 271.656C165.759 267.354 166.995 261.691 165.658 256.345L161.661 240.357C160.006 233.737 154.686 228.665 147.996 227.326L127.014 223.13C119.698 221.666 112.252 224.96 108.413 231.358Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_16"
                      d="M180.291 88.019L170.275 104.713C164.464 114.398 169.116 126.974 179.831 130.546L201.566 137.791C207.91 139.905 214.904 138.254 219.633 133.526L231.332 121.827C235.717 117.442 237.48 111.077 235.976 105.061L232.916 92.822C230.951 84.961 223.889 79.447 215.787 79.447H195.429C189.229 79.448 183.482 82.702 180.291 88.019Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_17"
                      d="M393.516 224.47L383.297 234.689C376.403 241.583 376.403 252.762 383.297 259.657L388.298 264.658C393.672 270.032 401.88 271.364 408.678 267.965L437.595 253.507C444.996 249.806 448.835 241.462 446.828 233.434L445.518 228.195C443.233 219.052 434.169 213.316 424.928 215.164L402.539 219.642C399.12 220.324 395.981 222.005 393.516 224.47Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_18"
                      d="M327.869 98.456L316.144 114.09C311.837 119.832 311.436 127.612 315.129 133.767L325.978 151.848C331.164 160.492 342.523 163.046 350.91 157.455L372.94 142.768C381.374 137.146 383.352 125.593 377.271 117.485L365.295 101.517C363.14 98.644 360.161 96.496 356.754 95.361L347.576 92.301C340.366 89.896 332.428 92.376 327.869 98.456Z"
                      fill="#B97850"
                    />
                    <path
                      id="Vector_19"
                      d="M176.789 377.385L165.261 391.795C157.86 401.046 161.491 414.816 172.491 419.217L187.976 425.411C192.186 427.095 196.881 427.095 201.09 425.411L218.468 418.459C228.88 414.295 232.822 401.604 226.602 392.273L223.617 387.796C221.912 385.239 219.571 383.173 216.823 381.798L198.473 372.623C191.024 368.9 181.989 370.885 176.789 377.385Z"
                      fill="#B97850"
                    />
                  </g>
                  <g id="Group_5">
                    <path
                      id="Vector_20"
                      d="M140.428 292.921L119.986 272.479C114.258 266.751 113.162 257.858 117.331 250.912L130.32 229.263C131.428 227.417 132.892 225.918 134.511 224.63L127.015 223.132C119.699 221.669 112.252 224.963 108.413 231.36L95.424 253.009C91.256 259.956 92.351 268.848 98.079 274.577L118.521 295.019C125.418 301.916 136.396 301.75 143.206 295.158C142.23 294.511 141.29 293.784 140.428 292.921Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_21"
                      d="M219.248 131.506L197.513 124.262C186.799 120.69 182.145 108.114 187.957 98.429L197.973 81.735C198.482 80.885 199.155 80.186 199.786 79.448H195.428C189.227 79.448 183.48 82.702 180.289 88.02L170.273 104.713C164.461 114.398 169.113 126.974 179.829 130.546L201.564 137.791C207.908 139.905 214.902 138.254 219.631 133.526L221.276 131.881C220.6 131.741 219.914 131.728 219.248 131.506Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_22"
                      d="M290.988 273.124L260.612 265.53C249.11 262.654 243.654 249.485 249.755 239.319L259.96 222.31C261.175 220.285 262.789 218.576 264.65 217.205L254.886 219.158C250.009 220.133 245.768 223.122 243.209 227.388L233.004 244.397C226.904 254.563 232.36 267.733 243.861 270.608L274.237 278.202C280.636 279.802 287.036 277.63 291.275 273.167C291.179 273.143 291.084 273.148 290.988 273.124Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_23"
                      d="M342.469 150.321L331.62 132.24C327.927 126.085 328.328 118.307 332.635 112.563L344.36 96.93C345.644 95.217 347.238 93.875 348.966 92.762L347.575 92.299C340.365 89.896 332.427 92.376 327.867 98.455L316.143 114.088C311.836 119.831 311.435 127.61 315.128 133.765L325.977 151.846C331.146 160.461 342.443 163.016 350.821 157.499C347.464 156.102 344.492 153.692 342.469 150.321Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_24"
                      d="M402.467 263.482C395.572 256.587 395.572 245.409 402.467 238.514L412.686 228.295C415.15 225.831 418.289 224.15 421.708 223.467L440.553 219.698C436.521 215.866 430.764 213.995 424.927 215.163L402.538 219.641C399.12 220.325 395.981 222.005 393.516 224.469L383.297 234.688C376.403 241.583 376.403 252.761 383.297 259.656L388.298 264.657C393.339 269.698 400.839 271.019 407.363 268.38L402.467 263.482Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_25"
                      d="M312.633 377.805C303.435 373.206 300.098 361.749 305.39 352.93L316.033 335.193C317.429 332.868 319.402 331.105 321.578 329.676L311.798 328.279C304.766 327.274 297.817 330.582 294.163 336.673L283.52 354.411C278.229 363.23 281.565 374.687 290.763 379.286L324.645 396.227C331.398 399.604 339.019 398.146 344.188 393.584L312.633 377.805Z"
                      fill="#A5694B"
                    />
                    <path
                      id="Vector_26"
                      d="M205.631 422.46L190.146 416.266C179.147 411.867 175.516 398.095 182.916 388.844L194.444 374.434C195.176 373.519 195.998 372.719 196.866 371.987C189.76 369.266 181.624 371.34 176.789 377.385L165.261 391.795C157.86 401.046 161.491 414.816 172.491 419.217L187.976 425.411C192.186 427.095 196.881 427.095 201.09 425.411L207.267 422.94C206.72 422.781 206.163 422.673 205.631 422.46Z"
                      fill="#A5694B"
                    />
                  </g>
                  <path
                    id="Vector_27"
                    d="M70.665 361.922C69.342 361.922 67.992 361.621 66.726 360.991C62.364 358.81 60.596 353.509 62.778 349.147L71.606 331.492C73.788 327.13 79.076 325.38 83.45 327.544C87.812 329.726 89.58 335.026 87.398 339.388L78.57 357.043C77.023 360.137 73.907 361.922 70.665 361.922Z"
                    fill="#C98850"
                  />
                  <path
                    id="Vector_28"
                    d="M229.572 476.689H220.744C215.869 476.689 211.916 472.741 211.916 467.861C211.916 462.982 215.869 459.033 220.744 459.033H229.572C234.447 459.033 238.4 462.981 238.4 467.861C238.4 472.741 234.447 476.689 229.572 476.689Z"
                    fill="#925F4A"
                  />
                  <path
                    id="Vector_29"
                    d="M194.253 308.965C192.93 308.965 191.58 308.664 190.314 308.034C185.952 305.852 184.184 300.551 186.366 296.19L195.194 278.535C197.371 274.182 202.66 272.423 207.038 274.587C211.4 276.769 213.168 282.069 210.986 286.431L202.158 304.086C200.611 307.181 197.494 308.965 194.253 308.965Z"
                    fill="#C98850"
                  />
                  <g id="Group_6">
                    <path
                      id="Vector_30"
                      d="M141.288 167.724C139.965 167.724 138.615 167.423 137.349 166.793L119.694 157.965C115.332 155.783 113.564 150.483 115.746 146.121C117.923 141.768 123.216 140 127.59 142.173L145.245 151C149.607 153.182 151.375 158.482 149.193 162.844C147.646 165.939 144.529 167.724 141.288 167.724Z"
                      fill="#925F4A"
                    />
                    <path
                      id="Vector_31"
                      d="M247.228 44.137H229.573C224.698 44.137 220.745 40.189 220.745 35.309C220.745 30.429 224.698 26.481 229.573 26.481H247.228C252.103 26.481 256.056 30.429 256.056 35.309C256.056 40.189 252.103 44.137 247.228 44.137Z"
                      fill="#925F4A"
                    />
                  </g>
                  <path
                    id="Vector_32"
                    d="M282.547 176.551C279.305 176.551 276.189 174.767 274.642 171.672L265.814 154.017C263.632 149.655 265.4 144.353 269.762 142.173C274.133 140 279.43 141.768 281.606 146.121L290.434 163.776C292.616 168.138 290.848 173.44 286.486 175.62C285.218 176.25 283.87 176.551 282.547 176.551Z"
                    fill="#C98850"
                  />
                  <g id="Group_7">
                    <path
                      id="Vector_33"
                      d="M40.286 219.777C39.099 219.192 38.022 218.325 37.163 217.2C34.213 213.316 34.972 207.779 38.857 204.83L54.579 192.894C58.46 189.943 63.993 190.709 66.949 194.588C69.899 198.472 69.14 204.009 65.255 206.958L49.534 218.893C46.777 220.985 43.193 221.209 40.286 219.777Z"
                      fill="#925F4A"
                    />
                    <path
                      id="Vector_34"
                      d="M370.814 317.793C368.555 317.793 366.296 316.931 364.573 315.207L346.918 297.552C343.47 294.104 343.47 288.517 346.918 285.069C350.366 281.621 355.953 281.621 359.401 285.069L377.056 302.724C380.504 306.172 380.504 311.759 377.056 315.207C375.331 316.931 373.072 317.793 370.814 317.793Z"
                      fill="#925F4A"
                    />
                  </g>
                  <path
                    id="Vector_35"
                    d="M388.469 406.069C386.21 406.069 383.951 405.207 382.228 403.483C378.78 400.035 378.78 394.448 382.228 391L391.056 382.172C394.504 378.724 400.091 378.724 403.539 382.172C406.987 385.62 406.987 391.207 403.539 394.655L394.711 403.483C392.986 405.207 390.728 406.069 388.469 406.069Z"
                    fill="#C98850"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_4">
                  <rect width="512" height="512" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text__container">
            <h1 className="title">Privacy policy</h1>
            <br />
            <div className="text">
              <p>
                The following web app was designed so that 10 Acadamey memebers
                can schedule their lessons to their calendars from Notion
                schedule.
              </p>
              <br />
              <p>
                {" "}
                <b>1. </b> It doesn't relay any information and or data.
              </p>
              <p>
                {" "}
                <b>2. </b> It is GDPR compliant
              </p>
              <br />

              <p>
                <b>
                  When the page loads, click the "Authenticate Google" button,
                  then authorize the use of the app in the pop up page. After
                  that click the "Post Event" button.
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          {!disabled ? (
            <div>
              <button className="google__api" onClick={getUrl}>
                Authenticate Google
              </button>
            </div>
          ) : (
            <div>
              <button className="post__event" onClick={handleClick}>
                Post Event
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
