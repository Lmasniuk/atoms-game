import { AtomColorScheme } from "../../types/AtomColorScheme";

export default function QuadrupleAtoms({
    outlineColor,
    fillColor,
}: AtomColorScheme) {
    return (
        <svg
            width="138"
            height="127"
            viewBox="0 0 138 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M84.5 42.5C84.5 64.5369 66.1988 82.5 43.5 82.5C20.8012 82.5 2.5 64.5369 2.5 42.5C2.5 20.4631 20.8012 2.5 43.5 2.5C66.1988 2.5 84.5 20.4631 84.5 42.5Z"
                fill={fillColor}
                stroke={outlineColor}
                strokeWidth="5"
            />
            <path
                d="M135.5 42.5C135.5 64.5369 117.199 82.5 94.5 82.5C71.8012 82.5 53.5 64.5369 53.5 42.5C53.5 20.4631 71.8012 2.5 94.5 2.5C117.199 2.5 135.5 20.4631 135.5 42.5Z"
                fill={fillColor}
                stroke={outlineColor}
                strokeWidth="5"
            />
            <path
                d="M135.5 84.5C135.5 106.537 117.199 124.5 94.5 124.5C71.8012 124.5 53.5 106.537 53.5 84.5C53.5 62.4631 71.8012 44.5 94.5 44.5C117.199 44.5 135.5 62.4631 135.5 84.5Z"
                fill={fillColor}
                stroke={outlineColor}
                strokeWidth="5"
            />
            <path
                d="M84.5 84.5C84.5 106.537 66.1988 124.5 43.5 124.5C20.8012 124.5 2.5 106.537 2.5 84.5C2.5 62.4631 20.8012 44.5 43.5 44.5C66.1988 44.5 84.5 62.4631 84.5 84.5Z"
                fill={fillColor}
                stroke={outlineColor}
                strokeWidth="5"
            />
        </svg>
    );
}
