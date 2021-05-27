import { Component, OnInit, Input } from '@angular/core';
import { Comentari } from '../models/comentari';

@Component({
  selector: 'app-comentari-display',
  templateUrl: './comentari-display.component.html',
  styleUrls: ['./comentari-display.component.css']
})
export class ComentariDisplayComponent implements OnInit {

  @Input() comm?: Comentari;

  @Input() req?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
