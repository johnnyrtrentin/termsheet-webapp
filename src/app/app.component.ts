import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DealTableComponent } from '@components';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DealTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TermSheet Sample';
}
