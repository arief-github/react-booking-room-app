import { useState } from 'react'
import { bookables } from '../../static.json'
import { FaArrowRight } from 'react-icons/fa'

export default function BookablesList() {
    const [group, setGroup] = useState("Kit")
    const bookablesInGroup = bookables.filter(book => book.group === group)

    const [bookableIndex, setBookableIndex] = useState(0)
    const nextBookable = () => setBookableIndex(i => (i + 1) % bookablesInGroup.length)

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
                    <FaArrowRight/>
                    <span>Next</span>
                </button>
             </p>
        </>
    )
}