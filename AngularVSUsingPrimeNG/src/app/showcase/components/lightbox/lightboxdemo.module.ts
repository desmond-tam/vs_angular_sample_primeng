import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightboxDemo} from './lightboxdemo';
import {LightboxDemoRoutingModule} from './lightboxdemo-routing.module';
import { LightboxModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		LightboxDemoRoutingModule,
        LightboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		LightboxDemo
	]
})
export class LightboxDemoModule {}
