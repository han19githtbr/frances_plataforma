import { Component, OnInit, Input } from '@angular/core';
import { Membro } from '../../../model/membro.model';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

  @Input() membro: Membro

  constructor() { }

  ngOnInit() {
  }

}
