import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
  utilisateur={}as Utilisateur;

}
