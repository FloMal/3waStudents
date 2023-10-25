import chalk from 'chalk';

const names = ['Name1', 'Name2', 'Name3', 'Name4'];
const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

names.forEach((name, index) => {
  const color = colors[index % colors.length];
  console.log(color(name));
});
