// for smooth animation of changing values reccomended to use extenal library

import React from "react";

interface GradientLineProps {
  id?: string;
  from?: number;
  to?: number;
  accentColor?: string;
  accent2Color?: string;
}

export const GradientLine = React.memo(
  ({
    id = "linGrad",
    from = 25,
    to = 75,
    accentColor = "rgba(28,18,75,1)",
    accent2Color = "rgba(61,205,235,1)",
  }: GradientLineProps) => {
    return (
      <div style={{ padding: "10px 0" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="50"
        >
          <defs>
            <linearGradient id={id}>
              {to < from && (
                <>
                  <stop offset={`${to - 2}%`} stopColor={accent2Color} />
                  <stop offset={`${to + 2}%`} stopColor={accentColor} />
                </>
              )}
              <stop offset={`${from - 2}%`} stopColor={accentColor} />
              <stop offset={`${from + 2}%`} stopColor={accent2Color} />
              <stop offset={`${to - 2}%`} stopColor={accent2Color} />
              {to > from && (
                <stop offset={`${to + 2}%`} stopColor={accentColor} />
              )}
            </linearGradient>
          </defs>
          <g id={"gr-" + id}>
            <rect id="rect1" fill={`url(#${id})`} width="100%" height="100%" />
          </g>
        </svg>
      </div>
    );
  }
);
