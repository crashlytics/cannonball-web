/**
 * Cannonball Web JavaScript.
 * Romain Huet
 * @romainhuet
 */

(function () {
  /**
   * Initialize Digits for Web as soon as the JavaScript SDK is loaded.
   */
  $('#digits-sdk').load(function () {
    // Initialize Digits using the API key.
    Digits.init({ consumerKey: config.digitsConsumerKey })
      .done(function() {
        console.log('Digits initialized.');
      })
      .fail(function() {
        console.log('Digits failed to initialize.');
      });

    /* Embed the Digits widget. */
    Digits.embed({
      container: '.my-digits-container',
      theme: {
        accent: '00a69b',
        border: '00a69b'
      }
    })
      .done(onLogin)
      .fail(onLoginFailure);
  });

  /**
   * Handle the login once the user has completed the sign in with Digits.
   * We must POST these headers to the server to safely invoke the Digits API
   * and get the logged-in user's data.
   */
  function onLogin(loginResponse) {
    console.log('Digits login succeeded.');
    var oAuthHeaders = parseOAuthHeaders(loginResponse.oauth_echo_headers);

    $.ajax({
      type: 'POST',
      url: '/digits',
      data: oAuthHeaders,
      success: onDigitsSuccess
    });
  }

  /**
   * Handle the login failure.
   */
  function onLoginFailure(loginResponse) {
    console.log('Digits login failed.');
  }

  /**
   * Handle the login once the user has completed the sign in with Digits.
   * We must POST these headers to the server to safely invoke the Digits API
   * and get the logged-in user's data.
   */
  function onDigitsSuccess(response) {
    console.log('Digits phone number retrieved.')
    setDigitsNumber(response.phoneNumber);
  }

  /**
   * Parse OAuth Echo Headers:
   * 'X-Verify-Credentials-Authorization'
   * 'X-Auth-Service-Provider'
   */
  function parseOAuthHeaders(oAuthEchoHeaders) {
    var credentials = oAuthEchoHeaders['X-Verify-Credentials-Authorization'];
    var apiUrl = oAuthEchoHeaders['X-Auth-Service-Provider'];

    return {
      apiUrl: apiUrl,
      credentials: credentials
    };
  }

  // Set the Digits button label (and make sure it is not disabled).
  function setDigitsNumber(text) {
    $('.my-digits-container').html(
      '<div class="digits-number">' + text + '</div>'
    );
  }

})();
