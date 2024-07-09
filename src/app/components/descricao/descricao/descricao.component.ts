import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../Models/livro';
import { LivroService } from '../../../Service/livro.service';
import { ConfirmacaoComponent } from "../../confirmacao/confirmacao/confirmacao.component";
import { EmprestimoService } from '../../../Service/emprestimo.service';

@Component({
    selector: 'app-descricao',
    standalone: true,
    templateUrl: './descricao.component.html',
    styleUrl: './descricao.component.scss',
    imports: [CommonModule, ConfirmacaoComponent]
})
export class DescricaoComponent implements OnInit {
  livro : Livro | undefined

  showModal: boolean = false;

  constructor(
    private route : ActivatedRoute,
    private livroService : LivroService,
    private emprestimoService : EmprestimoService
  ) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const livroId = param.get('id');
      if (livroId) {
        this.livroService.buscarLivroPorId(livroId).subscribe(livro => {
          this.livro = livro
        })
      }
    });

    this.emprestimoService.VerificarLivro();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  CriarEmprestimo(){
    if (this.livro) {
      this.emprestimoService.CriarEmprestimo(this.livro.id).subscribe(
        () => {
          console.log("Emprestimo criado com sucesso!");
        },
        error => {
          console.log("Erro ao criar o emprestimo", error);
        }
      );
    } else {
      console.error("Livro não está definido. Não é possível criar o empréstimo.");
    }
  }
}
