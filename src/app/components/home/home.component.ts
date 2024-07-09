import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../Service/livro.service';
import { Livro } from '../../Models/livro';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,
             ReactiveFormsModule,
             RouterLink, 
             RouterLinkActive,
             RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  livros: Livro[] = []
  disponibilidade: string = "";

  form: FormGroup;

  filtrosDisponiveis =  [
    {id: 0, name: "Titulo"},
    {id: 1, name: "Autor"},
    {id: 2, name: "Gênero"},
    {id: 3, name: "Editora"},
  ];

  constructor (
    private formBuilder: FormBuilder,
    private _livroService: LivroService,
    ) {
    this.form = this.formBuilder.group({
      buscar: new FormControl(''),
      filtros: [''],
      disponibilidade : ['']
    });
  }

  ngOnInit() : void {}

  submit(){
    this._livroService.buscarLivrosPorFiltro(
      this.form.value?.buscar!, 
      this.form.value?.filtros!
      ).subscribe(livro => {
        this.livros = livro;

        console.log(this.livros)

        livro.forEach(livro => {
          livro.disponibilidade
            ? (this.disponibilidade = 'Disponivel')
            : (this.disponibilidade = 'Não disponivel');
        });
      },
      error => {
        console.error("Erro ao carregar livros");
      }
    );
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'URL_DA_IMAGEM_PADRÃO'; // URL da imagem padrão em caso de erro
  }
}
