'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* first touch DOM */
const displayMovements = function (account, sortFn = null) {
  containerMovements.innerHTML = '';
  if (!account) return;

  const movements = sortFn
    ? account.movements.slice().sort(sortFn)
    : account.movements;

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class='movements__row'>
        <div class='movements__type movements__type--${type}'>${
          i + 1
        } ${type}</div>
        <div class='movements__value'>${mov} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/* forEach: use side effect */
const createUsernames = accounts => {
  accounts.forEach(
    account =>
      (account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('')),
  );
};

/* reduce */
const calcDisplayBalance = account => {
  if (!account) {
    labelBalance.textContent = '';
    return;
  }

  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};

/* chaining methods */
const calcDisplaySummary = account => {
  if (!account) {
    labelSumIn.textContent = '';
    labelSumOut.textContent = '';
    labelSumInterest.textContent = '';
    return;
  }

  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;
  labelSumInterest.textContent = `${interest} €`;
};

const clearInputFields = (...args) => {
  args.forEach(arg => (arg.value = ''));
  args[args.length - 1].blur();
};

const updateUI = account => {
  containerApp.style.opacity = account ? 100 : 0;

  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

createUsernames(accounts);

let currentAccount;

// Event handler
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    account =>
      account.username === inputLoginUsername.value &&
      account.pin === Number(inputLoginPin.value),
  );
  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    updateUI(currentAccount);
    clearInputFields(inputLoginUsername, inputLoginPin);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const receiverUsername = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  if (
    amount <= 0 ||
    currentAccount.balance < amount ||
    receiverUsername === currentAccount.username
  )
    return;

  const recvAcc = accounts.find(
    account => account.username === receiverUsername,
  );

  if (recvAcc) {
    currentAccount.movements.push(-amount);
    recvAcc.movements.push(amount);
  }

  updateUI(currentAccount);
  clearInputFields(inputTransferTo, inputTransferAmount);
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push();
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const currentAccountIndex = accounts.findIndex(
      account => account.username === currentAccount.username,
    );
    accounts.splice(currentAccountIndex, 1);
    currentAccount = undefined;

    updateUI(currentAccount);
    clearInputFields(inputCloseUsername, inputClosePin);
  }
});

const sortTool = [
  { sortFn: null, textContent: '⬇️ SORT' },
  { sortFn: (a, b) => b - a, textContent: '⬆️ SORT' },
  { sortFn: (a, b) => a - b, textContent: 'Clear SORT' },
];
let sortedToken = 0;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  sortedToken = (sortedToken + 1) % sortTool.length;
  displayMovements(currentAccount, sortTool[sortedToken].sortFn);
  btnSort.textContent = sortTool[sortedToken].textContent;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* map */
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);
const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});

/* filter */
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

/* reduce: accumulator -> SNOWBALL */
const balance = movements.reduce((acc, cur) => acc + cur, 0);
const max = movements.reduce((acc, mov) => Math.max(acc, mov));

/* chaining methods */
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov);

/* find method */
let firstWithdrawal = movements.find(mov => mov < 0);
let account = accounts.find(acc => acc.owner === 'Jessica Davis');

/* flat */
const overallBalance = accounts
  .flatMap(account => account.movements)
  .reduce((acc, cur) => acc + cur);

/* Array.from */
labelBalance.addEventListener('click', () => {
  const movs = [...document.querySelectorAll('.movements__value')];
  console.log(movs);
});
