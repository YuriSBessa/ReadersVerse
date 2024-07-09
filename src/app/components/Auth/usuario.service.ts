import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioCadastroRequest } from '../../Models/UsuarioCadastroRequest';
import { UsuarioLoginRequest } from '../../Models/usuarioLoginRequest';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://localhost:7079";

  private isLoggedVar: boolean = false;
  private tokenKey = "token"

  constructor(
    private http: HttpClient
  ) { 

  }

  CadastrarUsuario(usuarioCadastro : UsuarioCadastroRequest): Promise<any> {
    const body = {
      Name: usuarioCadastro.name,
      Password: usuarioCadastro.password,
      ConfirmPassword: usuarioCadastro.confirmPassword
    }

    return this.http.post(`${this.url}/cadastro`, body).toPromise();
  }

  Login(usuarioLogin : UsuarioLoginRequest): Promise<any>{
    const body = {
      Name : usuarioLogin.name,
      Password : usuarioLogin.password
    }

    return this.http.post(`${this.url}/login`, body)
      .toPromise()
      .then((response: any) => {
        if (response && response.sucesso === true) {
          this.isLoggedVar = true;
          localStorage.setItem(this.tokenKey, response.token);
        } else {
          this.isLoggedVar = false;
        }
        return response;
      });
  }

  Logout(){
    this.isLoggedVar = false;
    return this.http.post(this.url + "/logout", null);
  }

  IsLogged() : boolean {
    return this.isLoggedVar;
  }

  getToken() : string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
