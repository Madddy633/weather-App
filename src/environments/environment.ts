// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  weatherapiurl:'https://community-open-weather-map.p.rapidapi.com/weather',
  weatherapidailyurl:'https://community-open-weather-map.p.rapidapi.com/forecast',
  XRapidAPIKeyheader :'X-RapidAPI-Key',
  XRapidAPIKeyvalue:'49f7a4936bmsh89e5b0c0beef7c5p1390fcjsn45f68b6f207a',
  
  XRapidAPIHostheader:'X-RapidAPI-Host',
  XRapidAPIHostvalue:'community-open-weather-map.p.rapidapi.com'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
