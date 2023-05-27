import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneSlotCardComponent } from './one-slot-card/one-slot-card.component';
import { TwoSlotCardComponent } from './two-slot-card/two-slot-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { FloatingCardComponent } from './floating-card/floating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OneSlotCardComponent,
    TwoSlotCardComponent,
    TodoListComponent,
    TodoItemComponent,
    LoginPageComponent,
    TodosPageComponent,
    FloatingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
