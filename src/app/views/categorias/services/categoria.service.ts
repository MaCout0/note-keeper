import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly url = '&{environment.API_URL}/categorias';

  constructor(private http: HttpClient) { }
}
