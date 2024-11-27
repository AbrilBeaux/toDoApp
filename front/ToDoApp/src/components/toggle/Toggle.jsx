import { Button } from "react-bootstrap";
import "./toggle.css"

const Toggle = (props) =>{

    const {list, handleToggle}=props;
    return (

        <>
            <div className="d-flex">
            {
                !list ?
                <Button variant="outline-dark" id="agregar" onClick={handleToggle}>
                <i class="bi bi-list-task"/> 
                </Button> 
                : 
                <Button variant="outline-dark" id="agregar" onClick={handleToggle}>
                <i class="bi bi-grid-3x3-gap-fill"></i>
                </Button>
            }
            </div>
        </>
    )

}

export default Toggle;