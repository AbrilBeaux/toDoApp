import "../../assets/plus-lg.svg"
import Button from 'react-bootstrap/Button';

const AddTarea = (props) =>{
    const {handleModal} = props;
    return (
        <>
            <div className="d-flex justify-content-center w-100 mt-3">
            <Button variant="outline-dark" id="agregar" onClick={(e)=> handleModal(e)}><i class="bi bi-plus-lg"  />Nueva Tarea</Button>
                
            </div>
        </>
    )
}

export default AddTarea;