import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from './../../shared/lib/http';

@Component({
  selector: 'page-detail',
  templateUrl: './detail.component.html',
})
export class PageDetailComponent {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  filmId: number = 0;
  film: any = null;

  constructor(private route: ActivatedRoute) {
    this.filmId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDetail();
  }

  async getDetail() {
    try {
      const res = await axios.get(`movie/${this.filmId}`);
      this.film = res.data;
    } catch (error) {
      alert('Erro ao obter detalhes do filme');
    }
  }
}
