import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './dadosDaUF.component.html',
  styleUrls: ['./app.component.css']
})
export class dadosDaUFComponent implements OnInit {
  title = 'app';
  ufs : UF[];
  uf : UF;
  media: number;
  dados: Dados[];
  dados_da_samu : Dados[];
  id = 35;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
      this.ufs = this.ufService.getAll();
      this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
      this.uf = this.ufService.getPorID(this.id);
      this.dados = this.samuService.buscarSamu(this.id)
      this.media = this.samuService.calcularMedia(this.id);
      this.dados = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
            }
}
