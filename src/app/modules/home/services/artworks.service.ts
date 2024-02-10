import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArtworksParameters } from '../interfaces/artworks-parameters';
import { ArtworkResponse } from '../interfaces/artwork-response';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  public getArtworks(params?: ArtworksParameters) {
    const httpParams = new HttpParams()
      .set('page', params?.page || 1)
      .set('limit', params?.limit || 16)
      .set('fields', 'id,image_id,title,artist_title');

    return this.http.get<ArtworkResponse>(`${this.baseUrl}/artworks`, {
      params: httpParams,
    });
  }

  public getArtworksBySearch(params: any) {
    return this.http.get(`${this.baseUrl}/artworks/search`, {
      params: {
        ...params,
        fields: 'id,image_id,title,artist_title',
      },
    });
  }
}
