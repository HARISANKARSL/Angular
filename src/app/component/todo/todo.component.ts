
import { tasks } from './../../model/tasks';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm !: FormGroup
  task :tasks []= [];
progress :tasks []=[];
  compleated:tasks [] = [];

  updatedIndex!:any;
  isEditEnable:boolean=false;


  drop(event: CdkDragDrop<tasks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


constructor(){}

ngOnInit(){
  this.todoForm = new FormGroup({
    todo: new FormControl('', Validators.required),
   
  });
 
  
}
addTask(){
  this.task.push({
    description:this.todoForm.value.todo ,
    done:false
    
    
  })
  this.todoForm.reset()

 
}
onEdit(item:tasks,i:number){
this.todoForm.controls['todo'].setValue(item.description);
this.updatedIndex=i;
this.isEditEnable=true
}
updateTask(){
  this.task[this.updatedIndex].description=this.todoForm.value.todo;
  this.task[this.updatedIndex].done=false;
  this.todoForm.reset();
  this.updatedIndex=undefined;
  this.isEditEnable=false
}

deleteTask(i:number){
this.task.splice(i,1);

}
deleteProgressTask(i:number){
  this.progress.splice(i,1);
  
  }
  deleteCompleatesTask(i:number){
    this.compleated.splice(i,1);
    
    }


}
