import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  private _getUrl = "/api/videos";

  constructor(private _http: Http){}

  getVideos(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
}
