import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {ListboxDemo} from './listboxdemo';
import {ListboxDemoRoutingModule} from './listboxdemo-routing.module';
import { ListboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ListboxDemoRoutingModule,
        ListboxModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ListboxDemo
	]
})
export class ListboxDemoModule {}
