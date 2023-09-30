### Steps:

1. start a blynk server with mocked data

2. start test node
> npm install
> node . --help
```text
> node . --help
Usage: [-t] [-n] [-a] [-p]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  -t, --token    device token
               [string] [required] [default: "IoDSCSWHYGkFp5s0WLthcqXkvzzdFiXh"]
  -n, --pin      virtual pin number             [number] [required] [default: 7]
  -a, --address  blynk server address            [string] [default: "localhost"]
  -p, --port     blynk server port                      [number] [default: 8080]
```

> node .
```text
Connecting to TCP: localhost 8080
Connected
Authorized
Welcome Test Node
```
