const resendKey = process.env.RESEND_KEY;
if (!resendKey) {
    throw new Error("Missing API key. Pass it to the constructor `new Resend('re_123')`");
}
const resend = new Resend(resendKey);
