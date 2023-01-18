import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Daredevil'];
  heroeBorrado: string = "";
  
  borrarHeroe(){
    console.log('Borrando...');
    //this.heroeBorrado = (this.heroes.splice(0, 1))[0]
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
