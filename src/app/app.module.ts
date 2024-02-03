import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MembroComponent } from './components/pages/membro/membro.component';
import { MembrosComponent } from './components/pages/membros/membros.component';
import { MembrosService } from './services/membros.service';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    MembroComponent,
    MembrosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MembrosService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
