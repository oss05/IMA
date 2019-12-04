import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// componentes
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
import { SearchComponent } from './components/search/search.component';

// resolves
import { PositionsAllResolve } from './resolves/all-positions.resolve';
import { RegulationsAllResolve } from './resolves/all-regulations.resolve';
import { LegalAllResolve } from './resolves/all-legal.resolve';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: AboutUsComponent },
  { path: 'directorio', component: DirectoryComponent },
  { path: 'marco-legal', component: LegalComponent , resolve: { archives: LegalAllResolve } },
  { path: 'reglamentos-arbitrales', component: RulesComponent , resolve: { archives: RegulationsAllResolve } },
  { path: 'publicaciones', component: PublicationsComponent },
  { path: 'posturas', component: PosturesComponent, resolve: { archives: PositionsAllResolve } },
  { path: 'videos', component: VideosComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'contacto', component: ContactUsComponent },
  { path: 'search/:search', component: SearchComponent },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule],
  exports: [RouterModule],
  providers: [PositionsAllResolve, RegulationsAllResolve, LegalAllResolve]
})
export class AppRoutingModule { }
