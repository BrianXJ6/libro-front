import { Component } from '@angular/core';
import axios from './../../shared/lib/http';

@Component({
  selector: 'page-list',
  templateUrl: './list.component.html',
})
export class PageListComponent {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  films: any = null;

  public constructor() {
    this.getFilmes();
  }

  async getFilmes() {
    try {
      const films = await axios.get('movie/upcoming');
      this.films = films.data.results;
    } catch (error) {
      alert('erro ao buscar lista de filmes');
    }
  }
}
