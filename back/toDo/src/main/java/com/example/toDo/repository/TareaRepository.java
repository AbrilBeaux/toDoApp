package com.example.toDo.repository;

import com.example.toDo.modal.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TareaRepository extends JpaRepository<Tarea, Long> {

    List<Tarea> findAllByOrderByNombreAsc();

}
