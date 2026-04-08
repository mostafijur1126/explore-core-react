import React, { useState } from 'react';
const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Strawberry",
  "Guava"
];

const Filter = () => {
    const [search , setSearch] = useState("");

    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredFruits);
    

    return (
        <div className='container mx-auto'>
            <div className='text-center py-40'>
                <h1 className=''>find your favorite foods</h1>
                <input 
                className='border '
                type="text" 
                placeholder='find frots'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
               
                />
                <div>
                    {
                        filteredFruits.map(fruit => (
                            <div>
                                {fruit}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Filter;