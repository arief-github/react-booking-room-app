import { useState } from 'react'
import { bookables, sessions, days } from '../../static.json'
import { FaArrowRight } from 'react-icons/fa'

export default function BookablesList() {
    const [group, setGroup] = useState("Kit")
    const bookablesInGroup = bookables.filter(book => book.group === group)

    const [bookableIndex, setBookableIndex] = useState(0)
    const nextBookable = () => setBookableIndex(i => (i + 1) % bookablesInGroup.length)

    const bookable = bookablesInGroup[bookableIndex]
    const [hasDetails, setHasDetails] = useState(false)

    const groups = [...new Set(bookables.map(b => b.group))]

    return (
        <>
            <select style={{ maxHeight: 40, maxWidth: 70 }} value={group} onChange={(e) => setGroup(e.target.value)} >
                { groups.map(group => <option value={group} key={group}>{group}</option>) }
            </select>

            <ul className='bookables items-list-nav'>
                { bookablesInGroup.map((b, i) => (
                    <li key={b.id} className={ i === bookableIndex ? "selected" : '' }>
                        <button className='btn' onClick={() => setBookableIndex(i)}>
                            {b.title}
                        </button>
                    </li>
                )) }
             </ul>
             <p>
                <button className='btn' onClick={nextBookable} autoFocus>
                    <span>Next</span>
                    <FaArrowRight/>
                </button>
             </p>

             {
                bookable ? (
                    <div className='bookable-details'>
                        <div className='item'>
                            <div className='item-header'>
                                <h2>{bookable.title}</h2>
                            </div>
                            <span className='controls'>
                                <label>
                                    <input
                                        type='checkbox'
                                        checked={hasDetails}
                                        onChange={() => setHasDetails(has => !has)}
                                    />
                                    Show Details
                                </label>
                            </span>
                        </div>

                        <p>{bookable.notes}</p>

                        {
                            hasDetails && (
                                <div className='item-details'>
                                    <h3>Availability</h3>
                                    <div className='bookable-availability'>
                                        <ul>
                                            { bookable.days
                                                .sort()
                                                .map(d => <li key={d}> { days[d] } </li>)
                                            }
                                        </ul>
                                        <ul>
                                            {
                                                bookable.sessions
                                                    .map(s => <li key={s}>{sessions[s]}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : null
             }
        </>
    )
}