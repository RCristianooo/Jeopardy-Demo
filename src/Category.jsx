import React from 'react'
import Clue from './Clue'
import './category.css'


function Category({ category }) {
const values = [200, 400, 600, 800, 1000];

const toTitleCase = (str) => {
    return str
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ')
}

const title = toTitleCase(category.title)

    return (
        //header and five clues
        <div className='jeopardy-category'>
            <h2>{title}</h2>
            {values.map((value, index) => {
                const clue = category.clues.find((clue) => clue.value === value)
                return <Clue key={index} value={value} clue={clue}/>
            })}
        </div>
    )
}

export default Category;