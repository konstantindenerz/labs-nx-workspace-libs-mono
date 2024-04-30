import {HttpClient} from '@angular/common/http';
import {inject, Injectable, NgModule} from '@angular/core';

export interface Contract {
  contractId: string;
}

@Injectable({providedIn: 'root'})
export class ContractService {
  private readonly httpClient = inject(HttpClient);
  //TODO inject from DI (from environment)
  config = {
    baseApiUrl: 'http://myspecialapp/api/',
  };

  loadAll() {
    return this.httpClient.get<Contract[]>(`${this.config.baseApiUrl}contracts`);
  }
}


