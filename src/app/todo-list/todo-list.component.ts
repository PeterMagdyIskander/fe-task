import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos:any=[
    {
      title:"Todo #1",
      subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      weight:2,
    },
    {
      title:"Todo #1",
      subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      weight:2,
    },
    {
      title:"Todo #1",
      subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      weight:2,
    },
    {
      title:"Todo #1",
      subtitle:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      weight:2,
    }
  ]
}
