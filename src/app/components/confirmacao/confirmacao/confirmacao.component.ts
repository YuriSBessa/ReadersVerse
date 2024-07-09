import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent {
  @Input() showModal: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}
