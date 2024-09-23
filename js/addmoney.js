document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAddMoney = document.getElementById("input-add-money").value;
    console.log(inputAddMoney);
    const inputPin = document.getElementById("input-pin").value;
    console.log(inputPin);
    if (inputPin === "112233") {
      console.log("login");
      const accountBalance =
        document.getElementById("account-balance").innerText;
      console.log(accountBalance);

      const inputAddMoneyNumber = parseFloat(inputAddMoney);
      const accountBalanceNumber = parseFloat(accountBalance);
      const newBalance = inputAddMoneyNumber + accountBalanceNumber;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("fail to add money");
    }
  });
