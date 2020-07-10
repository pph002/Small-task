import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgTest() {
    const star = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<defs>
  <clipPath id="clip-path">
    <rect width="16" height="16" fill="none"/>
  </clipPath>
</defs>
<g id="Star" clip-path="url(#clip-path)">
  <path id="Path_157" data-name="Path 157" d="M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z" fill="#2699fb"/>
  <rect id="Rectangle_1449" data-name="Rectangle 1449" width="16" height="16" transform="translate(0 0)" fill="none"/>
</g>
</svg>`

    const StarSvg = () => <SvgXml xml={star} width='50%' height='50%' />;
    return <StarSvg />;
}

