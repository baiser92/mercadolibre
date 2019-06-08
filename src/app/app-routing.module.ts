
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ResultComponent } from './result/result/result.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details/details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'items', component: ResultComponent },
  {path:'items/:id', component: DetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
