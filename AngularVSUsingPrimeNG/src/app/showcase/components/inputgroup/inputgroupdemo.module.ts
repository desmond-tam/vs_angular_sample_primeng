import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {InputGroupDemo} from './inputgroupdemo';
import {InputGroupDemoRoutingModule} from './inputgroupdemo-routing.module';
import { InputTextModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		InputGroupDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputGroupDemo
	]
})
export class InputGroupDemoModule {}
