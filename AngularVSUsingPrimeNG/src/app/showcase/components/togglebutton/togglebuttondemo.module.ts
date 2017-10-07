import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {ToggleButtonDemo} from './togglebuttondemo';
import { ToggleButtonDemoRoutingModule } from './togglebuttondemo-routing.module';
import { ToggleButtonModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ToggleButtonDemoRoutingModule,
        ToggleButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ToggleButtonDemo
	]
})
export class ToggleButtonDemoModule {}
