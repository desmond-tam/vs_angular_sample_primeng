import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import { MessagesModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
