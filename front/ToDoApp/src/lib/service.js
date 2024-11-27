
let URL = `http://localhost:8080/todo/api/tareas`
const service={
    async getAll() {
        try {
          const response = await fetch(URL); 
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();  
          return data;  
        } catch (error) {
          console.error('Hubo un problema con la solicitud:', error);
          throw error;  
        }
      },
    async getById(id){
        try{
            const response = await fetch(`${URL}/${id}`)
            if (!response.ok) {
                throw new Error(response.statusText);
              }
              const data = await response.json();  
              return data;  
        }catch(error){
            console.error('Hubo un problema con la solicitud:', error);
            throw error; 
        }
    },
    async save(tarea){
        try {
            const response = await fetch(URL, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(tarea), 
            });
        
            if (!response.ok) {
              throw new Error('No se pudo guardar la tarea: ' + response.statusText);
            }
        
            const data = await response.json(); 
            return data; 
          } catch (error) {
            console.error('Hubo un error con la solicitud: ', error); 
          }
    },
    async update(id, tarea){
        try {
            const response = await fetch(`${URL}/${id}`, {
              method: 'PUT', 
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(tarea), 
            });
        
            if (!response.ok) {
              throw new Error('No se pudo actualizar la tarea: ' + response.statusText);
            }
        
            const data = await response.json(); 
            return data;
          } catch (error) {
            console.error('Hubo un error con la solicitud PUT:', error); 
          }
    },
    async delete(id){
        try{
            const response = await fetch(`${URL}/${id}`, {
                method: 'DELETE', 
              });
            if(!response.ok){
                throw new Error ("No se pudo eliminar la tarea: " + response.statusText);
            }
            const data = await response.json();
            return data;
        }catch(error){
            console.error('Hubo un error con la solicitud: ', error);
        }
    }
}

export default service;