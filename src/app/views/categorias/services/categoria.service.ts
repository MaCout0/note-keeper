import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroCategoria, CategoriaCriada, ListagemCategoria } from '../models/categorias.models';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  private readonly url = `${environment.API_URL}/categorias`;

  constructor(private http: HttpClient) { }

  cadastrar(novaCategoria: CadastroCategoria): Observable<CategoriaCriada> {
    return this.http.post<CategoriaCriada>(this.url, novaCategoria);
  }

  selecionarTodos(): Observable<ListagemCategoria[]> {
    return this.http.get<ListagemCategoria[]>(this.url);
  }
}
