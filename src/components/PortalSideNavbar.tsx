import { Link } from "react-router-dom";

const PortalSideNavbar = () => {
  return (
    <div className="side__nav__container">
      <div className="side__nav__container__main">
        <p>SEBITJA SECONDARY SCHOOL</p>
        <hr></hr>
        <ul className="side__nav__container__main__list">
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z"
                fill="white"
              />
            </svg>

            <Link to="dashboard">DASHOARD</Link>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0V18.3312H8.56641L3 24V18.3312H0V0H24ZM1.5 1.5276V4.58279H22.5V1.5276H1.5ZM22.5 16.8036V6.11039H1.5V16.8036H4.5V20.3003L7.93359 16.8036H22.5ZM15 7.63799H21V15.276H15V7.63799ZM16.5 13.7484H19.5V9.16559H16.5V13.7484ZM3 9.16559H13.5V10.6932H3V9.16559ZM3 12.2208H13.5V13.7484H3V12.2208Z"
                fill="white"
              />
            </svg>

            <Link to="blog">BLOG</Link>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 8.4H13.2V6H10.8M12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM10.8 18H13.2V10.8H10.8V18Z"
                fill="white"
              />
            </svg>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6 4H2.4C1.08 4 0 4.9 0 6V18C0 19.1 1.08 20 2.4 20H21.6C22.92 20 24 19.1 24 18V6C24 4.9 22.92 4 21.6 4ZM21.6 18H2.4V6H21.6V18ZM2.4 0H21.6V2H2.4V0ZM2.4 22H21.6V24H2.4V22ZM12 12C12.7956 12 13.5587 11.7366 14.1213 11.2678C14.6839 10.7989 15 10.163 15 9.5C15 8.83696 14.6839 8.20107 14.1213 7.73223C13.5587 7.26339 12.7956 7 12 7C11.2044 7 10.4413 7.26339 9.87868 7.73223C9.31607 8.20107 9 8.83696 9 9.5C9 10.163 9.31607 10.7989 9.87868 11.2678C10.4413 11.7366 11.2044 12 12 12ZM12 8.5C12.66 8.5 13.2 8.95 13.2 9.5C13.2 10.05 12.66 10.5 12 10.5C11.34 10.5 10.8 10.05 10.8 9.5C10.8 8.95 11.34 8.5 12 8.5ZM18 15.99C18 13.9 14.028 13 12 13C9.972 13 6 13.9 6 15.99V17H18V15.99ZM8.172 15.5C8.904 14.98 10.608 14.5 12 14.5C13.404 14.5 15.108 14.98 15.84 15.5H8.172Z"
                fill="white"
              />
            </svg>
            <Link to="contact">CONTACT</Link>
          </li>
          <li>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11C1 6.286 1 3.929 2.464 2.464C3.93 1 6.286 1 11 1C15.714 1 18.071 1 19.535 2.464C21 3.93 21 6.286 21 11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M15 9C16.1046 9 17 8.10457 17 7C17 5.89543 16.1046 5 15 5C13.8954 5 13 5.89543 13 7C13 8.10457 13.8954 9 15 9Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M1 11.5L2.752 9.967C3.19114 9.58307 3.75974 9.38034 4.34272 9.39983C4.9257 9.41932 5.47949 9.65959 5.892 10.072L10.182 14.362C10.5149 14.6948 10.9546 14.8996 11.4235 14.9402C11.8925 14.9808 12.3608 14.8547 12.746 14.584L13.045 14.374C13.6006 13.9838 14.2721 13.7936 14.9498 13.8344C15.6275 13.8753 16.2713 14.1448 16.776 14.599L20 17.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <Link to="gallery">GALLERY</Link>
          </li>
          <li>
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.07 6.41C11.6774 5.56126 12.0041 4.54371 12.0041 3.5C12.0041 2.45629 11.6774 1.43874 11.07 0.589999C11.6385 0.201955 12.3117 -0.00383354 13 -8.2676e-07C13.9283 -8.2676e-07 14.8185 0.368748 15.4749 1.02513C16.1313 1.6815 16.5 2.57174 16.5 3.5C16.5 4.42826 16.1313 5.3185 15.4749 5.97487C14.8185 6.63125 13.9283 7 13 7C12.3117 7.00383 11.6385 6.79804 11.07 6.41ZM3.5 3.5C3.5 2.80776 3.70527 2.13108 4.08986 1.5555C4.47444 0.979931 5.02107 0.531328 5.66061 0.266421C6.30015 0.00151426 7.00388 -0.0677974 7.68282 0.0672509C8.36175 0.202299 8.98539 0.535642 9.47487 1.02513C9.96436 1.51461 10.2977 2.13825 10.4327 2.81718C10.5678 3.49612 10.4985 4.19985 10.2336 4.83939C9.96867 5.47893 9.52007 6.02556 8.9445 6.41014C8.36892 6.79473 7.69223 7 7 7C6.07174 7 5.1815 6.63125 4.52513 5.97487C3.86875 5.3185 3.5 4.42826 3.5 3.5ZM5.5 3.5C5.5 3.79667 5.58797 4.08668 5.7528 4.33335C5.91762 4.58003 6.15189 4.77229 6.42597 4.88582C6.70006 4.99935 7.00166 5.02906 7.29264 4.97118C7.58361 4.9133 7.85088 4.77044 8.06066 4.56066C8.27044 4.35088 8.4133 4.08361 8.47118 3.79263C8.52906 3.50166 8.49935 3.20006 8.38582 2.92597C8.27229 2.65189 8.08003 2.41762 7.83335 2.25279C7.58668 2.08797 7.29667 2 7 2C6.60218 2 6.22064 2.15803 5.93934 2.43934C5.65804 2.72064 5.5 3.10217 5.5 3.5ZM14 13V15H0V13C0 13 0 9 7 9C14 9 14 13 14 13ZM12 13C11.86 12.22 10.67 11 7 11C3.33 11 2.07 12.31 2 13M13.95 9C14.5629 9.47673 15.064 10.0819 15.4182 10.7729C15.7723 11.4639 15.9709 12.2241 16 13V15H20V13C20 13 20 9.37 13.94 9H13.95Z"
                fill="white"
              />
            </svg>
            <Link to="users">USERS</Link>
          </li>
        </ul>
      </div>

      <div className="side__nav__container__buttons">
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H2V2Z"
              fill="#F5F5F5"
            />
            <path
              d="M17.65 8.64998L14.86 5.85998C14.7905 5.78853 14.7012 5.73946 14.6036 5.71905C14.506 5.69863 14.4045 5.70781 14.3121 5.74539C14.2198 5.78298 14.1408 5.84727 14.0851 5.93003C14.0295 6.0128 13.9999 6.11027 14 6.20998V7.99998H7C6.45 7.99998 6 8.44998 6 8.99998C6 9.54998 6.45 9.99998 7 9.99998H14V11.79C14 12.24 14.54 12.46 14.85 12.14L17.64 9.34998C17.84 9.15998 17.84 8.83998 17.65 8.64998Z"
              fill="#F5F5F5"
            />
          </svg>
          LOG OUT
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9 12.66C19.7397 12.4775 19.6513 12.2429 19.6513 12C19.6513 11.7571 19.7397 11.5225 19.9 11.34L21.18 9.90002C21.321 9.74269 21.4086 9.54472 21.4302 9.33452C21.4517 9.12433 21.4062 8.9127 21.3 8.73002L19.3 5.27002C19.1949 5.08754 19.0349 4.94289 18.8427 4.8567C18.6506 4.77051 18.4362 4.74718 18.23 4.79002L16.35 5.17002C16.1108 5.21945 15.8617 5.17961 15.6499 5.05802C15.438 4.93643 15.278 4.7415 15.2 4.51002L14.59 2.68002C14.5229 2.4814 14.3951 2.30888 14.2246 2.18686C14.0541 2.06484 13.8496 1.99948 13.64 2.00002H9.63999C9.42192 1.98864 9.20612 2.04894 9.02555 2.17173C8.84498 2.29452 8.70957 2.47304 8.63999 2.68002L8.07999 4.51002C8.00199 4.7415 7.84196 4.93643 7.6301 5.05802C7.41824 5.17961 7.1692 5.21945 6.92999 5.17002L4.99999 4.79002C4.80454 4.7624 4.60529 4.79324 4.42734 4.87866C4.24938 4.96407 4.10069 5.10025 3.99999 5.27002L1.99999 8.73002C1.89115 8.91067 1.84221 9.1211 1.86017 9.33124C1.87813 9.54138 1.96207 9.74046 2.09999 9.90002L3.36999 11.34C3.53031 11.5225 3.61872 11.7571 3.61872 12C3.61872 12.2429 3.53031 12.4775 3.36999 12.66L2.09999 14.1C1.96207 14.2596 1.87813 14.4587 1.86017 14.6688C1.84221 14.8789 1.89115 15.0894 1.99999 15.27L3.99999 18.73C4.10509 18.9125 4.26511 19.0571 4.45724 19.1433C4.64937 19.2295 4.86381 19.2529 5.06999 19.21L6.94999 18.83C7.1892 18.7806 7.43824 18.8204 7.6501 18.942C7.86196 19.0636 8.02199 19.2585 8.09999 19.49L8.70999 21.32C8.77957 21.527 8.91498 21.7055 9.09555 21.8283C9.27612 21.9511 9.49192 22.0114 9.70999 22H13.71C13.9196 22.0006 14.1241 21.9352 14.2946 21.8132C14.4651 21.6912 14.5929 21.5186 14.66 21.32L15.27 19.49C15.348 19.2585 15.508 19.0636 15.7199 18.942C15.9317 18.8204 16.1808 18.7806 16.42 18.83L18.3 19.21C18.5062 19.2529 18.7206 19.2295 18.9127 19.1433C19.1049 19.0571 19.2649 18.9125 19.37 18.73L21.37 15.27C21.4762 15.0873 21.5217 14.8757 21.5002 14.6655C21.4786 14.4553 21.391 14.2573 21.25 14.1L19.9 12.66ZM18.41 14L19.21 14.9L17.93 17.12L16.75 16.88C16.0298 16.7328 15.2806 16.8551 14.6446 17.2238C14.0086 17.5925 13.5301 18.1819 13.3 18.88L12.92 20H10.36L9.99999 18.86C9.76984 18.1619 9.29137 17.5725 8.65539 17.2038C8.01942 16.8351 7.27021 16.7128 6.54999 16.86L5.36999 17.1L4.06999 14.89L4.86999 13.99C5.36194 13.44 5.63392 12.7279 5.63392 11.99C5.63392 11.2521 5.36194 10.54 4.86999 9.99002L4.06999 9.09002L5.34999 6.89002L6.52999 7.13002C7.25021 7.27724 7.99942 7.1549 8.63539 6.78622C9.27137 6.41753 9.74984 5.82818 9.97999 5.13002L10.36 4.00002H12.92L13.3 5.14002C13.5301 5.83818 14.0086 6.42753 14.6446 6.79622C15.2806 7.1649 16.0298 7.28724 16.75 7.14002L17.93 6.90002L19.21 9.12002L18.41 10.02C17.9236 10.5688 17.655 11.2767 17.655 12.01C17.655 12.7433 17.9236 13.4513 18.41 14ZM11.64 8.00002C10.8489 8.00002 10.0755 8.23461 9.41771 8.67414C8.75991 9.11366 8.24722 9.73838 7.94447 10.4693C7.64172 11.2002 7.56251 12.0045 7.71685 12.7804C7.87119 13.5563 8.25215 14.269 8.81156 14.8284C9.37097 15.3879 10.0837 15.7688 10.8596 15.9232C11.6356 16.0775 12.4398 15.9983 13.1707 15.6955C13.9016 15.3928 14.5263 14.8801 14.9659 14.2223C15.4054 13.5645 15.64 12.7911 15.64 12C15.64 10.9392 15.2186 9.92174 14.4684 9.17159C13.7183 8.42144 12.7009 8.00002 11.64 8.00002ZM11.64 14C11.2444 14 10.8577 13.8827 10.5288 13.663C10.1999 13.4432 9.9436 13.1308 9.79223 12.7654C9.64085 12.3999 9.60125 11.9978 9.67842 11.6098C9.75559 11.2219 9.94607 10.8655 10.2258 10.5858C10.5055 10.3061 10.8618 10.1156 11.2498 10.0384C11.6378 9.96128 12.0399 10.0009 12.4054 10.1523C12.7708 10.3036 13.0832 10.56 13.3029 10.8889C13.5227 11.2178 13.64 11.6045 13.64 12C13.64 12.5304 13.4293 13.0392 13.0542 13.4142C12.6791 13.7893 12.1704 14 11.64 14Z"
              fill="white"
            />
          </svg>
          SETTINGS
        </div>
      </div>
    </div>
  );
};

export default PortalSideNavbar;