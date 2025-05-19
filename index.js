#!/usr/bin/env node

import { Vonage } from '@vonage/server-sdk';
import 'dotenv/config';
import parser from 'yargs-parser';
import { basename } from 'path';

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

async function send_sms({ phone: to, message: text }) {
    const from = "Vonage APIs";
    try {
        const res = await vonage.sms.send({to, from, text});
        console.log('Message sent successfully');
        console.log(res);
    } catch(err) {
        console.log('There was an error sending the messages.');
        console.error(err);
    }
}

const args = parser(process.argv.slice(2));

const phone = args.phone ?? args.p;
const message = args.message ?? args.m;

if (!(phone && message)) {
    const command = basename(process.argv[1]);
    console.log(`usage: ${command} --message -m <message> --phone -p <phone number>`);
} else {
    send_sms({ phone, message });
}
