import classes from './StarRating.module.scss';
import classNames from "classnames";

export interface StarRatingProps {
    value: number;
}

export const StarRating = ({ value }: StarRatingProps) => {
    return (
        <div className="relative align-middle inline-block overflow-hidden text-[var(--khaki)]">
            <div className={classes.emptyStars}/>
            <div style={{width: `${(value * 10) * 2}%`}} className={classNames("absolute left-0 top-0 overflow-hidden whitespace-nowrap h-full text-[var(--gold)]", classes.fullStars)}/>
        </div>
    )
}