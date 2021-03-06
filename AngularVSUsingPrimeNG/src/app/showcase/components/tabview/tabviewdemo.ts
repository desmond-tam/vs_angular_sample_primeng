import {Component} from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: './tabviewdemo.html'
})
export class TabViewDemo {

    msgs: Message[];
    
    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}