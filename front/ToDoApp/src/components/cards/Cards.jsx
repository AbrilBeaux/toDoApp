import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect, useRef } from "react";
import "./cards.css"

const Cards = (props) =>{
    const {tareas} = props
   
    const [expandido, setExpandido] = useState(false);
    const [idTarea, setIdTarea] = useState(0);

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

    const obtenerClasePrioridad = (prioridad, nivel) =>
        `bi bi-circle${prioridad === nivel ? '-fill' : ''} ${prioridad === nivel ? nivel : ''}`;
    return (

        <>
        <Row className="d-flex justify-content-start mt-3 g-3">
        {tareas.map((tarea) =>{
            return(
                <Col xs={12} sm={6} md={4} lg={3} key={tarea.id} className='m-4'>  
                <Card style={{ width: '100%',height: '100%' }} className="mt-3 d-flex flex-column">
                    <Card.Body className="d-flex flex-column ">
                        <Card.Title className='d-flex justify-content-center '>{tarea.nombre}</Card.Title>
                        <hr/>
                        <Card.Text className="flex-grow-1 d-flex flex-column justify-content-end">
                            <p className={`descripcion ${expandido && tarea.id === idTarea ? "expandido" : ""}`}>
                                {tarea.descripcion}  </p>
                            <button onClick={(e)=>toggleDescripcion(tarea.id,e)} className="btn btn-link">
                    {expandido && tarea.id === idTarea? <i class="bi bi-dash-circle"/> : <i class="bi bi-plus-circle"/>}
                </button>
                
                            </Card.Text>
                            <hr/>
                            <Col>
                            <i class={obtenerClasePrioridad(tarea.prioridad, 'baja')} />
                            <i class={obtenerClasePrioridad(tarea.prioridad, 'media')} />
                            <i class={obtenerClasePrioridad(tarea.prioridad, 'alta')} />
                            </Col>
                            
                    </Card.Body>
                </Card>
            </Col>

            )
        })}
        </Row>
            
        </>
    )
}

export default Cards;