import foodIcon from '../images/foodIcon.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Header = (props) => {
    const [searchValue, searchFun] =useState('');

    const searchImp = (e) => {
        if(e.key == 'Enter' && e.target.value !== '') {
            searchFun(e.target.value);
        }
    }

    useEffect(() => {
        filterReceipe();
    }, [searchValue])

    const filterReceipe = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d7d063358be842e8b8f8ccfa70197ab8&query=${searchValue}`)
            props.getSearchDetails(response);
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <>
            <header className='d-flex justify-content-between align-items-center px-3'>
                
                <img style={{height: '60px'}} className="foodIcon" alt="img" src={foodIcon}/>
                
                <div>
                    <input onKeyDown={searchImp} className='form-control' placeholder='search'/>
                </div>
            </header>
        </>
    )
}

export default Header;