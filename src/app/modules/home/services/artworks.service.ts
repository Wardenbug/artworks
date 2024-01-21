import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  getArtworkds() {
    return this.http.get("https://api.artic.edu/api/v1/artworks");
  }
}
