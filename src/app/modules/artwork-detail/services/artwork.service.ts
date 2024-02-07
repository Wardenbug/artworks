import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getArtworkById(id: string) {
    return this.http.get(`${this.baseUrl}/artworks/${id}`);
  }
}
