import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'produto',
		loadChildren: () => import('./page/subproduto/subproduto.module').then(m => m.SubprodutoModule)
	},
	{ path: '**', redirectTo: 'produto' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProdutoRoutingModule {}
