import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import "./formTarea.css";


const Busqueda = (props) =>{
    const {setTareas, tareas, tareasFiltradas, setTareasFiltradas} = props;

    useEffect(() => {
       setTareasFiltradas(tareas)
        
      }, [tareas]); 
    
      const handleChange = (e) => {
        if(e.target.value !== ""){
            setTareasFiltradas(tareas.filter((item)=>item.nombre.includes(e.target.value) ||item.descripcion.includes(e.target.value) ))
        } else{
            setTareasFiltradas(tareas);
        }
        
      };
    return (
        <div className="d-flex justify-content-center w-100 mt-3">
        <Form className="busqueda">
      <Form.Group className="mb-3" controlId="busqueda">
      
        <Form.Control onChange={(e)=>handleChange(e)} type="email" placeholder="" />
      </Form.Group>
    </Form>
    </div>
    )
}

export default Busqueda;