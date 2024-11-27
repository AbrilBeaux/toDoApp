package com.example.toDo.controller;
import com.example.toDo.dto.TareaDTO;
import com.example.toDo.service.TareaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
@RequestMapping("todo/api/tareas")
public class TareaController {
    private final TareaService tareaService;

    @Autowired
    public TareaController(TareaService tareaService){
        this.tareaService = tareaService;
    }

    @GetMapping
    public ResponseEntity<List<TareaDTO>> listAll() {
        return ResponseEntity.ok(tareaService.listAll());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<TareaDTO> getById(@PathVariable Long id){
        return ResponseEntity.ok(tareaService.getById(id));
    }

    @PostMapping
    public  ResponseEntity<TareaDTO> save(@RequestBody TareaDTO tarea){
        TareaDTO tareaGuardada = tareaService.save(tarea);
        return new ResponseEntity<>(tareaGuardada, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<TareaDTO> update(@PathVariable long id, @RequestBody TareaDTO tarea){
        tarea.setId(id);
        TareaDTO tareaGuardada = tareaService.update(tarea);
        return ResponseEntity.ok(tareaGuardada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        tareaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
