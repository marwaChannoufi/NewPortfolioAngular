import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule 
  ],
   
   exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
