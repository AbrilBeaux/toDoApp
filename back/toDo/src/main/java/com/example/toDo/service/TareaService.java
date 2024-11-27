package com.example.toDo.service;
import com.example.toDo.dto.TareaDTO;
import com.example.toDo.modal.Tarea;

import java.util.List;

public interface TareaService {
    //metodos

    List<TareaDTO> listAll();

    TareaDTO getById(Long id);

    TareaDTO save(TareaDTO tarea);

    TareaDTO update(TareaDTO tarea);

    void delete(Long id);
}
