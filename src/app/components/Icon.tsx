import React from "react";
import { svgPaths, SvgKey } from "./svgPaths";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: SvgKey;
  size?: number | string;
  fill?: string;
  viewBox?: string;
}

export function Icon({ name, size = 20, fill = "currentColor", viewBox, className, ...props }: IconProps) {
  const path = svgPaths[name];
  // Default viewBoxes based on the observed paths in the original code, but they vary.
  // I will try to infer or let the user pass it. The original code uses different viewBoxes.
  // p19b65b00: 0 0 15 15
  // p19ecbc00: 0 0 20 20
  // p230b3a00: 0 0 16.6667 15
  // p25fbc800: 0 0 11.6667 15
  // p27cf1c00: 0 0 20 18
  // p3500b800: 0 0 15 15
  // p3ab96d00: 0 0 15.7519 15.7519
  // p9c74300: 0 0 16.6667 15
  // pa0fb500: 0 0 20 18
  
  const defaultViewBoxes: Record<SvgKey, string> = {
    p19b65b00: "0 0 15 15",
    p19ecbc00: "0 0 20 20",
    p230b3a00: "0 0 16.6667 15",
    p25fbc800: "0 0 11.6667 15",
    p27cf1c00: "0 0 20 18",
    p3500b800: "0 0 15 15",
    p3ab96d00: "0 0 15.7519 15.7519",
    p9c74300: "0 0 16.6667 15",
    pa0fb500: "0 0 20 18",
    p2668ba00: "0 0 24 24",
    p26f9ce00: "0 0 24 24",
    p4501f00: "0 0 24 24",
    p1772cd00: "0 0 20 20",
    p2b6f400: "0 0 20 20",
    p1a3b1300: "0 0 25 24",
    p23c02df0: "0 0 25 24",
    p3b975200: "0 0 22 22",
    p33817400: "0 0 20 20",
    p18b66300: "0 0 24 24",
    p1a1e8980: "0 0 24 24",
    p21cef280: "0 0 20 20",
    p2b8d2f00: "0 0 24 24",
    p3fdba000: "0 0 24 24",
    pa22b700: "0 0 24 24",
    p16bd2a80: "0 0 20 20",
    p16e51a00: "0 0 24 24",
    p19eaa580: "0 0 20 20",
    p29ef6f00: "0 0 20 20",
    p3053c630: "0 0 24 24",
    p8d2f900: "0 0 24 24",
    pe593d70: "0 0 24 24",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox || defaultViewBoxes[name]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
