import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {SliderDemo} from './sliderdemo';
import { SliderDemoRoutingModule } from './sliderdemo-routing.module';
import { SliderModule, InputTextModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		SliderDemoRoutingModule,
        SliderModule,
        InputTextModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SliderDemo
	]
})
export class SliderDemoModule {}
