import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  {
    path:'',
    loadChildren: () =>  import('../app/auth/auth.module').then(mod=> mod.AuthModule)
  },
  {
    path:'inbox',
    canLoad: [ AuthGuard ], // Added the lazy load module guard
    loadChildren: () =>  import('../app/inbox/inbox.module').then(mod=> mod.InboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
