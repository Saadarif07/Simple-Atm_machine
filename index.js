#! /usr/bin/env node
import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 10000; //Dollar
let myPin = 1111;
// Print welcome message
console.log("\n\tWelcome to Saad Arif - ATM Machine");
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin :",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin number");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw:",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
