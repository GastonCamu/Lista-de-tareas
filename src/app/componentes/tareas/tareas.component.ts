import { Component, OnInit, inject } from '@angular/core';
import { Tarea } from '../../clases/tarea';
import { TareasService } from '../../servicios/tareas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})

export class TareasComponent implements OnInit {

  listaTareas:Tarea[] = [];
  nuevaTarea:Tarea = new Tarea(0, '', '', new Date());
  
  private _tareasService = inject(TareasService);
  
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
