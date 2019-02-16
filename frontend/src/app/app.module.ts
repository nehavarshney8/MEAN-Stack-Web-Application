import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from '../carousel-basic';
import { AgmCoreModule } from '@agm/core';
//import { Ng4FilesModule } from './ng4-files';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { DestinationService } from './destination.service';
import { DestinationComponent } from './destination/destination.component';

import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import {SocialLoginModule,AuthServiceConfig,FacebookLoginProvider,GoogleLoginProvider} from "angular5-social-login";




// app routes will hold all the routes and the array will be of javascript object.

import {UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { AttractionComponent } from './attraction/attraction.component';
//import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { WorldsBestComponent } from './worlds-best/worlds-best.component';
// app routes will hold all the routes and the array will be of javascript object.


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1726553447414314")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("353435284490-u6e340tln57tvjet0vnuo3i2749pe0je.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    HeaderComponent,
    DestinationComponent,
    CreateUserComponent,
    AttractionComponent,
    WorldsBestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    SocialLoginModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZ5z9OlyDgtkYg_hMLMfCZDuru51cIgQ4'
    })
  ],

  providers: [DestinationService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }

