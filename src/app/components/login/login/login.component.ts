import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioLoginRequest } from '../../../Models/usuarioLoginRequest';
import { UsuarioService } from '../../Auth/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form : FormGroup
  usuarioLogin : UsuarioLoginRequest | undefined

  constructor(
    private formBuilder : FormBuilder,
    private service : UsuarioService,
    private router : Router
  ) {
    this.form = this.formBuilder.group({
      name : new FormControl(''),
      password : new FormControl('')
    });
  }

  async Submit() {
    this.usuarioLogin = {
      name : this.form.value?.name!,
      password : this.form.value?.password
    }

    try {
      await this.service.Login(this.usuarioLogin);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro no Login:', error);
    }
  }
}
