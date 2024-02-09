import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select Pipe
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap: { [key: string]: string } = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural Pipe
  public clients: string[] = ['Daniel', 'Melissa', 'Juan', 'Pedro', 'Ana'];
  public clientsMap: { [key: string]: string } = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    other: 'hay # clientes esperando',
  };

  deleteClients(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person: { [key: string]: string } = {
    name: 'Daniel',
    age: '31',
    address: 'Calle 123',
  };
}
