import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleriaDemo} from './galleriademo';
import {GalleriaDemoRoutingModule} from './galleriademo-routing.module';
import {GalleriaModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		GalleriaDemoRoutingModule,
        GalleriaModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GalleriaDemo
	]
})
export class GalleriaDemoModule {}
