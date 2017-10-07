import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';
import {ValidationDemo} from './validationdemo';
import { ValidationDemoRoutingModule } from './validationdemo-routing.module';
import {
    GrowlModule, PanelModule, DropdownModule, InputTextModule, InputTextareaModule,
    ButtonModule, TabViewModule, CodeHighlighterModule
} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		ValidationDemoRoutingModule,
        GrowlModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ValidationDemo
	]
})
export class ValidationDemoModule {}
