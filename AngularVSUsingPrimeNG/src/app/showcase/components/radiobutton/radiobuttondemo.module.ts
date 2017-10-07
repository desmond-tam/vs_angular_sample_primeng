import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {RadioButtonDemo} from './radiobuttondemo';
import {RadioButtonDemoRoutingModule} from './radiobuttondemo-routing.module';
import { RadioButtonModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		RadioButtonDemoRoutingModule,
        RadioButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RadioButtonDemo
	]
})
export class RadioButtonDemoModule {}
