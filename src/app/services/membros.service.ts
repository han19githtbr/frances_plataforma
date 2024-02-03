import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Membro } from '../model/membro.model';
import { FACELIST_API } from '../app.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  constructor(private http: HttpClient){};

  membros(): Observable<Membro[]>{
    return this.http.get<Membro[]>(`${FACELIST_API}/membros`);
  }

  membroById(id: string | number): Observable<Membro>{
    return this.http.get<Membro>(`${FACELIST_API}/membros/`+id);
  }
}
