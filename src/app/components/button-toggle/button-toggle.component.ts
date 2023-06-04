import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule],
})
export class ButtonToggleComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
