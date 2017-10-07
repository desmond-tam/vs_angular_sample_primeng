import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {ColorPickerDemo} from './colorpickerdemo';
import {ColorPickerDemoRoutingModule} from './colorpickerdemo-routing.module';
import {ColorPickerModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ColorPickerDemoRoutingModule,
        ColorPickerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ColorPickerDemo
	]
})
export class ColorPickerDemoModule {}
