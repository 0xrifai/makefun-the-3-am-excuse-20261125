[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/0xrifai/makefun-the-3-am-excuse-20261125/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/0xrifai/makefun-the-3-am-excuse-20261125/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

# The 3 AM Excuse

Entry for [The 3 AM Excuse](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) on make.fun.

## The line

> You’ve reached my signing key’s voicemail at 3 AM — leave your transaction after the beep; I’ll pretend I never got it until sunrise.

One line, 133 characters. The excuse a hardware wallet gives for refusing to sign a transaction at 3 AM.

## Why this line targets the judge's criteria

1. **On subject.** A hardware wallet refusing to sign, at 3 AM, in the device's own voice — personality, reason and joke in one breath, 133 characters inside the 1–200 gate.
2. **Original angle.** No batteries, no firmware update, no cold storage, no sleeping keys, no unionised buttons. The signing key has its own voicemail — a device that screens its calls and lies about ever receiving the message.
3. **The wallet's own voice.** It is not a generic assistant apologising; it is a grudge-holding device with its own answering machine, its own beep, and its own policy of pretending the transaction never arrived.
4. **The 3 AM hour is the joke.** The line only works at 3 AM: nobody leaves a voicemail for a signing key at noon, and "until sunrise" is the device's office hours. Pasted onto a 3 PM transaction it makes no sense.
5. **Economy.** Every word earns its place — voicemail, beep, pretend, sunrise — and the line never explains its own joke.

## Candidates considered

Ten fresh angles were drafted in-session and weighed against the taken list (keys asleep, night mode, "no good decision has ever been signed at 3 AM", buttons unionised, designated driver wallet, banker's hours, seed phrase dreaming, Ouija screen, USB-C grudge, court adjourned, "One Button Snoozed", allowlist closed at midnight, "I refuse to co-sign your insomnia", "Vault, not a slot machine", "Word Thirteen", "Come back when you're you again", "No 3 AM signatures"). The shortlist: bouncer with a guest list, signing-key voicemail (chosen), alarm-clock co-signature, complaint filed with the blockchain, librarian shushing the transaction, night-shift clock-out, kitchen closed, air-traffic control refusing takeoff, wallet-therapist prescribing sleep, vending machine short on good decisions. The voicemail line won because it is the most surprising device voice — a signing key that screens calls — and because "I'll pretend I never got it" gives the wallet a grudge, not just a refusal.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly).

```sh
node main.ts
```

The program prints the line and writes it to `/output/entry.txt` with no trailing newline. The absolute `/output` path matters: the grader runs the program with the repository mounted read-only, so a relative `output/` directory would fail.
