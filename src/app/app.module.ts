import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { RightMenuComponent } from './layout/header/top-nav/right-menu/right-menu.component';
import { LeftMenuComponent } from './layout/header/top-nav/left-menu/left-menu.component';
import { LoggedInComponent } from './layout/header/top-nav/right-menu/logged-in/logged-in.component';
import { LoginComponent } from './layout/header/top-nav/right-menu/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    RightMenuComponent,
    LeftMenuComponent,
    LoggedInComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
