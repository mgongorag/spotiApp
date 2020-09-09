import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('servicio de spotify')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCze3PW_tXdB1BGg5FhuQQsL9oE8pxss1HLJ3NwwvmD-xRwRd6C65YFeAEwbA24lir_mgyySyygS8ubd8'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
  }

  getToTracks(idArtist: string){
    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`)
    .pipe(map(data=>data['tracks']))
  }
}
