# Team8

A Slack App for Rise8

## Getting Started

- See Slack Bolt [documentation](https://slack.dev/bolt/overview)

## Prerequisites

### NVM

```shell
brew install nvm
```

### Ngrok

You will need Ngrok account. They are free so go and sign up [here](https://dashboard.ngrok.com/signup).

Then you will need to find `Your Authtoken` in the Ngrok dashboard.

Replace `<YOUR_AUTH_TOKEN_HERE>` in next step.

```shell
echo "version: 2\nauthtoken: <YOUR_AUTH_TOKEN_HERE>\nremote_management: null" > ~/.ngrok2/ngrok.yml

brew install --cask ngrok
```

## Local Development

```shell
nvm use
cp .env .env.local # See Vault for secrets
npm install
npm run dev
```

### Testing In Slack

```shell
npm run tunnel
```

```shell
npm run slack:load:endpoint
```

## Local Docker

```shell
docker build -t rise8/team8
docker run --name team8 --env-file .env.local -p 3000:3000 rise8/team8:latest
```
