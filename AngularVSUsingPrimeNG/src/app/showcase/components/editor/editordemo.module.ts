import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {EditorDemo} from './editordemo';
import {EditorDemoRoutingModule} from './editordemo-routing.module';
import {EditorModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		EditorDemoRoutingModule,
        EditorModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		EditorDemo
	]
})
export class EditorDemoModule {}
