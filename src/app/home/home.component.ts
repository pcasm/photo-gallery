import { Component, OnInit } from '@angular/core';
import { PhotosApiService } from '../services/photos-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!: Array<any>

  constructor(private photos: PhotosApiService) { }

  ngOnInit(): void {
    this.photos.getPhotos().subscribe((res => {
      this.data = res
    }))
  }
}
