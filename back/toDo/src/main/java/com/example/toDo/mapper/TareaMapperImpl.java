package com.example.toDo.mapper;
import com.example.toDo.dto.TareaDTO;
import com.example.toDo.modal.Tarea;
import org.springframework.stereotype.Component;

@Component
public class TareaMapperImpl implements TareaMapper{

    @Override
    public TareaDTO toDTO(Tarea entidad){
        if(entidad == null){
            return null;
        }
        TareaDTO tareaDTO = new TareaDTO();
        tareaDTO.setId(entidad.getId());
        tareaDTO.setCompletada(entidad.getCompletada());
        tareaDTO.setNombre(entidad.getNombre());
        tareaDTO.setDescripcion(entidad.getDescripcion());
        tareaDTO.setPrioridad(entidad.getPrioridad());
        return tareaDTO;
    }

    @Override
    public Tarea fromDTO(TareaDTO entidad){
        if (entidad ==null){
            return null;
        }
        Tarea tarea = new Tarea();
        tarea.setId(entidad.getId());
        tarea.setNombre(entidad.getNombre());
        tarea.setDescripcion(entidad.getDescripcion());
        tarea.setCompletada(entidad.getCompletada());
        tarea.setPrioridad(entidad.getPrioridad());

        return tarea;
    }


}
