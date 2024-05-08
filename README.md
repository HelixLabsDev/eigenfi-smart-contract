# EigenFi Pool - Smart Contract

A staking pool for liquid restaking token holders which rewards stakers with points from multiple platforms

---

## Contract

A contract for locking balances of a designated ERC-20 token for a pre-defined amount of time.

1. **Deposit period:** Anyone can deposit the designated token, receiving an equivalent balance of non-transferrable lock claim token. Withdrawals are possible.
2. **Lock period:** No more deposits and withdrawals are possible.
3. **After the lock period:** Tokens can be withdrawn in redemption for lock claim tokens.

### Setup

#### Configuration

The contract is initialized with the following set of parameters:

- `signer`: Address of the signer
- `tokensAllowed`: Addresses of the token to stake
- `weth`: Address of the weth to stake

---

## License

Created under the [MIT license](LICENSE).
