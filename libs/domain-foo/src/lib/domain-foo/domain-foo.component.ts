import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-domain-foo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './domain-foo.component.html',
  styleUrl: './domain-foo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainFooComponent {}
