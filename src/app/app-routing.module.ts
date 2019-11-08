import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DirectoryComponent} from './pages/directory/directory.component';
import { LegalComponent } from './pages/legal/legal.component';
import { RulesComponent } from './pages/rules/rules.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { PosturesComponent } from './pages/postures/postures.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: AboutUsComponent },
  { path: 'directorio', component: DirectoryComponent },
  { path: 'marco-legal', component: LegalComponent },
  { path: 'reglamentos-arbitrales', component: RulesComponent },
  { path: 'publicaciones', component: PublicationsComponent },
  { path: 'posturas', component: PosturesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'contacto', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
