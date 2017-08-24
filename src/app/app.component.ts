import { Component } from '@angular/core';

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
}
