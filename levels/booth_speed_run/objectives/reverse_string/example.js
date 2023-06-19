// Ignore these lines for now
const twilio = require("twilio");
const client = new twilio(process.env.TQ_TWILIO_ACCOUNT_SID, process.env.TQ_TWILIO_AUTH_TOKEN);

// TODO: Reverse this string and send it via SMS
const string = "!emosewa si oiliwT";
const reversed = "";

console.log(reversed);

client.messages.create({
    to: "", // TODO: Insert your number or +49 1573 5996840,
    from: process.env.TQ_TWILIO_NUMBER,
    body: reversed
});