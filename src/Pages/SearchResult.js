import {Link} from 'react-router-dom';

const SearchResult = (props) => {
    console.log(props)
    return(
        <>
            <div style={{borderRadius: '10px', backgroundColor: '#fff'}} className="border m-5 p-5 row">
                <img className="col-md-3" width={250} src={`${props.value.image}`}/>
                <div className="d-flex flex-column align-items-center justify-content-center col-md-9">
                    <h3 style={{marginLeft: '20px'}} className="">{props.value.title}</h3>
                    <div className="d-flex">
                        <Link to={{pathname: `/${props.value.id}/recepie`, search: props.value.image}} style={{marginRight: '5px'}} className="form-control btn btn-success">Recepie</Link>
                        <button className="form-control btn btn-danger">Feedback</button>
                    </div>
                </div>
                
            </div>  
        </>
    )
}

export default SearchResult