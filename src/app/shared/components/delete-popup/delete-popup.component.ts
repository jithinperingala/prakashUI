import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { OutputType } from '@angular/core/src/view';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() showPopup

  @Output() OnDelete = new EventEmitter<boolean>();
  @Output() Onclose = new EventEmitter<boolean>();
  @ViewChild('deleteModal') public autoShownModal: ModalDirective;

  ngOnInit() {
  
  }
  ngOnChanges() {
    console.log(this.showPopup)
    if (this.showPopup) {
      this.autoShownModal.show()
    }
    else{
      this.autoShownModal.hide()
    }



  }
  closePopup() {
    this.Onclose.emit(true)
  }

  toDelete() {
    this.OnDelete.emit(true)
  }
}
