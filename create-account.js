function createAccount(pin, amount=0) {
    return {
        checkBalance: function checkBalance(pinAttempt) {
            if (pinAttempt == pin) {
                return `$${amount}`
            } else {
                return 'Invalid PIN.'
            }
        },
        deposit: function deposit(pinAttempt, amt) {
            if (pinAttempt == pin) {
                amount += amt
                return `Successfully deposited $${amt}. Current balance: $${amount}.`
            } else {
                return 'Invalid PIN.'
            }
        },
        withdraw: function withdraw(pinAttempt, amt) {
            if (pinAttempt == pin && amt < amount) {
                amount -= amt
                return `Successfully withdrew $${amt}. Current balance: $${amount}.`
            } else if (pinAttempt == pin && amt > amount) {
                return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            } else {
                return 'Invalid PIN.'
            }
        },
        changePin: function changePin(pinAttempt, newPin) {
            if (pinAttempt == pin) {
                pin = newPin
                return 'PIN successfully changed!'
            } else {
                return 'Invalid PIN.'
            }
        }
    }
}

module.exports = { createAccount };
