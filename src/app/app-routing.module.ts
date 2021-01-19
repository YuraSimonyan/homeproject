import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './main/post/post/post.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '' , component: MainComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'visit', component: VisitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
