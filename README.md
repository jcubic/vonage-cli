# Vonage API CLI App

Simple Vonage API CLI app written in Node.js that send SMSes.

## Install

```bash
git clone https://github.com/jcubic/vonage-cli.git
cd vonage-cli
npm install
```

## Configuration

You need to register for the [Vonage API](https://www.vonage.com/) and obtain an API key and secret.
Then, rename the `.env.example` file to `.env` and add both as environment variables.

## Usage

```bash
./index.js --phone <PHONE NUMBER> --message <TEXT MESSSAGE>
```

## License
Copyright (c) [Jakub T. Jankiewicz](https://jakub.jankiewicz.org)<br/>
Dedicated to Public Domain under [CC0 License](https://creativecommons.org/public-domain/cc0/)
