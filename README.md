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

## Function 1:
`blynk-send send on` - all speakers (`t1.local`, `f1.local`, `sub.local`, `s1l.local`, `s1r.local`) turn on.

| machine           | token | hardware |
| :---------------- | :------ | ----: |
| sonos.local        | BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ   | Raspberry Pi |
| f1.local           | LNCbSgxT5US_jRoRxEk3kUC2Vjtcs3JE   | Raspberry Pi |
| NF1                | TWeLjKM2HPMbpThb9wc9Py0OwGHWKfII   | NodeMCU      |
| t1.local           | 9KX59DS8BEhdd7Ab1wlb-DeFKq9zuMgY   | Raspberry Pi |
| NT1                | l-ENcwSVVQGsmfZyjD-XiwXS7yoUIKEg   | NodeMCU      |
| sub.local          | VHCZjPQkNy6DP_aqojIjTSczaIhEW2h8   | Raspberry Pi |
| NSUB               | QaW4U6_jzOKbthNeebh1mG2vGw_GStw_   | NodeMCU      |
| s1l.local          | 3svW_Nf21qz4zmN1_X9AB_1TuVcGOiNs   | Raspberry Pi |
| NS1L               | jUZMCbN6q5j1VonTxZDXa4x9gmAnGpsr   | NodeMCU      |
| s1r.local          | EfZQYYHaMvN-lZ-NjQE4iPa0jSc9gg_A   | Raspberry Pi |
| NS1R               | vyt4OSy-c0AbNFKkzdSOl9W0_TTTPzzx   | NodeMCU      |



testing using blynk-library (python scripts)
> cd blynk-library/scripts
> python3 blynk_ctrl.py  -s localhost -p 8080 -t IoDSCSWHYGkFp5s0WLthcqXkvzzdFiXh -vw 7 1

> python3 blynk_ctrl.py -s sonos.local -p 8442 -t BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ -vw 1 1