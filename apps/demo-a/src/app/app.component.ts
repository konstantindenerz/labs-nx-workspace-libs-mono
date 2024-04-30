import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DomainFooComponent} from '@labs/domain-foo';
import {Contract, ContractService} from '@labs/foo-api';
import {AuthService} from '@labs/security';
import {UiComponent} from '@labs/ui';
import {EMPTY, Observable} from 'rxjs';
import {NxWelcomeComponent} from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent, DomainFooComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly contractService = inject(ContractService);
  private contracts$: Observable<Contract[]> = EMPTY;

  ngOnInit() {
    this.contracts$ = this.contractService.loadAll();
  }
}
