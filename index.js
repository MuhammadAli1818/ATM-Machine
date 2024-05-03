#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 30000; //Dollar
let myPin = 2468; //Pin Code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let figueAmount = await inquirer.prompt([
            {
                name: "figure",
                message: "Select Amount",
                type: "list",
                choices: ["500", "1000", "2500", "5000", "10000"],
            },
        ]);
        if (figueAmount.figure === "500") {
            console.log("Your remaining balance is " + (myBalance - 500));
        }
        else if (figueAmount.figure === "1000") {
            console.log("Your remaining balance is " + (myBalance - 1000));
        }
        else if (figueAmount.figure === "2500") {
            console.log("Your remaining balance is " + (myBalance - 2500));
        }
        else if (figueAmount.figure === "5000") {
            console.log("Your remaining balance is " + (myBalance - 5000));
        }
        else {
            console.log("Your remaining balance is " + (myBalance - 10000));
        }
    }
    else {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
