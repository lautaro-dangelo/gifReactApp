import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


function GifExpertApp(){


const [categories, setCategories] = useState( ['Stitch']);

    return(

<React.Fragment>
    <h2 className='animate__animated animate__flip'>GIF APP</h2>
       <AddCategory setCategories= { setCategories } />
    <hr />
    {
        categories.map( category =>(
            
                <GifGrid 
                category={ category } 
                key= { category }
                />
            
        ))
    }
</React.Fragment>
    )
};

export default GifExpertApp;