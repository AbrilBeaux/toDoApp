import "./title.css"

const Title = (props) =>{
    return(
        <>
        <div className=" mt d-flex justify-content-center w-100 mt-5">
            <h1 className="h1-styled">
                {props.children}
            </h1>

        </div>
            
        </>
    )
}

export default Title;