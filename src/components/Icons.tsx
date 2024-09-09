import "./Icons.css";
export default function Icons() {
  return (
    <>
      <button style={{ border: "none" }}>
        <a
          href="https://www.linkedin.com/in/sachin-sharma-891959119/"
          target="_blank"
        >
          <span className="svg-icon">
            <span className="visually-hidden">LinkedIn</span>
            <svg
              id="linkedin-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
              aria-hidden="true"
            >
              <g className="svg-background">
                <circle cx="50%" cy="50%" r="50%" />
                <rect width="100%" height="100%" ry="150" rx="150" />
              </g>
              <g transform="scale(0.65, 0.65)">
                <path
                  fill="currentColor"
                  transform="translate(160, 160)"
                  d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z"
                />
              </g>
            </svg>
          </span>
        </a>
      </button>
      &nbsp;&nbsp;
      <button style={{ border: "none" }}>
        <a href="https://github.com/sach2996" target="_blank">
          <span className="svg-icon">
            <span className="visually-hidden">GitHub</span>
            <svg
              id="github-svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g className="svg-background">
                <circle cx="50%" cy="50%" r="50%" />
                <rect width="100%" height="100%" ry="6" rx="6" />
              </g>
              <g transform="scale(0.9, 0.9)">
                <path
                  fill="currentColor"
                  transform="translate(1.5, 1.5)"
                  d="m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86 0-1.69-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10-10z"
                />
              </g>
            </svg>
          </span>
        </a>
      </button>
    </>
  );
}
