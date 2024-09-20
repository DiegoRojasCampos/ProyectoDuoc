import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user : string;
  password : string;

  constructor(private toastController: ToastController) {
    this.user = "" // Usuario1
    this.password = "" // MiClav3
  }

  async iniciar_sesion(){
    if (this.user == "Usuario1" && this.password == "MiClav3"){
      const mensaje = await this.toastController.create({
        message: "Inicio de sesión exitoso!",
        duration: 5000,
        position: "top",
        color: "success"
      });
      await mensaje.present();
      return;
    }else{
      const mensaje = await this.toastController.create({
        message: "Usuario y contraseña inválidos!",
        duration: 5000,
        position: "top",
        color: "danger"
      });
      await mensaje.present();
      return;
    }
  }

  async enviar_correo(){
    const mensaje = await this.toastController.create({
      message: "Se ha enviado un correo para recuperar la contraseña!",
      duration: 5000,
      position: "top",
      color: "success"
    });
    await mensaje.present();
    return;
  }

  ngOnInit() {
  }

}
