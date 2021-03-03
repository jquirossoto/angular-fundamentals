import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  @Input("modal-trigger") modalId?: string;

  private element?: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = ref.nativeElement;
  }

  ngOnInit(): void {
    this.element?.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    })
  }

}
