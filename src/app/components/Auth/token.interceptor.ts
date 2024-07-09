import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UsuarioService } from './usuario.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //let httpClient = inject(HttpClient)
  const token = localStorage.getItem('token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  if(token){
    let decodedToken = jwtDecode(token);
    const isExpired =
      decodedToken && decodedToken.exp
        ? decodedToken.exp < Date.now() / 1000
        : false

    if (isExpired) {
      console.log("token expired!");
    } else {
      console.log("token not expired");
    }
  }
  return next(req);
};
