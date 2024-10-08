import { Atom } from "../../types/Atom";

import { getAtomColorScheme } from "../../utils/atomUtils";

export default function TripleAtoms({ player }: Atom) {
    const colorScheme = getAtomColorScheme(player);
    return (
        <svg
            className="atom-image"
            width="138"
            height="128"
            viewBox="0 0 138 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M84.5 42.5C84.5 64.5369 66.1988 82.5 43.5 82.5C20.8012 82.5 2.5 64.5369 2.5 42.5C2.5 20.4631 20.8012 2.5 43.5 2.5C66.1988 2.5 84.5 20.4631 84.5 42.5Z"
                fill={colorScheme.fillColor}
                stroke={colorScheme.outlineColor}
                strokeWidth="5"
            />
            <path
                d="M135.5 42.5C135.5 64.5369 117.199 82.5 94.5 82.5C71.8012 82.5 53.5 64.5369 53.5 42.5C53.5 20.4631 71.8012 2.5 94.5 2.5C117.199 2.5 135.5 20.4631 135.5 42.5Z"
                fill={colorScheme.fillColor}
                stroke={colorScheme.outlineColor}
                strokeWidth="5"
            />
            <path
                d="M105.5 85.5C105.5 107.537 87.1988 125.5 64.5 125.5C41.8012 125.5 23.5 107.537 23.5 85.5C23.5 63.4631 41.8012 45.5 64.5 45.5C87.1988 45.5 105.5 63.4631 105.5 85.5Z"
                fill={colorScheme.fillColor}
                stroke={colorScheme.outlineColor}
                strokeWidth="5"
            />
        </svg>
    );
}
