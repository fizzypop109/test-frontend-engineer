import {IconProps} from "./talons/IconProps";

export const CloseIcon = ({ color, widthClass, heightClass }: IconProps) => {
    return (
        <svg className={`${widthClass} ${heightClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_MD">
                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke={color ? color : "#000000"} strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    )
}