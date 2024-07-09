import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarteiraDTO } from '../Models/CarteiraDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  private url = "https://localhost:7079/Carteira";

  constructor(
    private http : HttpClient
  ) { }

  BuscarCarteira() : Observable<CarteiraDTO>{
    return this.http.get<CarteiraDTO>(`${this.url}/BuscarCarteira`);
  }
}
