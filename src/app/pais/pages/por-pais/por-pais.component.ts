import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino:string = '';
  hayError:boolean = false;
  paises: PaisResponse[] = [];

  buscar(termino:string):void{
    this.hayError = false;
   this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe((resp) => {
       console.log(resp)
       this.paises = resp;

    }, (err) =>{
     this.hayError = true;
     this.paises = [];
    })
  }
  sugerencias(termino:string){
    this.hayError = false;

  }

}
