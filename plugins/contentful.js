const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'm8ijevdtr2da',
  accessToken: 'ML1FYjczyJSRd0y1VLD8CkuCvOnh4XQlMI3WvohfVvU',
};

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config);
  },
};
