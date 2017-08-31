import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class Segment {
    id: number;
    xPos: string;
    yPos: string;
}

@Injectable()
export class GameService {

  private actionUrl : string;
  private headers : Headers;

  constructor(private authHttp : AuthHttp, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/segments';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

    public getSegments() : Observable<Segment[]> {
        return this.authHttp.get(this.actionUrl + '/get')
            .map((response : Response) => (<Segment[]>response.json()));
        //return [{id: 5, xPos: "15", yPos: "32"}];
    }
  //public getSegments() : Observable<Segment> {
    //return this.authHttp.get(this.actionUrl + '/get/')
      //.map((response : Response) => (<Segment>response.json()));
  //}

}
