import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) ) return;

        console.log(newCategory);
        setCategories([newCategory, ...categories]);

    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 

            onNewCategory={onAddCategory}
        />

        {/* Lsitado de Gif */}
            { categories.map( category => 
                 (
                    <GifGrid 
                        key={category} 
                        category={ category }>
                    </GifGrid>
                )
             ) 
            }

            {/* Gif item */}
    </>
  )
}
