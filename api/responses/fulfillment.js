
module.exports = function() {

  var req = this.req;
  var res = this.res;

  const {WebhookClient} = require('dialogflow-fulfillment');
  const {Card, Suggestion} = require('dialogflow-fulfillment');

  const agent = new WebhookClient({request: req, response: res});

  function welcome (agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback (agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  // intentMap.set('<INTENT_NAME_HERE>', yourFunctionHandler);
  // intentMap.set('<INTENT_NAME_HERE>', googleAssistantHandler);
  agent.handleRequest(intentMap);
}
