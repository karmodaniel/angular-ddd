import { NgModule } from '@angular/core';
import { TelaInicialViewComponent } from './tela-inicial-view/tela-inicial-view.component';
import { SubprodutoRoutingModule } from './subproduto-routing.module';

@NgModule({
	declarations: [TelaInicialViewComponent],
	imports: [SubprodutoRoutingModule],
	providers: []
})
export class SubprodutoModule {}
