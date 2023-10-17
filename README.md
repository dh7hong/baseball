# baseball
### 1. baseball game generates 3 digit random number (no repeating digits).

### 2. Then the user has to guess the three 3 digit number.

If the guessed digit is in the same order as the one in the generated number, output:

"{count of digits correct with index correct}S"

If the guessed digit is in the generated number but is not in the same order, output:

"{count of digits correct but index different}B"

If the above cases are mixed, output:

"{count of digits correct but index different}B{count of digits correct with index correct}S"

Example:
```
컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요! 304
1번째 시도 : 301
0B2S
310
2번째 시도 : 310
1B1S
403
3번째 시도 : 403
2B1S
304
4번째 시도 : 304
3S
4번만에 맞히셨습니다.
게임을 종료합니다.
```
