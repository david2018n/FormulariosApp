import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

miFormulario: FormGroup = this.fb.group({
genero: ['M', Validators.required],
notificaciones: [true ,Validators.required],
condiciones: [false, Validators.requiredTrue]
});
persona = {
  genero: 'F',
  notificaciones: true
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false})

      // this.miFormulario.get('condiciones')?.valueChanges.subscribe(value =>{
      //   console.log(value)
      // })

      this.miFormulario.valueChanges.subscribe(({condiciones, ...restodeArgumentos}) =>{
        // delete form.condiciones
        this.persona = restodeArgumentos
      })
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.notificaciones;
    console.log(formValue);
    this.persona=formValue;
  }

 
}
