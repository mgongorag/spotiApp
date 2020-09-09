import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  busqueda: boolean = false;
  constructor(private spotify: SpotifyService, private route: Router) { }

  buscar(termino: string) {
    if (termino) {
      this.loading = true;
      this.spotify.getArtistas(termino)
        .subscribe((data: any) => {
          this.artistas = data;

          this.loading = false;
          this.busqueda = true;
        })
    }
    else{
      this.loading = false;
    }
  }

  buscarArtista(artista: any){
    let idArtista = artista;
    this.route.navigate(['/artist', idArtista]);
  }
}
