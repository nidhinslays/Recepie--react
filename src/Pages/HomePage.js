import SearchResult from "./SearchResult";

const HomePage = (props) => {
    return(
        <>
            <div className="home container p-5" style={{backgroundColor:'#ddd'}}>
                {props.searchedValue.data && props.searchedValue.data.results.map((val, index)=>{
                    return <SearchResult value ={val}/>
                })}
            </div>
        </>
    )
}

export default HomePage;