// Decorative cute white cat that wanders the screen, then finds a yarn ball
// and plays with it. Animations live in globals.css (classes only, no inline
// styles, so it works with the strict CSP).
export function WalkingCat() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div className="cat-yarn absolute left-0 top-0 w-7">
        <svg className="cat-yarn-spin" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="12" fill="#f472b6" />
          <path
            d="M4 10 C 10 14, 18 6, 25 12 M3 16 C 10 20, 18 12, 26 17 M8 23 C 12 18, 18 20, 22 24 M10 3 C 8 10, 12 18, 9 25"
            fill="none"
            stroke="#be185d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="cat-path absolute left-0 top-0 w-16">
        <div className="cat-face">
          <div className="cat-bob">
            <svg viewBox="0 0 100 90">
              <path
                className="cat-tail"
                d="M24 64 C 4 62, 4 38, 18 34"
                fill="none"
                stroke="#f4f4f5"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <ellipse cx="46" cy="64" rx="26" ry="18" fill="#f4f4f5" />
              <ellipse cx="34" cy="81" rx="7" ry="4.5" fill="#f4f4f5" />
              <ellipse cx="58" cy="81" rx="7" ry="4.5" fill="#f4f4f5" />
              <polygon points="40,24 44,2 60,16" fill="#f4f4f5" />
              <polygon points="66,14 82,2 86,26" fill="#f4f4f5" />
              <polygon points="45,19 46,9 54,16" fill="#f9a8d4" />
              <polygon points="71,14 80,8 82,20" fill="#f9a8d4" />
              <circle cx="63" cy="38" r="26" fill="#f4f4f5" />
              <ellipse cx="54" cy="37" rx="4" ry="5" fill="#1f2937" />
              <ellipse cx="73" cy="37" rx="4" ry="5" fill="#1f2937" />
              <circle cx="55.5" cy="35" r="1.5" fill="#ffffff" />
              <circle cx="74.5" cy="35" r="1.5" fill="#ffffff" />
              <ellipse cx="47" cy="47" rx="5" ry="3" fill="#f9a8d4" />
              <ellipse cx="80" cy="47" rx="5" ry="3" fill="#f9a8d4" />
              <polygon points="62,43 66,43 64,45.5" fill="#f472b6" />
              <path
                d="M60 47 q 2 3 4 0 q 2 3 4 0"
                fill="none"
                stroke="#1f2937"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
