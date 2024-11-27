import { Container, Row } from "react-bootstrap";
import Title from "../../components/title/Title";
import AddTarea from "../../components/buttons/AddTareaBotton";
import { useState, useEffect } from "react";
import ModalTarea from "../../components/modal/TareaModal";
import List from "../../components/list/List";
import Toggle from "../../components/toggle/Toggle";
import { Col } from "react-bootstrap"
import Cards from "../../components/cards/Cards";
import service from "../../lib/service";


let tareaInit = {
    "nombre":"",
    "id":null,
    "descripcion":"",
    "prioridad":"",
    "completada":false
}

const Home = () =>{
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState(tareaInit);
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false);
    const [list, setList] = useState(true);
    useEffect(()=>{
         getTareas();
    },[])

    const getTareas= async () =>{
        try {
            const data = await service.getAll();

            setTareas(data.filter((item) => item.completada == false));
          } catch (error) {
            console.log(error);
          }
        
    }

    const crearTarea = async (tarea) =>{
        try {
            const data = await service.save(tarea);
            setTareas([...tareas, data])
          } catch (error) {
            console.log(error);
          }
    }
    const editarTarea = async (id, tarea)=>{
        try{
            const data = await service.update(id,tarea);
            setTareas(tareas.map((item)=>item.id == id ? data : item ))
        }catch(error){
            console.log(error);
        }
        
    }
    const handleComplete =async(data)=>{
        data.completada = true;
        await editarTarea(data.id, data);
        setTareas(tareas.filter((item)=> item.completada == false))

    }
    const borrarTarea = async(id)=>{
        try {
            await service.delete(id);
            setTareas(tareas.filter((item) => item.id !== id));
          } catch (error) {
            console.log(error);
          }
    }
    const handleDelete = async (id, event) => {
        event.preventDefault();
        if (window.confirm('Estas seguro?')) {
          await borrarTarea(id);
        }
      };

    const handleModal = (e, tarea=null) =>{
        if(e.target.id == "agregar"){
            setEdit(false)
            setTarea(tareaInit)
        }else{
            setEdit(true)
            setTarea(tarea);
        }
        
        setModal(true);
    }
    
    const handleCloseModal = () =>{
        setModal(false);
    }
    const handleToggle = () =>{
        if(list){
            setList(false)
        }else{
            setList(true)}
    }
    const handleSubmit = ( data) =>{
        
        handleCloseModal();
          
        if(edit){
            editarTarea(data.id, data)
        }else{ crearTarea(data)
        
    }
        
        
    }

     
    return(
    <>
    <Title>Mis Tareas</Title>
    <AddTarea handleModal = {handleModal} />
    <ModalTarea modal = {modal} handleCloseModal = {handleCloseModal} edit = {edit}
    tarea = {tarea}
    handleSubmit ={handleSubmit}
     />
    <div className="d-flex justify-content-center mt-4">
        <Container fluid>
            <Row >
                <Col sm={2}/>
                <Col sm={8} >
                    <Toggle list = {list} handleToggle ={handleToggle} />
                    {list ? <List 
                    tareas={tareas} 
                    handleModal={handleModal} 
                    handleDelete={handleDelete}
                    handleComplete= {handleComplete} 
                    /> : 
                    <Cards tareas={tareas}/>}
                </Col>
                <Col sm={2}/>
            </Row>
        </Container>

            </div>
    
    
    
    
    
            
    </>


)
    
}

export default Home;