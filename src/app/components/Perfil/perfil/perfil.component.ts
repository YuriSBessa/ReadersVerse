import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Auth/usuario.service';
import { Router } from '@angular/router';
import { CarteiraDTO } from '../../../Models/CarteiraDTO';
import { CarteiraService } from '../../../Service/carteira.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {

  carteiraDTO : CarteiraDTO | undefined

  constructor (
    private usuarioService : UsuarioService,
    private carteiraService : CarteiraService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.carteiraService.BuscarCarteira()
    .subscribe(carteira => {
      this.carteiraDTO = carteira
      console.log(carteira)
    })
  }

  LogOut() {
    this.usuarioService.Logout();
    this.router.navigate(["/login"]);
  }
}
