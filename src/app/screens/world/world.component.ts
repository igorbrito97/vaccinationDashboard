import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  covidData: Object = {};

  //tabela inicial com todos os paises:
  //ver de recuperar população
  //mapa mundi
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.service.fetchGlobalData()
    .subscribe((data) => {
      this.covidData = data;
      console.log(data);
    })
  }

}
