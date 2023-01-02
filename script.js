const terminalOutput = document.getElementById('terminal-output');
const commandForm = document.getElementById('command-form');
const commandInput = document.getElementById('command-input');

let commands = [];
let output = '';

commandForm.addEventListener('submit', event => {
  event.preventDefault();
  const currentCommand = commandInput.value;
  commands.push(currentCommand);
  commandInput.value = '';
  output = executeCommand(currentCommand);
  render();
});

const executeCommand = command => {
  switch (command) {
    case 'about':
      return (
        'My name is Cracka and I am a graphic designer and web developer. I have experience building web and smart contract applications using technologies such as React, Node.js, and Solidity. As well as some experience with designing UX and UI for decentrilized applications'
      );
    case 'skills':
      return 'React, Node.js, Solidity, JavaScript, HTML, CSS, ScaffoldEth, Remix, and Graphic design';
    case 'help':
      return 'about, skills, projects, secret';
    case 'projects':
      return 'Project 1: A to-do list app built with React and Node.js\nProject 2: A social media platform built with MongoDB, Express, and React\nProject 3: A game built with Phaser.js';
    default:
      return `Unknown command: ${command}`;
    case 'fuck you':
        return 'you too!';
        
  }
};

const render = () => {
  terminalOutput.innerHTML = '';
  commands.forEach(command => {
    const commandElement = document.createElement('p');
    commandElement.textContent = `> ${command}`;
    terminalOutput.appendChild(commandElement);
  });
  const outputElement = document.createElement('p');
  outputElement.textContent = output;
  terminalOutput.appendChild(outputElement);
};


