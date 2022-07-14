import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['ini', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['HALO', Validators.required],
      ['AGE', Validators.required]
    ], Validators.required)
  });

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control('pruebas', Validators.required)


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return }
    
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    
    this.nuevoFavorito.reset();
    console.log(this.nuevoFavorito.value)

  }
  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }

}
