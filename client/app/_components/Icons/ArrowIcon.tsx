import {IconProps} from "./talons/IconProps";

export const ArrowIcon = ({ color, widthClass, heightClass }: IconProps) => {
    return (
        <svg className={`${widthClass} ${heightClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke={color ? color : "#000000"} strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}