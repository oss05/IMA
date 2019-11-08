import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { LegalComponent } from './pages/legal/legal.component';
import { RulesComponent } from './pages/rules/rules.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { PosturesComponent } from './pages/postures/postures.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { PodcastModule } from './pages/podcast/podcast.module';
import { VideosModule } from './pages/videos/videos.module';
import { PosturesModule } from './pages/postures/postures.module';
import { PublicationsModule } from './pages/publications/publications.module';
import { RulesModule } from './pages/rules/rules.module';
import { LegalModule } from './pages/legal/legal.module';
import { DirectoryModule } from './pages/directory/directory.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { HomeModule } from './pages/home/home.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverModuleModule } from './pages/popover-module/popover-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DirectoryComponent,
    LegalComponent,
    RulesComponent,
    PublicationsComponent,
    PosturesComponent,
    VideosComponent,
    PodcastComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ContactUsModule,
    PodcastModule,
    VideosModule,
    PosturesModule,
    PublicationsModule,
    RulesModule,
    LegalModule,
    DirectoryModule,
    AboutUsModule,
    HomeModule,
    PopoverModule.forRoot(),
    PopoverModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
