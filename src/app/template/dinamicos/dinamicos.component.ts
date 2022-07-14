import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego:string='';

  persona: Persona ={
nombre: 'Juan',
favoritos: [
  {id: 1, nombre: 'halo'},
  {id: 2, nombre: 'AOE'}
]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('posteado ')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const nuevoFavorito: Favorito={
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego=''
  }

}
