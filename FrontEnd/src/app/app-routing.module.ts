import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
 },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'add-job',
    loadChildren: () => import('./add-job/add-job.module').then( m => m.AddJobPageModule)
  },
  {
    path: 'job-details',
    loadChildren: () => import('./job-details/job-details.module').then( m => m.JobDetailsPageModule)
  },
  {
    path: 'my-posted-jobs',
    loadChildren: () => import('./my-posted-jobs/my-posted-jobs.module').then( m => m.MyPostedJobsPageModule)
  },
  {
    path: 'saved-jobs',
    loadChildren: () => import('./saved-jobs/saved-jobs.module').then( m => m.SavedJobsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'candidate-page',
    loadChildren: () => import('./candidate-page/candidate-page.module').then( m => m.CandidatePagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
