import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonInput, IonToolbar, IonHeader, IonNav, IonTitle, IonContent, IonButtons, 
  IonButton, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modaladdtask',
  templateUrl: './modaladdtask.component.html',
  styleUrls: ['./modaladdtask.component.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonToolbar,
    IonHeader,
    IonNav,
    IonTitle,
    IonContent,
    IonIcon,
    IonButtons,
    IonButton,
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    FormsModule
  ],
})
export class ModaladdtaskComponent implements OnInit {
  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
  ngOnInit() {}
}


