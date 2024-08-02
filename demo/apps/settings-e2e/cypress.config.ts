import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run settings:serve',
        production: 'nx run settings:serve:production',
      },
      ciWebServerCommand: 'nx run settings:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
