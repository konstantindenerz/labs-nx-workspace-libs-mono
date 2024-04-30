import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UiComponent} from '@labs/ui';

@Component({
  selector: 'lib-domain-foo',
  standalone: true,
  imports: [CommonModule, UiComponent],
  templateUrl: './domain-foo.component.html',
  styleUrl: './domain-foo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainFooComponent {
}
