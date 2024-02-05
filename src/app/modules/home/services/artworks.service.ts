import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArtworksParameters } from '../interfaces/artworks-parameters';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getArtworks(params?: ArtworksParameters) {
    const httpParams = new HttpParams()
      .set('page', params?.page || 1)
      .set('limit', params?.limit || 16);

    return this.http.get(`${this.baseUrl}/artworks`, { params: httpParams });
  }

  public getArtworksBySearch(params: any) {
    return this.http.get(`${this.baseUrl}/artworks/search`, {
      params: {
        ...params,
        fields: 'image_id,title,artist_title',
      },
    });
  }

  public getArtworkById(id: string) {
    return this.http.get(`${this.baseUrl}/artworks/${id}`);
  }
}
