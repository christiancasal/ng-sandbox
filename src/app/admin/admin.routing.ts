import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CryptoComponent } from 'app/crypto/crypto.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [{
			path: '',
			children: [
				{ path: 'crypto', component: CryptoComponent },

			]
		}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})

export class AdminRoutingModule { }
