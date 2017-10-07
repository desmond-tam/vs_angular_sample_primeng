import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {InputSwitchDemo} from './inputswitchdemo';
import {InputSwitchDemoRoutingModule} from './inputswitchdemo-routing.module';
import { InputSwitchModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		InputSwitchDemoRoutingModule,
        InputSwitchModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputSwitchDemo
	]
})
export class InputSwitchDemoModule {}
