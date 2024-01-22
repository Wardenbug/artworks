import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface ArtworksParameters {
  ids?: string[];
  limit?: number;
  page?: number;
  fields?: string[];
}
@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getArtworkds(params?: ArtworksParameters) {
    const httpParams = new HttpParams()
    .set('page', params?.page || 1)
    .set('limit', params?.limit || 16);
    
    console.log(httpParams, httpParams.toString());
    return this.http.get(`${this.baseUrl}/artworks`, { params: httpParams });
  }
}
