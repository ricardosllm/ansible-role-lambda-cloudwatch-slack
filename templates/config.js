var config = {};

config.slack = {
  channel: '#{{ namespace }}',
  unencryptedHookUrl: '{{ MyAwesomeService.slackHookUrl }}',
  username: null,          // optional
  orgIcon: null,           // optional
  kmsEncyptedHookUrl: null // optional
};

module.exports = config;
