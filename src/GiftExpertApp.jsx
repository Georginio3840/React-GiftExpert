import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp =() =>{
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory=(newCategory)=>{
       // categories.push('Valorant')

       //    ... spred para copiar los elementos de cualquier arreglo
       //console.log(newCategory)
       if(categories.includes(newCategory))    
       return;
       setCategories([newCategory,...categories])
       

    
    }
    return(
        <>
    
            <h1>GiftExpertApp </h1>

    
         <AddCategory 
         onNewCategory = {onAddCategory}
         />

            {
                //No importa las llaves
            categories.map( (category) => (
                <GiftGrid 
                key={category} 
                category={category}/>
                 ))
            }
        </>
    )
}