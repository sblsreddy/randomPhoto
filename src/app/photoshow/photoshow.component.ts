import { Component, OnInit } from '@angular/core';
import { UnsplashPhotoService } from '../unsplash-photo.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})

export class PhotoshowComponent implements OnInit {

  constructor(private photoservice : UnsplashPhotoService) { 
    this.photoservice.getPhoto().subscribe( (response)=>{
        console.log(response.urls.regular);
    });
  }

  ngOnInit(): void {
  }

}
