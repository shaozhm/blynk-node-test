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

| machine            | token                              | hardware     | js program    |
| :----------------  | :--------------------------------- | :----------- | :----------   |
| sonos.local        | BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ   | Raspberry Pi | blynk-sonospi |
| f1.local           | LNCbSgxT5US_jRoRxEk3kUC2Vjtcs3JE   | Raspberry Pi | blynk-pi      |
| NF1                | TWeLjKM2HPMbpThb9wc9Py0OwGHWKfII   | NodeMCU      |               |
| t1.local           | 9KX59DS8BEhdd7Ab1wlb-DeFKq9zuMgY   | Raspberry Pi | blynk-pi      |
| NT1                | l-ENcwSVVQGsmfZyjD-XiwXS7yoUIKEg   | NodeMCU      |               |
| sub.local          | VHCZjPQkNy6DP_aqojIjTSczaIhEW2h8   | Raspberry Pi | blynk-pi      |
| NSUB               | QaW4U6_jzOKbthNeebh1mG2vGw_GStw_   | NodeMCU      |               |
| s1l.local          | 3svW_Nf21qz4zmN1_X9AB_1TuVcGOiNs   | Raspberry Pi | blynk-pi      |
| NS1L               | jUZMCbN6q5j1VonTxZDXa4x9gmAnGpsr   | NodeMCU      |               |
| s1r.local          | EfZQYYHaMvN-lZ-NjQE4iPa0jSc9gg_A   | Raspberry Pi | blynk-pi      | 
| NS1R               | vyt4OSy-c0AbNFKkzdSOl9W0_TTTPzzx   | NodeMCU      |               |

### Virtual Pins - blynk-sonospi

| Pin Number  | Pin Name                  | Operation | Values | Description       |
| :---------- | :-----------------------  | :-------- | :----- | :----------       |
| 1           | global-switch-button-pin  | write     | 1/0    | turn on/off       |
| 71          | switch-button-pin (f1)    | write     | 1/0    | switch f1  on/off |
| 72          | switch-button-pin (sub)   | write     | 1/0    | switch sub on/off |
| 73          | switch-button-pin (s1l)   | write     | 1/0    | switch s1l on/off |
| 74          | switch-button-pin (s1r)   | write     | 1/0    | switch s1r on/off |
| 75          | switch-button-pin (t1)    | write     | 1/0    | switch t1  on/off |

Commands: 
1. turn off `f1`
    * `blynk-send send -n 71 off`
    * `blynk-send send -t LNCbSgxT5US_jRoRxEk3kUC2Vjtcs3JE -n 3 off`
2. turn on  `f1`
    * `blynk-send send -n 71 on`
    * `blynk-send send -t TWeLjKM2HPMbpThb9wc9Py0OwGHWKfII -n 3 on`
3. turn off `sub`
    * `blynk-send send -n 72 off`
    * `blynk-send send -t VHCZjPQkNy6DP_aqojIjTSczaIhEW2h8 -n 3 off`
4. turn on `sub`
    * `blynk-send send -n 72 on`
    * `blynk-send send -t QaW4U6_jzOKbthNeebh1mG2vGw_GStw_ -n 3 on`
5. turn off `s1l`
    * `blynk-send send -n 73 off`
    * `blynk-send send -t 3svW_Nf21qz4zmN1_X9AB_1TuVcGOiNs -n 3 off`
6. turn on `s1l`
    * `blynk-send send -n 73 on`
    * `blynk-send send -t jUZMCbN6q5j1VonTxZDXa4x9gmAnGpsr -n 3 on`
7. turn off `s1r`
    * `blynk-send send -n 74 off`
    * `blynk-send send -t EfZQYYHaMvN-lZ-NjQE4iPa0jSc9gg_A -n 3 off`
8. turn on `s1r`
    * `blynk-send send -n 74 on`
    * `blynk-send send -t vyt4OSy-c0AbNFKkzdSOl9W0_TTTPzzx -n 3 on`
9. turn off `t1`
    * `blynk-send send -n 75 off`
    * `blynk-send send -t 9KX59DS8BEhdd7Ab1wlb-DeFKq9zuMgY -n 3 off`
10. turn on `t1`
    * `blynk-send send -n 75 on`
    * `blynk-send send -t l-ENcwSVVQGsmfZyjD-XiwXS7yoUIKEg -n 3 on`


### Virtual Pins - blynk-pi

| Pin Number  | Pin Name                 | Operation | Values | Description |
| :---------- | :----------------------- | :-------- | :----- | :---------- |
| 3           | shutdown-virtual-pin     | write     | 0      | soft power switch: -> turn off |

Example:

### Virtual Pins - NodeMCU
| Pin Number  | Pin Name                 | Operation | Values | Description |
| :---------- | :----------------------- | :-------- | :----- | :---------- |
| 3           | shutdown-virtual-pin     | write     | 1      | soft power switch: -> turn on |

Example:

testing using blynk-library (python scripts)
> cd blynk-library/scripts
> python3 blynk_ctrl.py  -s localhost -p 8080 -t IoDSCSWHYGkFp5s0WLthcqXkvzzdFiXh -vw 7 1

> python3 blynk_ctrl.py -s sonos.local -p 8442 -t BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ -vw 1 1