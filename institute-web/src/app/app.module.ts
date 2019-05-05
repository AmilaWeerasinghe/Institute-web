import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassCardComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
