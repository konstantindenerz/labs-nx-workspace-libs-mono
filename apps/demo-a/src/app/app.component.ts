import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthService} from '@labs/security';
import {UiComponent} from '@labs/ui';
import {NxWelcomeComponent} from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly authService = inject(AuthService);
}
