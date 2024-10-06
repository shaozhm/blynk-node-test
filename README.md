### Steps:

1. start a blynk server with mocked data

2. start test node
> npm install
> npm link
> blynk-send
```text
> blynk-send --help
Welcome to Blynk Tool.
Usage: blynk-send <command> [options]

Commands:
  blynk-send send <status>  Usage: send [-t] [-n] [-s] [-p] <status>

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

> blynk-send send --help
Usage: send [-t] [-n] [-s] [-p] <status>

Positionals:
  status  on/off                      [string] [required] [choices: "on", "off"]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  -t, --token    device token
               [string] [required] [default: "BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ"]
  -n, --pin      virtual pin number             [number] [required] [default: 1]
  -s, --address  blynk server address          [string] [default: "sonos.local"]
  -p, --port     blynk server port                      [number] [default: 8442]
```

> node .
```text
Connecting to TCP: localhost 8080
Connected
Authorized
Welcome Test Node
```

testing using blynk-library (python scripts)
> cd blynk-library/scripts
> python3 blynk_ctrl.py  -s localhost -p 8080 -t IoDSCSWHYGkFp5s0WLthcqXkvzzdFiXh -vw 7 1

> python3 blynk_ctrl.py -s sonos.local -p 8442 -t BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ -vw 1 1