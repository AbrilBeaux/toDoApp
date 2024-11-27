import { useState, useEffect } from "react";
import service from "../../lib/service";
import Title from "../../components/title/Title";
import List from "../../components/list/List";
import { Container, Row, Col } from "react-bootstrap";
import Busqueda from "../../components/forms/Busqueda";


const Historial = () =>{
    const [tareas, setTareas ]= useState([])
    const [tareasFiltradas, setTareasFiltradas] =useState(tareas)
    
    
    useEffect(()=>{
         getTareas();
        
   },[])
   const getTareas= async () =>{
    try {
        const data = await service.getAll();
        setTareas(data.filter((item) => item.completada == true));
        
      } catch (error) {
        console.log(error);
      }

    }
const handleDelete = async (id, event) => {
    event.preventDefault();
    if (window.confirm('Estas seguro?')) {
      await borrarTarea(id);
    }
  }
  const borrarTarea = async(id)=>{
    try {
        await service.delete(id);
        setTareas(tareas.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error);
      }
}
    return(
    <>
    <Title>Tareas Completadas</Title>
    <Busqueda 
    setTareas={setTareas} 
    tareas={tareas} 
    tareasFiltradas={tareasFiltradas} 
    setTareasFiltradas={setTareasFiltradas} />
    <div className="d-flex justify-content-center mt-4">
        <Container fluid>
            <Row>
            <Col sm={2}/>
            <Col sm={8} >
                <List tareas = {tareasFiltradas} handleDelete={handleDelete} />
            </Col>
            <Col sm={2}/>
            </Row>
        </Container>
    </div>
    
      
            
    </>


)
    
}

export default Historial;