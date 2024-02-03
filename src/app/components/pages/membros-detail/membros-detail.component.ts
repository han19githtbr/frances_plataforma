import { Component, OnInit } from '@angular/core';
import { Membro } from 'src/app/model/membro.model';
import { MembrosService } from 'src/app/services/membros.service';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-membros-detail',
  templateUrl: './membros-detail.component.html',
  styleUrls: ['./membros-detail.component.css']
})
export class MembrosDetailComponent implements OnInit {

  membro: Membro

  constructor(
    private membroService: MembrosService,
    private route: ActivatedRoute
  ) {
    this.membroService.membroById(this.route.snapshot.params['id']).subscribe(
      membro => {
        this.membro = membro;
      }
    )
  }

  ngOnInit() {

  }
}
