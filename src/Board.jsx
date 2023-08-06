import React, { useState, useEffect } from "react";
import Category from "./Category"

function Board() {
const [categories, setCategories] = useState([])

    // This useEffect hook will run once after the component is first rendered.

    useEffect(() => {
      async function fetchData() {
        let offset = Math.floor(Math.random() * 28175) + 1

        // Fetch the categories from the API.
        
        const categoryURL = `https://localhost:6000/api/categories?count=6&offset=${offset}`

        const categoryResponse = await fetch(categoryURL)
        const categoryData = await categoryResponse.json()
        
        console.error(error)

        // Fetch the clues for each category
        const categoriesWithClues = await Promise.all(categoryData.map(async (category) => {
            const clueUrl = `https://localhost:6000/api/clues?category=${category.id}`
              const clueResponse = await fetch(categoryURL)
              const clueData = await clueResponse.json()

              console.error(error)
            
            // Attach the clues to the category.
            return {
                ...category,
                clues: clueData,
            }
        }))
        //Put categories and clues inside of state variable.
        setCategories(categoriesWithClues)
      }

      fetchData()
    }, [])
    
    return (
        <div className="jeopardy-board">
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    )
}