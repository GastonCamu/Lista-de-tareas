import { Injectable } from '@angular/core';
import { Tarea } from '../clases/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'Tareas';

  getTareas(): Tarea[] {
    const tareasString = localStorage.getItem(this.localStorageKey);
    return tareasString ? JSON.parse(tareasString) : [];
  }  

  agregarTarea(tarea: Tarea) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
  constructor() { }
}
