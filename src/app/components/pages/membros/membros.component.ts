import { Component, OnInit } from '@angular/core';
import { Membro } from 'src/app/model/membro.model';
import { MembrosService } from 'src/app/services/membros.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {

  membros: Membro[] = []

  constructor(private membroService: MembrosService) {
    this.membroService.membros().subscribe(
      membros => {
        this.membros = membros;
      }
    )
  }

  ngOnInit() {

  }

}
