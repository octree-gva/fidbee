## How to contribute to Fidbee

#### **Did you find a bug?**

- **Do not open up a GitHub issue if the bug is a security vulnerability**, and instead to send an email to sysadmin@octree.ch.

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/octree-gva/fidbee/issues).

- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/octree-gva/fidbee/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

#### **Did you write a patch that fixes a bug?**

- Open a new GitHub pull request with the patch.

- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

#### **Do you intend to add a new feature or change an existing one?**

- Suggest your proposal by creating a [new issue](https://github.com/octree-gva/fidbee/issues/new).

- When your proposal has been accepted by a maintainer, write your code then create a Pull Request linked to your issue.

Fidbee is a volunteer effort.

Thanks! :heart:

Octree Team

## Development workflow

### 1. Fork the [repository](https://github.com/octree-gva/fidbee)

[Go to the repository](https://github.com/octree-gva/fidbee) and fork it with your GitHub account.

### 2. Clone your repository

```bash
git clone git@github.com:YOUR_USERNAME/fidbee.git
```

### 3. Install the dependencies

```bash
cd fidbee
yarn
```

### 4. Build the library

```bash
cd lib
yarn build
```

This step must be run for each changes in `lib/` directory.
You can use watching mode with `yarn build -w`.

### 5. Start the example application

```bash
cd ../demo
yarn dev
```

### 6. Start the example webhook server

See relative documentation in [server-example directory](./server-example/)