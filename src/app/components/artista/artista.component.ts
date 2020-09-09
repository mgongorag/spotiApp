import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from 'src/app/services/spotify.service'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params =>{

      this.getArtista( params['id'] );
      this.getTopTracks(params['id']);
    })
    
  }

  getArtista(id:string){
    this.loading = true;
    return this.spotify.getArtista( id )
            .subscribe(data =>{
              console.log(data);
              this.artista = data;
              this.loading = false;
            })
  }

  getTopTracks(id:string){
    this.spotify.getToTracks(id)
      .subscribe(tracks=>{
        this.topTracks = tracks;
        console.log(tracks);
      })
  }
  

}
