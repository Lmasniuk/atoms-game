import { Atom } from "../../types/Atom";

import { getAtomColorScheme } from "../../utils/atomUtils";

export default function SingleAtom({ player }: Atom) {
    const colorScheme = getAtomColorScheme(player);
    return (
        <svg
            className="single-atom-image"
            width="87"
            height="85"
            viewBox="0 0 87 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M84.5 42.5C84.5 64.5369 66.1988 82.5 43.5 82.5C20.8012 82.5 2.5 64.5369 2.5 42.5C2.5 20.4631 20.8012 2.5 43.5 2.5C66.1988 2.5 84.5 20.4631 84.5 42.5Z"
                fill={colorScheme.fillColor}
                stroke={colorScheme.outlineColor}
                strokeWidth="5"
            />
        </svg>
    );
}
