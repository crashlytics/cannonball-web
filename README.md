# Cannonball for Web

This repository contains the source code for the simple website presenting [Cannonball](http://cannonballapp.io/) and featuring an end-to-end [Digits](https://get.fabric.io/) login web demo built in JavaScript and Node.

![Screenshot of Cannonball for Web](screenshot.png "Screenshot of Cannonball for Web")

## About Cannonball

Cannonball is a canonical sample iOS and Android app to demonstrate how to use [Fabric](https://get.fabric.io/), the tools you need to build the best apps.

Cannonball uses many of the features available in Fabric, including [Crashlytics](https://fabric.io/kits/crashlytics), [Answers](https://answers.io/), Sign In with Phone Number via [Digits](https://fabric.io/kits/digits), embedded Tweet timelines with the [Twitter Kit](https://fabric.io/kits/twitterkit) as well as the Tweet Composer to share on Twitter, and finally Native Ads from [MoPub](https://fabric.io/kits/mopub).

Cannonball is open source, so feel free to take a look at the code of [Cannonball for iOS](https://github.com/twitterdev/cannonball-ios) and [Cannonball for Android](https://github.com/twitterdev/cannonball-android) on GitHub.

## Digits Highlights

If you’re looking for an example of how to use Digits in your web application, there are two files in this project that are particularly interesting:

* On the client, [`public/javascripts/cannonball.js`](https://github.com/twitterdev/cannonball-web/blob/master/public/javascripts/cannonball.js) contains our implementation of the Digits JavaScript SDK for the Cannonball page. It initializes the Digits SDK in the browser with the consumer key, triggers the Digits login flow when the user starts to interact with the “Sign In with Phone” button, performs a request to the backend passing the right OAuth Echo headers and eventually displays the phone number.

* On the server, [`routes/index.js`](https://github.com/twitterdev/cannonball-web/blob/master/routes/index.js) is responsible for verifying the authentication and interacting with the Digits API. When the login is successful, the Digits API will return the user information, and this route file returns a JSON object back to the web page to display the verified phone number.

Note: In this demo, we simply display on the page the phone number returned over JSON — but for your application, you would most likely store the Digits user ID and verified phone number in your database, either for the core user identity or to enrich an existing profile.

## Setup

1. Clone this GitHub repository and make sure you have [Node](http://nodejs.org/) installed.
2. Create a set of credentials for Digits by creating an app on [Fabric](https://get.fabric.io/).
3. Create a `config.json` file using `config.sample.json` as a template. Fill in your Digits app information.
4. Install the module dependencies from npm and run the application!

```
npm install
npm start
```

You can then go to [http://localhost:3000](http://localhost:3000) in your browser.

## Heroku

Assuming you have a [Heroku](https://heroku.com/) account, you can easily deploy this sample online.

1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. Fill in your Digits app information. The values will be stored in your Heroku instance as environment variables.
3. Click on `View` once the setup is complete and take note of the URL.
4. Navigate to your Digits dashboard in [Fabric](https://fabric.io) and set the `Website` to the URL from the previous step.

## Contributors

* [Romain Huet](https://twitter.com/romainhuet)

## License

Copyright 2015 Twitter, Inc. and contributors.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
