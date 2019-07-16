# Sample FHIR Application using Angular and SMART on FHIR Javascript Client Library

This is a sample SMART on FHIR application developed using Angular and the SMART on FHIR Javascript Client library. This can be used to analyze the client server interactions and capabilities.

## Features
1. UI rendered based on the Capability of the Server and the scopes the current user has in context.
2. Can view the Requests and Responses sent to the FHIR servers for analysis.
3. Can perform CRUD operations based on the capability of the server.
4. Can work against multiple SMART on FHIR servers using the same application.
5. Supports both Standalone Launch and EHR Launch sequences.

Angular is used only to structure the javascript code into various components and services. FHIR server interactions are done using the [SMART on FHIR Javascript Client library](https://github.com/smart-on-fhir/client-js)

## Live Demo https://chbase.github.io/smart-ng-fhir-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Setup

Pre-requisites
1. Node
2. npm
3. Angular CLI (npm install -g @angular/cli)

Clone the repository.

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### IIS Setup

App can be setup in Windows as an IIS site. Ensure that the site is pointed to the `/dist` folder and that the `URL Rewrite` module has been installed in IIS.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Adding a new SMART on FHIR Server
The server configuration for CHBase PPE is already provided in the sample app.

This sample application can be used to connect to any SMART on FHIR Server. 

The configuration details are specified in src/app/data/fhir-servers.ts

A sample configuration is shown below. Modify it and add it into the array. 

More information about each property can be found on the comments of the typescript interface src/app/models/fhir-server.ts

    {
        uniqueName: '[Unique name for the FHIR Server]',
        name: '[Display name for the FHIR Server]',
        baseUrl: '[Fhir Server Base URL]',
        information: {
            patientStandalone: [
                'Add lines here which will be helpful for launching the application, eg demo credentials, end points etc'
            ],
            ehrLaunch: [
                'Add lines here which will be helpful for launching the application, eg demo credentials, end points etc'
            ]
        },
        supportsAccessTypes: true
    }



## Register a new SMART on FHIR client application in CHBase
Follow the documentation provided [here](
https://developer.chbase.com/FHIR/BuildApplication?viewname=register)

## Adding a new SMART on FHIR Client Application
This sample application can act as multiple client application against the same FHIR server or differnt FHIR servers. 

The configuration details are specified in src/app/data/client-app.ts 

A sample configuration is shown below. Modify it and add it into the array. 

More information about each property can be found on the comments of the typescript interface src/app/models/client-server.ts


    {
        name: '[Client Application Display Name]',
        uniqueName: '[Unique Name for the Client Application]',
        clientId: '[Client ID]',
        redirectUri: 'http://localhost:4200/redirect/[Unique Name for the Client Application]',
        launchUrl: 'http://localhost:4200/launch/[Unique Name for the Client Application]',
        scopes: '[Scopes]',
        standalonePatient: true,
        ehrLaunch: true,
        server: '[Unique name of the server]',
        secret: '[Client Secret, if any]'
    }


# SMART on FHIR Javascript Gist
This can be used in any client application making use of the SMART on FHIR Javascript client libaray

## Launch Endpoint

    const clientSettings = {
        client_id: [ClientID],
        // Adding the scopes launch or launch/patient depending upon the SMART on FHIR Launch sequence
        scope: [Other Scopes] + ' launch openid profile',
        redirect_uri: [RedirectURI],
        state: [Random State Information]
    };
    // If the client application has a secret, adding it into the configuration
    if (hasSecret) {
        clientSettings['secret'] = '[Client Secret]';
    }
    const oauth2Configuration = {
        client: clientSettings,
        server: [FHIR Server Base URL]
    };
    // The authorize method of the SMART on FHIR JS client, will take care of completing the OAuth2.0 Workflow
    FHIR.oauth2.authorize(oauth2Configuration, (authError) => {
        console.log(authError);
    });

## Redirect Endpoint/Anywhere in the application

    oauth2ReadyErrback = (error) => {
        console.log(error);
    }

    oauth2ReadyCallback = (smartClient) => {
        //Make use of the API exposed by the smartClient object to perform FHIR API interactions
        //Examples can be found at https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/fhir-js-client/fhir-js-client-tests.ts
        smartClient.api.search(
        {
            type: 'Observation',
            query: {
                code: '15074-8'
            }
        }).then(response => {
            console.log(response);
        });
    }
    
    // Calling the SMART JS Client ready method to initialize the SMART Client
    FHIR.oauth2.ready(oauth2ReadyCallback, oauth2ReadyErrback);

## Common Clinical Data Set(CCDS) menu

Update the config `showCCDSResourceMenuInstead` in environment.js and re-build to enable or disable the ccds menu.

This menu uses the mapping defined in `..\src\app\data\ccds-resources.ts` to select the appropriate resource and apply the required filtering.

Two types of filters are available - 

* SearchQueryParameters - Parameters defined here will be appended to the resource table's query filter. Use the fhir.js [search reference](https://github.com/FHIR/fhir.js/blob/master/README.md#search) to see a list of valid keys.
* SearchSetFilter - Define a filter funtion that will be used to check if a resource entry object should be included in the user's query results.


## Angular CLI GHPages
https://www.npmjs.com/package/angular-cli-ghpages
Directly published a live demo into the Github ghpages using ngh

    ng build --base-href "https://chbase.github.io/smart-ng-fhir-app/"
    ngh