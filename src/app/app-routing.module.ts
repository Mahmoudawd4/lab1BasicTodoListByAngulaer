import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { CommentComponent } from './comment/comment.component';
import { DeletedComponent } from './deleted/deleted.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'comments', component: CommentComponent ,canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: TodoListComponent ,canActivate:[AuthGuard]},
  { path: 'favorites', component: FavoritesComponent ,canActivate:[AuthGuard]},
  { path: 'deleted', component: DeletedComponent ,canActivate:[AuthGuard]},
  { path: 'todos/:id', component: TodoDetailsComponentComponent ,canActivate:[AuthGuard]},
  // { path: 'todos/:id', component: TodoDetailsComponentComponent }
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})





export class AppRoutingModule { }
