import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDemo} from './menudemo';
import {MenuDemoRoutingModule} from './menudemo-routing.module';
import { MenuModule } from 'primeng/primeng'
import {ButtonModule} from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		MenuDemoRoutingModule,
        MenuModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MenuDemo
	]
})
export class MenuDemoModule {}
