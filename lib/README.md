# Fidbee - Easy feedback from your app

Fidbee is a lightweight feedback collector inspired by UserSnap.
It's Free, Open-Source and self-hostable.

## Getting started

1. Install `fidbee` React component in your app
2. Connect your serveur to receive webhooks

### Install Fidbee in your frontend app

> Fidbee React component uses [Material UI](https://mui.com/material-ui/getting-started/) as a peer dependency.
> You need to install this external lib in your project by your own in order to use Fidbee.

```bash
npm install --save fidbee
# or
yarn add fidbee
```

Then, in your code:

```javascript
import { Fidbee } from "fidbee";

const WEBHOOK_URL = "http://localhost:4000";
const PROJECT_NAME = "Demo Fidbee";

function App() {
  return (
    <>
      <Fidbee webhookUrl={WEBHOOK_URL} projectName={PROJECT_NAME} />
    </>
  );
}

export default App;
```

A *Support* button appears in the bottom-right edge of the screen.
If a user fills the feedback form, a webhook is sent to the configured
webhook URL.

See an example of usage in the [demo directory](./demo/).

### Connect your server

Fidbee React component sends a webhook to a backend.
An mere example is available in the [server-example directory](./server-example/).

This server sends an email notifications by SMTP when a new feedback is received.

## Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- [Octree](https://github.com/octree-gva) - sustainable startup studio - https://octree.ch

See also the list of [contributors](https://github.com/octree-gva/fidbee/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details