import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadDemo} from './fileuploaddemo';
import {FileUploadDemoRoutingModule} from './fileuploaddemo-routing.module';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		FileUploadDemoRoutingModule,
        FileUploadModule,
        GrowlModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		FileUploadDemo
	]
})
export class FileUploadDemoModule {}
