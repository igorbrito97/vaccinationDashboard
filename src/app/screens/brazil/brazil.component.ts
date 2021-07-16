import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css']
})
export class BrazilComponent implements OnInit {
  page: number = 1;
  scrollId: string = '';
  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  //mapa
  //tabela
  //gráficos, decidir quais
  search() {
    this.service.fetchBrazilData(this.page,this.scrollId)
    .subscribe((data) => {
      console.log(data);
      this.page = this.page +1;
    })
    // this.service.fetchGlobalData()
    // .subscribe((data) => {
    //   console.log(data);
    // })
  }

}
