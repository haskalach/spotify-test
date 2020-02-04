// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authConfig: {
    client_id: '9fa85936651341258d18bf303bbebe6d',
    response_type: 'token',
    redirect_uri: 'http://localhost:4200/home',
    state: '',
    show_dialog: true,
  },
  apiUrl: 'https://accounts.spotify.com/'
};

