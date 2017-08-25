import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

export class Segment {
    id: number;
    xPos: string;
    yPos: string;
}

export class Pc {
    id: number;
    xPos: string;
    yPos: string;
}

const SEGMENTS: Segment[] = [
    {id: 1, xPos: "100px", yPos: "100px"},
    {id: 2, xPos: "100px", yPos: "200px"},
    {id: 3, xPos: "100px", yPos: "300px"},
    {id: 4, xPos: "100px", yPos: "400px"},
    {id: 5, xPos: "200px", yPos: "100px"},
    {id: 6, xPos: "200px", yPos: "200px"},
    {id: 7, xPos: "200px", yPos: "300px"},
    {id: 8, xPos: "200px", yPos: "400px"}
];

function move(x, y) {
    //console.log(div_pc.style.top);
    let div_pc = document.getElementById("pc_dot");
    let old_x = parseInt(div_pc.style.left);
    let old_y = parseInt(div_pc.style.top);
    div_pc.style.left = String(old_x + x) + "px";
    div_pc.style.top = String(old_y + y) + "px";
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'D2Dung';
    segments = SEGMENTS;
    pc: Pc = {
        id: 1,
        xPos: "133px",
        yPos: "333px"
    };


    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        console.log(event.key);
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
    }

}
