import React from 'react';

import {TransformMatrix, CircleParams, RectangleParams } from "@/app/types"


const color = '#3F3F3F';
const colorTop = '#161616';
const colorBottom = '#1e2326';


const defaultCircle: CircleParams = {numCircles: 2000, circleSize: 1, gap: 3, color: color}
const smallCircle: CircleParams = {numCircles: 1500, circleSize: 1, gap: 3, color: color}
const bigCircle: CircleParams = {numCircles: 2000, circleSize: 1, gap: 3, color: color}

const defaultTransform: TransformMatrix = {scaleX: 0.966, scaleY: 0.966, rotateX: -0.259, rotateY: 0.259, translateX: 351.645, translateY: 562.772}
const smallTransform: TransformMatrix = {scaleX: 0.966, scaleY: 0.966, rotateX: -0, rotateY: 0, translateX: 600.645, translateY: 50.772}
const bigTransform: TransformMatrix = {scaleX: 0.966, scaleY: 0.966, rotateX: -1.2, rotateY: 1.2, translateX: 1100.846, translateY: 600.234}


const defaultRectangle: RectangleParams = {translateX: 135.846, translateY: 257.234, rotate: -30, width: 176, height: 176, color: color, strokeWidth: 1};
const bigRectangle: RectangleParams = {translateX: 1050.846, translateY: 500.234, rotate: 0, width: 400, height: 400, color: color, strokeWidth: 1};




function generateCircles(circle: CircleParams): string {
    const { numCircles, circleSize, gap, color } = circle;
    let circles = '';
    for (let i = 0; i < Math.sqrt(numCircles); i++) {
        for (let j = 0; j < Math.sqrt(numCircles); j++) {
            const cx = j * (circleSize * 2 + gap);
            const cy = i * (circleSize * 2 + gap);
            circles += `<circle id="Ellipse_${i * Math.sqrt(numCircles) + j + 1}" cx="${cx}" cy="${cy}" r="${circleSize}" fill="${color}" />`;
        }
    }
    return circles;
}

function generateTransformMatrix(transform: TransformMatrix): string {
    const { scaleX, scaleY, rotateX, rotateY, translateX, translateY } = transform;
    return `matrix(${scaleX}, ${rotateX}, ${rotateY}, ${scaleY}, ${translateX}, ${translateY})`;
}


function generateRectangle({
                               translateX = 0,
                               translateY = 0,
                               rotate = 0,
                               width,
                               height,
                               rx = 8,
                               color,
                               strokeWidth = 1,
                           }: RectangleParams): string {
    const transform = `translate(${translateX} ${translateY}) rotate(${rotate})`;
    return `
        <g id="Rectangle" transform="${transform}" fill="none" stroke="${color}" stroke-width="${strokeWidth}">
            <rect width="${width}" height="${height}" rx="${rx}" stroke="none"/>
            <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="${rx - 0.5}" fill="none"/>
        </g>
    `;
}


const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 1600 800">
    <defs>
        <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${colorTop}"/>
            <stop offset="100%" stop-color="${colorBottom}"/>
        </linearGradient>
        <clipPath id="clip-background_pattern">
            <rect width="1600" height="800"/>
        </clipPath>
    </defs>
    <g id="background_pattern" clip-path="url(#clip-background_pattern)">
        <rect width="1600" height="800" fill="url(#backgroundGradient)"/>
        ${generateRectangle(defaultRectangle)};
        ${generateRectangle(bigRectangle)};
        <g id="Polygon_1" data-name="Polygon 1" transform="translate(203.808 389.211) rotate(30)" fill="none">
            <path d="M137.776,3.457a8,8,0,0,1,9.449,0l133.112,97.407a8,8,0,0,1,2.889,8.912l-50.868,157.68A8,8,0,0,1,224.745,273H60.255a8,8,0,0,1-7.614-5.544L1.774,109.776a8,8,0,0,1,2.889-8.912Z" stroke="none"/>
            <path d="M 142.4999694824219 2.91314697265625 C 141.0033569335938 2.91314697265625 139.5739288330078 3.38031005859375 138.3661804199219 4.26409912109375 L 5.253997802734375 101.6711578369141 C 2.81329345703125 103.4571990966797 1.797332763671875 106.5910491943359 2.72589111328125 109.4693298339844 L 53.59342956542969 267.1491088867188 C 54.52943420410156 270.0505981445313 57.20664978027344 271.9999694824219 60.25532531738281 271.9999694824219 L 224.7446441650391 271.9999694824219 C 227.7933197021484 271.9999694824219 230.4705352783203 270.0505981445313 231.4065399169922 267.1491088867188 L 282.2740783691406 109.4693298339844 C 283.20263671875 106.5910186767578 282.1866760253906 103.4571533203125 279.7459716796875 101.6711273193359 L 146.6337890625 4.26409912109375 C 145.4259948730469 3.38031005859375 143.9965667724609 2.91314697265625 142.4999694824219 2.91314697265625 M 142.4999847412109 1.91314697265625 C 144.1588592529297 1.91314697265625 145.8177337646484 2.42779541015625 147.2243194580078 3.45709228515625 L 280.3364868164063 100.8641204833984 C 283.1203308105469 102.9012298583984 284.2848815917969 106.493408203125 283.2257995605469 109.7763671875 L 232.3582458496094 267.4561462402344 C 231.2922821044922 270.7604675292969 228.2166442871094 272.9999694824219 224.7446441650391 272.9999694824219 L 60.25532531738281 272.9999694824219 C 56.78335571289063 272.9999694824219 53.70771789550781 270.7604675292969 52.64170837402344 267.4561462402344 L 1.774169921875 109.7763671875 C 0.715057373046875 106.493408203125 1.879638671875 102.9012603759766 4.6634521484375 100.8641510009766 L 137.7756500244141 3.45709228515625 C 139.1822357177734 2.42779541015625 140.8411102294922 1.91314697265625 142.4999847412109 1.91314697265625 Z" stroke="none" fill="${color}"/>
        </g>
        <g id="Dottes" transform="${generateTransformMatrix(smallTransform)}">
            ${generateCircles(defaultCircle)}
        </g>
        <g id="Dottes" transform="${generateTransformMatrix(defaultTransform)}"> 
            ${generateCircles(smallCircle)}
        </g>
        <g id="Dottes" transform="${generateTransformMatrix(bigTransform)}">
            ${generateCircles(bigCircle)}
        </g>
         
    </g>
</svg>
`;




const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const PatternBg: React.FC = () => {
    return (
        <div className="w-full"
            style={{
                backgroundImage: `url("${svgDataUrl}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height : '140%'
            }}
        >
        </div>
    );
}

export default PatternBg;
