import { Pagination } from './pagination';
import { ArtworkItem } from './artwork-item';

export interface ArtworkResponse {
  pagination: Pagination;
  data: ArtworkItem[];
}
