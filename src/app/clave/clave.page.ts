import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.page.html',
  styleUrls: ['./clave.page.scss'],
})
export class ClavePage implements OnInit {

  password1: string;
  password2: string;

  constructor(private toastController: ToastController) {
    this.password1 = "";
    this.password2 = "";
  }

  async cambiar_contrasenia(){
    if(this.password1 == this.password2 && this.password2 == this.password1){
      const mensaje = await this.toastController.create({
        message: "Contraseña actualizada con éxito!",
        duration: 5000,
        position: "top",
        color: "success"
      });
      await mensaje.present();
      return;
    }else{
      const mensaje = await this.toastController.create({
        message: "Constraseñas no coinciden!",
        duration: 5000,
        position: "top",
        color: "danger"
      });
      await mensaje.present();
      return;
    }
  }

  ngOnInit() {
  }

}
