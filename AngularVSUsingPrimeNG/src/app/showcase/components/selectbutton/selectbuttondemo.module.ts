import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {SelectButtonDemo} from './selectbuttondemo';
import { SelectButtonDemoRoutingModule } from './selectbuttondemo-routing.module';
import { SelectButtonModule, ButtonModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		SelectButtonDemoRoutingModule,
        FormsModule,
        SelectButtonModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SelectButtonDemo
	]
})
export class SelectButtonDemoModule {}
