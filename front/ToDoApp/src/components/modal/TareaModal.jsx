import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormTarea from '../forms/FormTarea';

const ModalTarea =(props)=> {
  const {modal, handleCloseModal, edit, tarea, handleSubmit} = props;

  return (
    <>

      <Modal show={modal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Editar Tarea" : "Agregar tarea"} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormTarea tarea ={tarea} handleSubmit = {handleSubmit} />


        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalTarea;