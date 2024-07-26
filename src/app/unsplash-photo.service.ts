import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls:{
    regular : string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UnsplashPhotoService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',{
      headers : {
        Authorization : 'Client-ID ovrTfmBqAQL20TEGH-0ZJoSY4QLND9m3AIvFJELnWcs'
      }
    });
  }
  
}
