import { Injectable, numberAttribute } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Livro } from '../Models/livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = "https://localhost:7079/Livro";

  constructor(
    private http: HttpClient
  ) { }

  buscarLivrosPorFiltro(buscar: string, filtro: number): Observable<Livro[]>{
    let params = new HttpParams()
      .set('buscar', buscar)
      .set('filtro', filtro);

    return this.http.get<Livro[]>(`${this.url}/buscarLivroPorFiltro`, { params });
  }

  buscarLivroPorId(id: string){
    return this.http.get<Livro>(`${this.url}/buscarLivroPorId/${id}`);
  }
}
