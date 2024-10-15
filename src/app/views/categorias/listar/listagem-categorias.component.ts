import { Component, OnInit } from '@angular/core';
import { ListagemCategoria } from '../models/categorias.models';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoriaService } from '../services/categoria.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listagem-categorias',
  standalone: true,
  imports: [NgForOf, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './listagem-categorias.component.html',
  styleUrl: './listagem-categorias.component.scss'
})
export class ListagemCategoriasComponent implements OnInit {

  categorias$?: Observable<ListagemCategoria[]>;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.selecionarTodos();
  }
}
