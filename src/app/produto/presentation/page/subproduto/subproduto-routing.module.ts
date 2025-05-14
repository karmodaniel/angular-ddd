import { RouterModule, Routes } from '@angular/router';
import { TelaInicialViewComponent } from './tela-inicial-view/tela-inicial-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{ path: '', component: TelaInicialViewComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SubprodutoRoutingModule {}
