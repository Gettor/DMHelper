import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Segment, GameService } from './game.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/concatAll';

//export class Segment {
    //id: number;
    //xPos: string;
    //yPos: string;
//}

export class Pc {
    id: number;
    xPos: string;
    yPos: string;
}

let SEGMENTS: Segment[];

let PC: Pc = {
    id: 1,
    xPos: "133px",
    yPos: "333px"
};

function move(x, y) {
    let div_pc = document.getElementById("pc_dot");y
    let new_x = parseInt(div_pc.style.left) + x;
    let new_y = parseInt(div_pc.style.top) + y;
    let movementPossible = false;
    for (let i = 0; i < SEGMENTS.length; i++)
    {
        const s = SEGMENTS[i];
        const minX = parseInt(s.xPos);
        const maxX = parseInt(s.xPos) + 100;
        const minY = parseInt(s.yPos);
        const maxY = parseInt(s.yPos) + 100;
        if (new_x > minX && new_x < maxX && new_y > minY && new_y < maxY) movementPossible = true;
    }
    if (movementPossible)
    {
        PC.xPos = String(new_x) + "px";
        PC.yPos = String(new_y) + "px";
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    title = 'D2Dung';
    segments = SEGMENTS;
    pc = PC;
    testSegments = new Array<Segment>();
    sub : Subscription;


    constructor(private route : ActivatedRoute, private router : Router, private gameService : GameService) {
    }

    ngOnInit() {
        //this.testSegments = this.getSegments();
        //console.log(this.testSegments);
        this.sub = this.route.params
          .map((params : any) => (this.getSegments()))
          .concatAll()
          .subscribe(seg => {
              this.segments = seg;
              SEGMENTS = seg;
        });
    }

    getSegments() : Observable<Segment[]> {
        return this.gameService.getSegments();
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        console.log(event);
        switch(event.key){
            case "a":
                move(-100, 0);
                break;
            case "s":
                move(0, 100);
                break;
            case "d":
                move(100, 0);
                break;
            case "w":
                move(0, -100);
                break;
            default:

        }
            //console.log(div_pc.style.left + " " + div_pc.style.top);
    }

}
