import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {InputMaskDemo} from './inputmaskdemo';
import {InputMaskDemoRoutingModule} from './inputmaskdemo-routing.module';
import { InputMaskModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		InputMaskDemoRoutingModule,
        InputMaskModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputMaskDemo
	]
})
export class InputMaskDemoModule {}
