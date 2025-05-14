import { Routes } from '@angular/router';

export const DomainRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./produto/presentation/produto.module').then(m => m.ProdutoModule)
	}
];
