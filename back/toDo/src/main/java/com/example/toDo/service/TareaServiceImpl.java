package com.example.toDo.service;

import com.example.toDo.dto.TareaDTO;
import com.example.toDo.mapper.TareaMapper;
import com.example.toDo.modal.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.toDo.repository.TareaRepository;


import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TareaServiceImpl implements  TareaService{

    private final TareaRepository tareaRepository;
    private final TareaMapper tareaMapper;

    @Autowired
    public TareaServiceImpl(TareaMapper tareaMapper, TareaRepository tareaRepository){
        this.tareaMapper = tareaMapper;
        this.tareaRepository= tareaRepository;
    }

    @Override
    public List<TareaDTO> listAll(){
        List<Tarea> tareaList = tareaRepository.findAllByOrderByNombreAsc();
        List<TareaDTO> tareaDTOList = new ArrayList<>();
        for (Tarea tarea : tareaList) {
            tareaDTOList.add(tareaMapper.toDTO(tarea));
        }
        return tareaDTOList;

    }
    @Override
    public TareaDTO getById(Long id){
        Optional<Tarea> tarea = tareaRepository.findById(id);
        TareaDTO tareaDTO;
        if (!tarea.isPresent()){
            throw new NoSuchElementException("tarea con id: "+ id + " no existe");

        }
        return tareaMapper.toDTO(tarea.get());

    }

    @Override
    public  TareaDTO save(TareaDTO tarea){
        TareaDTO tareaDTO;
        boolean exists = tarea.getId() != null && tareaRepository.existsById(tarea.getId());
        if (exists){
            throw new IllegalArgumentException("la tarea ya existe");
        }
        return this.tareaMapper.toDTO(tareaRepository.save(tareaMapper.fromDTO(tarea)));

    }

    @Override
    public  void delete(Long id){
        boolean exists = tareaRepository.existsById(id);
        if (!exists){
            throw new IllegalArgumentException("la tarea que quiere borrar no existe");
        }
        tareaRepository.deleteById(id);
    }
    @Override
    public TareaDTO update(TareaDTO tarea){
        boolean exists = tareaRepository.existsById(tarea.getId());
        if (!exists){
            throw new IllegalArgumentException("la tarea que quiere editar no existe");
        }
        return this.tareaMapper.toDTO(tareaRepository.save(tareaMapper.fromDTO(tarea)));
    }
}
