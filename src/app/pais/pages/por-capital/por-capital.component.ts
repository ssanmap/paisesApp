import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino:string = '';
  hayError:boolean = false;
  paises: PaisResponse[] = [];

  buscar(termino:string):void{
    this.hayError = false;
   this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe((resp) => {
       console.log(resp)
       this.paises = resp;

    }, (err) =>{
     this.hayError = true;
     this.paises = [];
    })
  }


}
