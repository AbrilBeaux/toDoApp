package com.example.toDo.modal;

import jakarta.persistence.Entity;
import org.json.JSONObject;

import jakarta.persistence.*;


@Entity
@Table(name = "Tarea")
public class Tarea {

	/**
	 * <p>Clase Tarea</p>
	 * Declaramos los atributos que va tener nuestro objeto.
	 *
	 * @param id
	 * Accesibilidad: private.
	 * Tipo de dato: Long (No es lo mismo que el primitivo long).
	 * @param nombre
	 * Accesibilidad: private.
	 * Tipo de dato: String.
	 * @param descripcion
	 * Accesibilidad: private.
	 * Tipo de dato: String.
	 * @param completada
	 * Accesibilidad: private.
	 * Tipo de dato: Boolean.
	 * @param prioridad
	 * Accesibilidad: private.
	 * Tipo de dato: String
	 */

	/*Atributos privados de la clase*/

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) /* Valor Auto-generado con la estategia: GenerationType.IDENTITY */
	private Long id;

	@Column(nullable = false) /* No podemos recibir este valor como nulo "null" */
	private String nombre;

	@Column
	private String descripcion;

	@Column(nullable = false)
	private String prioridad;

	@Column(nullable = false)
	private Boolean completada;

	/* Construtores de nuestro modelo de dato */

	public Tarea(){}


	public Tarea(String nombre, String descripcion, String prioridad) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.prioridad = prioridad;

	}

	public Tarea(Long id, String nombre, String descripcion, String prioridad, Boolean completada) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.prioridad = prioridad;
		this.completada = completada;
	}

	/* Getters & Setters */


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

	public String getPrioridad(){ return prioridad;}

	public void setPrioridad(String prioridad){this.prioridad = prioridad;}

	public Boolean getCompletada(){return completada;}

	public void setCompletada(Boolean completada){this.completada = completada;}


	/* Metodo para retornar nuestro objeto en un formato JSON */
	/*Este metodo es muy utilizado para poder transformar el objeto a JSON en caso de ser necesario para retorno*/
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.put("id", getId());
		jo.put("nombre", getNombre());
		jo.put("descripcion", getDescripcion());
		jo.put("prioridad", getPrioridad());
		jo.put("completada", getCompletada());
		return jo;
	}

}

