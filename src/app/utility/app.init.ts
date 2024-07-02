import {KeycloakService} from 'keycloak-angular'
import { EnvService } from '../services/env.service';


export function initializeKeycloak (keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',
        realm: 'esprit',
        clientId: 'erp'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25
      },
      loadUserProfileAtStartUp: true,
      enableBearerInterceptor: true,
        bearerPrefix: 'Bearer',
        bearerExcludedUrls: [
            '/assets',
            '/clients/public']
    });
}
