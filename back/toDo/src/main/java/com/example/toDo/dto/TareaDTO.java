package com.example.toDo.dto;
import org.json.JSONObject;

import jakarta.persistence.*;

public class TareaDTO {
    private Long id;

    private String nombre;

    private String descripcion;

    private String prioridad;

    private Boolean completada;

    //CONSTRUCTOR VACÍO
    public TareaDTO(){};

    //constructor con 3 parametros

    public TareaDTO(String nombre, String descripcion, String prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
        this.descripcion= descripcion;
    }
    //constructor completo
    public TareaDTO(Long id, String nombre, String descripcion, String prioridad){
        this.id = id;
        this.nombre = nombre;
        this.prioridad = prioridad;
        this.descripcion= descripcion;
    }
    //getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(String prioridad) {
        this.prioridad = prioridad;
    }

    public Boolean getCompletada() {
        return completada;
    }

    public void setCompletada(Boolean completada) {
        this.completada = completada;
    }
    public JSONObject toJSONObject() {
        JSONObject jo = new JSONObject();
        jo.put("id",getId());
        jo.put("nombre",getNombre());
        jo.put("descripcion",getDescripcion());
        jo.put("prioridad",getPrioridad());
        jo.put("completada",getCompletada());
        return jo;
    }
}
