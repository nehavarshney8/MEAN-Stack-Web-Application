import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttractionComponent } from './attraction/attraction.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { WorldsBestComponent } from './worlds-best/worlds-best.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'destinations/:id',
    component: DestinationComponent
  },
  {
    path: 'attractions/:id',
    component: AttractionComponent
  },
  {
    // will create a URL: localhost:3000/login
    path: 'login',
    component: UserComponent
  },
  {
    // url: localhost:3000/createUser
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'worldsBest',
    component: WorldsBestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
