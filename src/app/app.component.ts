import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: any[] = [
    {
      nome: 'Brasil',
      path: '/'
    },
    {
      nome: 'Mundo',
      path: '/world'
    },
  ]
  title = 'Dashboard de Vacinação da Covid-19';
  activeTab = this.routes[0];
  background = '#87eaff';
}
