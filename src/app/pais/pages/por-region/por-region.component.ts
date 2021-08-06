import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: PaisResponse[] = [];
  regionActiva:string = '';
  hayError:boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  activarRegion(region:string){
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
    .subscribe((resp) => {
       console.log(resp)
       this.paises = resp;

    }, (err) =>{
     this.hayError = true;
     this.paises = [];
    })
  }







}
