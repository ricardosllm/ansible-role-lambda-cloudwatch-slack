var config = {};

config.slack = {
  channel: '#{{ namespace }}',
  unencryptedHookUrl: '{{ you_service_name_here.slackHookUrl }}',
  username: null,          // optional
  orgIcon: null,           // optional
  kmsEncyptedHookUrl: null // optional
};

module.exports = config;
