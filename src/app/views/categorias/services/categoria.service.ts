import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListagemCategoria } from '../models/categorias.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  private readonly url = '&{environment.API_URL}/categorias';

  constructor(private http: HttpClient) { }

  selecionarTodos(): Observable<ListagemCategoria[]> {
    return this.http.get<ListagemCategoria[]>(this.url);
  }
}
