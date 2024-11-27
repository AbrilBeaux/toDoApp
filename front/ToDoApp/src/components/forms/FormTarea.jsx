import { Form } from "react-bootstrap"
import { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./formTarea.css"
const FormTarea = (props) =>{
    const {tarea, handleSubmit} = props;
    const [tareaData, setTareaData] = useState(tarea)
    const [validated, setValidated] = useState(false);
    const [prioriadError, setPrioridadError] = useState(false);
    const formRef = useRef(null);
    
    const handleValidate =(event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const isValid = form.checkValidity();
        if (!tareaData.prioridad) {
            setPrioridadError(true);
          }
        if (isValid && tareaData.prioridad ) {
            handleSubmit(tareaData);
          }
          setValidated(true);

    }
    
    const handleChange =(e)=>{
        setTareaData({...tareaData, [e.target.name]: e.target.value

        })
        console.log(tareaData)
    }
    return (

        <Form noValidate validated={validated} onSubmit={handleValidate} >
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Titulo</Form.Label>
                <Form.Control  name="nombre" type="text" value={tareaData.nombre} onChange={(e)=>handleChange(e)}  required={true}/>
                <Form.Control.Feedback type="invalid">
                    El título es requerido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control  as="textarea" name="descripcion" rows={3} value={tareaData.descripcion} onChange={(e)=>handleChange(e)} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="prioridad" onChange={(e)=>handleChange(e)}>

                <Form.Label>Prioridad</Form.Label> <br/>
               
                    <Form.Check
                     onChange={(e)=>handleChange(e)} 
                     inline label="Baja" 
                     name="prioridad" 
                     value="baja" 
                     checked ={tareaData.prioridad == "baja"} 
                     type="radio" 
                     id="baja"
                     
                     required/>
                    <Form.Check onChange={(e)=>handleChange(e)} 
                    inline 
                    label="Media" 
                    name="prioridad" 
                    value="media" 
                    checked ={tareaData.prioridad == "media"} 
                    type="radio" 
                    id="media" 
                    
                    required/>
                    <Form.Check onChange={(e)=>handleChange(e)} 
                    inline 
                    label="Alta" 
                    name="prioridad" 
                    value="alta" 
                    checked ={tareaData.prioridad == "alta"} 
                    type="radio" 
                    id="alta" 
                    
                    required/>
                    
                    
                    
                    { prioriadError && (
    <div className="text-danger">Seleccionar una prioridad es obligatorio.</div>
  )}
          </Form.Group>
          <div className="d-grid gap-2">
      
            <Button variant="secondary" size="lg" type="submit"  >
                Guardar Tarea
            </Button>
         </div>
          
    </Form>
    )
}

export default FormTarea;