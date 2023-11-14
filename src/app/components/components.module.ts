import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
  HeaderComponent
  ], //para cualquier modulo lo pueda utiliza
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }





//carga perezosa lyboat
