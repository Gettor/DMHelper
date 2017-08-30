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
    {id: 8, xPos: "200px", yPos: "400px"},
    {id: 9, xPos: "300px", yPos: "300px"},
    {id: 10, xPos: "400px", yPos: "300px"},
    {id: 11, xPos: "500px", yPos: "300px"},
    {id: 12, xPos: "600px", yPos: "300px"},
];

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
