import { Component, OnInit } from '@angular/core';
import { UnsplashPhotoService } from '../unsplash-photo.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})

export class PhotoshowComponent implements OnInit {
  
  photoUrl: string | undefined;

  constructor(private photoservice : UnsplashPhotoService) { 
    this.fetchPhoto();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.fetchPhoto();
  }

  // Helper method used in onclick and constructor
  fetchPhoto(){
    this.photoservice.getPhoto().subscribe( (response)=>{
      this.photoUrl = response.urls.regular;
  });
  }

}
