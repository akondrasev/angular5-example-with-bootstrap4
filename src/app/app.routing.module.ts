import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './home-view/home-view.component';
import { UsersViewComponent } from './users-view/users-view.component';

const routes: Routes = [
  	{
	    path: '',
	    component: HomeViewComponent
	},
	{
		path: 'users',
		component: UsersViewComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
