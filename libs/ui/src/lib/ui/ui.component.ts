import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fooUtils, UserService} from '@labs/core';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {
  foo = fooUtils();
  public readonly userService = inject(UserService);
}
