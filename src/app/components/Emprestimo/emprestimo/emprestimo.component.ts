import { Component, OnInit } from '@angular/core';
import { EmprestimoDTO } from '../../../Models/EmprestimoDTO';
import { EmprestimoService } from '../../../Service/emprestimo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emprestimo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emprestimo.component.html',
  styleUrl: './emprestimo.component.scss'
})
export class EmprestimoComponent implements OnInit{

  emprestimoDTO : EmprestimoDTO[] | undefined
  status : string | undefined

  constructor (private emprestimoServico : EmprestimoService) {}

  ngOnInit(): void {
    this.emprestimoServico.BuscarHistoricoEmprestimo()
      .subscribe(emprestimo => {
        this.emprestimoDTO = emprestimo

        emprestimo.forEach(emprestimo => {
          if(emprestimo.status === 0) {
            status = "Emprestado"
          } else if (emprestimo.status === 1) {
            status = "Devolvido"
          } else {
            status = "Atrasado"
          }
        })
      })
  }

  DevolverLivro(emprestimoId : number){
    this.emprestimoServico.DevolverLivro(emprestimoId)
      .subscribe(
        () => {
          console.log("Livro devolvido com sucesso!");
        },
        error => {
          console.log("Erro ao devolver o livro", error);
        }
      )
  }
}
