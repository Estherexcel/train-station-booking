import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.css'
})
export class StationsComponent {
  constructor (private http:HttpClient){

  }
}
