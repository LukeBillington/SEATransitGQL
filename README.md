# TransitGQL

TransitGQL is a RESTful JSON / GraphQL API server with a subset of features from the XML-based [OneBusAway API](http://developer.onebusaway.org/modules/onebusaway-application-modules/current/api/where/index.html) for the Pudget Sound region.

The server is written in TypeScript and serves Express and Apollo GraphQL servers.

## Setup

You'll need to request an API token from Sound Transit via email. See their [developer information](https://www.soundtransit.org/help-contacts/business-information/open-transit-data-otd) page. Once you have the token, follow the steps below:

- Clone this repo.
- Run `npm install` or `yarn` to install dependencies.
- Run `export OBA_KEY=<<your_api_key_here>>` to configure your API key.
- The server will run on port `3000` unless set with `export PORT=<<desired_port>>`.
- Run `npm run start` or `yarn start` to run a development server.
- Run `npm run all` or `yarn all` to lint and compile TypeScript into a production-ready build that outputs into the `dist` directory.

## Usage

The following endpoints are currently available:

- **/graphql** - GraphQL playground.

---

- **/api/agencies** - List all available agencies. Cached upon use.
- **/api/agencies/{id}** - Return agency with matching id. Cached upon use.
- **/api/agencies/{id}/routes** - List routes of agency with matching id. Cached upon use.

---

- **/api/routes/{id}** - Return route with matching id. Cached upon use.
- **/api/routes/{id}/stops** - List stops of route with matching id. Cached upon use.
- **/api/routes/{id}/trips** - List trips of route with matching id.

---

- **/api/stops/{id}** - Return stop with matching id. Cached upon use.

---

- **/api/stops/{id}** - Return stop with matching id. Cached upon use.

**NOTE:** This server caches data from the OneBusAway API for 24 hours. The only exception to this are calls including trip information as this data is expected to be realtime and should not be cached. While the server is relatively good at handling caching, larger queries, especially using GraphQL may currently result in errors as a series of API calls are sent off to the OneBusAway servers which often are throttled.
