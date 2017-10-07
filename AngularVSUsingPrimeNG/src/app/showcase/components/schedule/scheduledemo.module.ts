import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {ScheduleDemo} from './scheduledemo';
import { ScheduleDemoRoutingModule } from './scheduledemo-routing.module';
import {
    ScheduleModule, DialogModule, InputTextModule, CalendarModule,
    CheckboxModule, ButtonModule, TabViewModule, CodeHighlighterModule
} from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ScheduleDemoRoutingModule,
        ScheduleModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ScheduleDemo
	]
})
export class ScheduleDemoModule {}
