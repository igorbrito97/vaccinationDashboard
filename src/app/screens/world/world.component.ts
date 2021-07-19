import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { IArray } from 'src/app/_modals/data-modal';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  covidData: IArray[] = [];


  //histograma (?) gráfico de barra com x = data crescente qntd dias e y = quantidade -> da pra colocar um filtro por lugar com um dropdown
  //acumulativo, gráfico de área que cresce com quantidade -> filtro tbm
  //mapa mundi - com cor -> clicar aparece info &&/|| colocar card dia Fa ao lado
  //card com quantidade(s) -> somar tudo
  //paises com maior numero de vacinados && maior porcentagem vacinados
  //https://ourworldindata.org/covid-vaccinations
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.service.fetchGlobalData()
    .subscribe((data) => {
      Object.entries(data).map((key) => {
        this.covidData.push({
          code: key[0],
          data: key[1]
        })
      })
      console.log(this.covidData);

    })
  }

}
