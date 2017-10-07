import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordDemo} from './passworddemo';
import {PasswordDemoRoutingModule} from './passworddemo-routing.module';
import { PasswordModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		PasswordDemoRoutingModule,
        PasswordModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PasswordDemo
	]
})
export class PasswordDemoModule {}
