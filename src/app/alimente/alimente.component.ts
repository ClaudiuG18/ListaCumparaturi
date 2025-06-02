import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { cdkMigrations } from '@angular/cdk/schematics';

@Component({
  selector: 'app-alimente',
  imports: [CdkDrag],
  templateUrl: './alimente.component.html',
  styleUrl: './alimente.component.css'
})
export class AlimenteComponent {

}
