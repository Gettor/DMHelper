import { Injectable, Inject } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

//declare var require: any;
//var http = require('http');
//var request = require('request');

export class Segment {
    _id: number;
    xPos: string;
    yPos: string;
}

@Injectable()
export class GameService {

  private hostUrl : string;
  private actionUrl : string;
  private headers : HttpHeaders;

  constructor(private http: HttpClient, @Inject('API_ENDPOINT') private apiEndpoint : string, @Inject('API_HOST') private apiHost : string) {
    this.hostUrl = apiHost;
    this.actionUrl = apiEndpoint + '/segments';

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

    public getSegments() : Observable<Segment[]> {
        return this.http.get(this.hostUrl + this.actionUrl + "/get")
            .map(data => <Segment[]>(data));
        //return this.http.get(this.hostUrl + this.actionUrl + "/get")
            //.map((response : Response) => (<Segment[]>response.json()));
        //var options = { host : this.hostUrl, path: this.actionUrl + '/get', protocol: 'http' };
        //let callback = function(response) {
            //response.setEncoding('utf8');
            //var str = "";
            //response.on('data', function (chunk) {
                //console.log("Got chunk: ", chunk);
                //str +=chunk;
            //});
            //response.on('end', function(){
                //var jsonResponse = JSON.parse(str);
                //console.log("End: ", jsonResponse);
            //});
        //};
        //http.request(options, callback).end();
        //this.request(this.actionUrl + '/get', function (err, res, body) {
            //console.log("err: ", err);
            //console.log("status code: ", res && res.statusCode);
            //console.log("body: ", body);
        //});
        //return [{_id: 5, xPos: "15", yPos: "32"}];
    }

}
