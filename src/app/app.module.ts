import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DeletedComponent } from './deleted/deleted.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetTodosByhttpComponent } from './get-todos-byhttp/get-todos-byhttp.component';
import { CommentComponent } from './comment/comment.component';
import { CommntIntInterceptor } from './commnt-int.interceptor';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ItemTodoComponent,
    TodoDetailsComponentComponent,
    RegisterComponent,
    FavoritesComponent,
    DeletedComponent,
    GetTodosByhttpComponent,
    CommentComponent,
    NameComponent
  ],
  imports: [
    
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CommntIntInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
