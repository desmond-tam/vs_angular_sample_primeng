import {Component} from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: './confirmdialogdemo.html',
    providers: [ConfirmationService]
})
export class ConfirmDialogDemo {
    
    msgs: Message[] = [];
    
    constructor(private confirmationService: ConfirmationService) {}

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
    
    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa-trash',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}