import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosApiService {
  private apiEndpoint = 'http://jsonplaceholder.typicode.com/photos'
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return this.http.get(this.apiEndpoint)
  }
}
