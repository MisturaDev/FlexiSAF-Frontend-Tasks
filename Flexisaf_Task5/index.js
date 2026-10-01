import chalk from "chalk";

// Header messages
console.log(chalk.green.bold("Hello from Node.js!"));
console.log(chalk.blueBright("This is my Task 5 implementation"));

// Learning messages
console.log(chalk.yellow("Learning npm and package management is fun!"));
console.log(chalk.cyan("Using Chalk makes terminal output colorful"));

// Simulate a small array operation to show Node.js functionality
const tasks = ["Initialize project", "Install packages", "Run scripts"];
console.log(chalk.magenta("Task List:"));
tasks.forEach((task, index) => {
    console.log(chalk.white(`${index + 1}. ${task}`));
});

// Bonus: Show Node.js version dynamically
console.log(chalk.red(`Node.js version: ${process.version}`));

// Closing message
console.log(chalk.greenBright("Task 5 implementation completed successfully!"));
