package com.example.toDo.mapper;
import com.example.toDo.dto.TareaDTO;
import com.example.toDo.modal.Tarea;


public interface TareaMapper {

    //Interfaz en donde definimos los metodos que seran obligatorios utilizar en nuestras clases.

    public TareaDTO toDTO (Tarea entidad);
    public Tarea fromDTO (TareaDTO entidad);
}
