import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interfaces/pais.interface';
import {tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: PaisResponse;

  constructor(private activatedRoute: ActivatedRoute,
               private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id)
      this.paisService.getPaisPorCodigo(id)
          .subscribe( pais => {
            this.pais = pais;
            tap (console.log)
          })
    })
  }

}
