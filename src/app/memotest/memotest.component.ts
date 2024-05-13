import { Component } from '@angular/core';
import { BoardComponent } from "./board/board.component";

@Component({
    selector: 'app-memotest',
    standalone: true,
    templateUrl: './memotest.component.html',
    styleUrl: './memotest.component.css',
    imports: [BoardComponent]
})
export class MemotestComponent {

}
