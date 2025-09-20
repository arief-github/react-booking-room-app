import { useReducer } from "react";
import { weekReducer } from "../../reducer";
import { getWeek } from "../../utils/date-wrangler";
import { FaChevronLeft, FaCalendarDay, FaChevronRight } from 'react-icons/fa'

export default function WeekPicker({ date }) {
    const [week, dispatch] = useReducer(weekReducer, date, getWeek);

    return (
        <>
            <div className="date-picker">
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'PREV_WEEK' })}
                >
                    <FaChevronLeft/>
                    <span>Prev</span>
                </button>
                 <button
                    className="btn"
                    onClick={() => dispatch({ type: 'TODAY' })}
                >
                    <FaCalendarDay/>
                    <span>Today</span>
                </button>
                 <button
                    className="btn"
                    onClick={() => dispatch({ type: 'NEXT_WEEK' })}
                >
                    <span>Next</span>
                    <FaChevronRight/>
                </button>
            </div>
            <p>
                {week.start.toDateString()} - {week.end.toDateString()}
            </p>
        </>
    )
}
