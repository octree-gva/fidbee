# Fidbee - Easy feedback from your app

Fidbee is a lightweight feedback collector inspired by UserSnap.
It's Free, Open-Source and self-hostable.

- [Getting Started](./lib/)
- [Fidbee React component](./lib/)
- [Demo project using Fidbee](./demo/)
- [Server example for webhooks](./server-example/)

## Getting started

See doc in [Fidbee React component](./lib/) directory.

## Demo

A Docker image is available on Docker Hub for a quick demo:

```bash
docker run -it --rm -p 8080:8080 --name fidbee octree/fidbee-demo
```

Then go to http://localhost:8080.
Server's logs on new notifications are displayed in the container's logs.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- [Octree](https://github.com/octree-gva) - sustainable startup studio - https://octree.ch

See also the list of [contributors](https://github.com/octree-gva/fidbee/graphs/contributors) who participated in this project.

## License

This project is licensed under the AGPL v3 License - see the [LICENSE.md](LICENSE.md) file for details
