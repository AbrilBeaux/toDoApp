import { Col, Container, Row } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import "./list.css"

const List = (props) =>{
    const {tareas, handleModal, handleDelete, handleComplete} = props;
    const [expandido, setExpandido] = useState(false);
    const [idTarea, setIdTarea] = useState(null);
    

    const toggleDescripcion = (id,e) => {
        console.log(e.target.className)
        console.log(idTarea)
        if(e.target.className == "bi bi-plus-circle"){
            setExpandido(true)
        }else{
            setExpandido(false);
        }
        setIdTarea(id)
        };
    
    return(
    <>
        {tareas.map((tarea)=>{
            return (
                <>
                <Row key={tarea.id} className="d-flex justify-content-end mt-3">
                    <Col className="d-flex">
                    <p className="  ">{tarea.nombre}</p>
                    <i class={`" bi bi-circle-fill " ${tarea.prioridad} `} />
                    </Col>
                    <Col className="d-flex justify-content-around">
                    <div className="flex-grow-1 d-flex descontainer ">
                        <p className={`descripcionp ${expandido && tarea.id === idTarea ? "expandido" : ""}`}>
                            {tarea.descripcion} 
                        </p>

                    
                    
                     <button onClick={(e) => toggleDescripcion(tarea.id,e)} className="btn btn-link">
                        { expandido && tarea.id === idTarea ? <i class="bi bi-dash-circle"/> : <i class="bi bi-plus-circle"/>}
                    </button> 
                    </div>
                    </Col>
                    {
                        !tarea.completada ?
                        <Col className="d-flex justify-content-end ">
                    <Button variant="outline-dark" id="editar"  onClick={(e)=>handleModal(e, tarea)} ><i class="bi bi-pencil-fill"  id="editar"/></Button>
                    <Button variant="outline-dark" id="eliminar" onClick={(e)=>handleDelete(tarea.id,e)}><i class="bi bi-x" id="eliminar"/></Button>
                    <Button variant="outline-dark" id="check" onClick={(e)=>handleComplete(tarea)}><i class="bi bi-check-lg" id="check"/></Button>
                    </Col> 
                    :
                    <Col className="d-flex justify-content-end ">
                        <Button variant="outline-dark" id="eliminar" onClick={(e)=>handleDelete(tarea.id,e)}><i class="bi bi-x" id="eliminar"/></Button>
                        <i class="bi bi-check-lg text-success" id="check"/>
                    </Col>
                    
                    }
                    
                 </Row>
                <hr/>
                </>
                )
            })}
        </>
           )
    }


export default List;