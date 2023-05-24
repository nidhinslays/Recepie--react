import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"

const Receipe = (props) => {
    const {id} = useParams();
    const [recepie, findRecepie] = useState([]);
    const location = useLocation();
    const image = location.search.slice(1);

    console.log(location);

    const getRecepie = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=d7d063358be842e8b8f8ccfa70197ab8`);  
            console.log(response.data.ingredients);
            findRecepie(response.data.ingredients);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRecepie();
    },[]);

    return (
        <>
            <div className="recepie border container my-5 p-3" style={{borderRadius: '10px', backgroundColor: '#ddd'}}>
                <div className="row p-5">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div style={{width: '100%'}} className="p-5">
                            <img width={'100%'} src={`${image}`}/>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center bg bg-white p-5">
                    {recepie.map((value, index) => {
                        return <div  className="row ">
                                    <h5 className="col-md-4 text-center">{value.name}</h5>
                                    <div className="col-md-8 text-center">
                                        <p>{value.amount.us.value} {value.amount.us.unit}</p>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipe