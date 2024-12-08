import Link from "next/link";

export interface BreadCrumbProps {
    to: string;
    label: string;
}

export const BreadCrumb = ({ to, label }: BreadCrumbProps) => {
    return (
        <Link href={to} className="underline max-w-[15ch] truncate">
            {label.toUpperCase()}
        </Link>
    );
}