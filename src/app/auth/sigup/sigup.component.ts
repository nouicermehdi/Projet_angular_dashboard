import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent {
  utilisateur={}as Utilisateur;
}
