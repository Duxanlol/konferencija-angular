import {Injectable} from '@angular/core';
import {ExternalConfigurationHandlerInterface, ExternalConfiguration} from '@lagoshny/ngx-hal-client';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ExternalConfigurationService implements ExternalConfigurationHandlerInterface {

  getProxyUri(): string {
    return 'http://localhost:3000/';
  }

  getRootUri(): string {
    return 'http://localhost:4200/';
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(private http: HttpClient) {
  }

  deserialize() {
        throw new Error('Method not implemented.');
    }
    serialize() {
        throw new Error('Method not implemented.');
    }

  getExternalConfiguration(): ExternalConfiguration {
    // @ts-ignore
    return null;
  }

  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {
  }
}

export class ExternalConfigurationServiceService {
}
