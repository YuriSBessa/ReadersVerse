import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsuarioCadastroRequest } from '../../../Models/UsuarioCadastroRequest';
import { UsuarioService } from '../../Auth/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, 
            RouterLinkActive, 
            RouterOutlet,
            ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form: FormGroup
  usuarioCadastro : UsuarioCadastroRequest | undefined

  constructor(
    private formBuilder: FormBuilder,
    private service : UsuarioService,
    private router : Router
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  async Submit() {
    this.usuarioCadastro = {
      name : this.form.value?.name!,
      password : this.form.value?.password!,
      confirmPassword : this.form.value?.confirmPassword!
    };

    try {
      await this.service.CadastrarUsuario(this.usuarioCadastro);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  }
}
