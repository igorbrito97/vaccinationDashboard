import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css']
})
export class BrazilComponent implements OnInit {
  itemsList: any[] = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.search();
  }

  //mapa
  //tabela
  //gráficos, decidir quais
  search() {
    this.service.fetchBrazilData()
    .subscribe((data) => {
      console.log(data);
      const list = data.split('\n');
      list.forEach(item => this.itemsList.push(item));
    })
  }

}
