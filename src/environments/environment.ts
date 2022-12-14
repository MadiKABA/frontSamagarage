// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostProfile:"http://127.0.0.1:8000/api/profiles",
  hostUtilisateur:"http://127.0.0.1:8000/api/utilisateurs",
  hostZones:"http://127.0.0.1:8000/api/zones",
  hostGarages:"http://127.0.0.1:8000/api/garages",
  hostServices:"http://127.0.0.1:8000/api/services",
  hostNotes:"http://127.0.0.1:8000/api/notes",
  hostAnnonce:"http://127.0.0.1:8000/api/annonces",
  hostTypeAnnonce:"http://127.0.0.1:8000/api/typeAnnonces",
  mapbox: {
    accessToken: 'pk.eyJ1Ijoia2lha2FiYSIsImEiOiJjbDdybWlkdjQwMjVnM29wMXdrcXZlYnd0In0.kiKMgfXI1BxO-hIjwFFH_Q',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
