import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmprestimoDTO } from '../Models/EmprestimoDTO';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private url = "https://localhost:7079/Emprestimo";

  constructor(
    private http : HttpClient
  ) { }

  CriarEmprestimo(id : number){
    return this.http.post(`${this.url}/CriarEmprestimo/${id}`, null);
  }

  BuscarHistoricoEmprestimo(){
    return this.http.get<EmprestimoDTO[]>(`${this.url}/BuscarHistoricoEmprestimo`);
  }

  DevolverLivro(id : number){
    return this.http.patch(`${this.url}/DevolverLivro/${id}`, null);
  }

  VerificarLivro(){
    return this.http.patch(`${this.url}/VerificarEmprestimo`, null);
  }
}
