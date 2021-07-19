import { DataService } from './../../service/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css']
})
export class BrazilComponent implements OnInit {
  itemsList: any[] = [];

  constructor(private service: DataService) { }
   
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
    
    let text = [];  
    let files = $event.srcElement.files;
    
    let input = $event.target;  
    let reader = new FileReader();  
    console.log(input.files[0]);
    reader.readAsText(input.files[0]);  

    reader.onload = () => {  
      let csvData = reader.result;  
      let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
      console.log(csvData);
      console.log(csvRecordsArray);
      

      // let headersRow = this.getHeaderArray(csvRecordsArray);  

      // this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
    };  

    reader.onerror = function (err) {  
      console.log('error is occured while reading file!');  
      console.log(err);  
    };  
  }

  ngOnInit(): void {
    // this.search();
    // d3.csv('../home/iguinho/Documentos/brazilCovidData.csv').then(data => {
    //   console.log(data);
      
    // })
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
