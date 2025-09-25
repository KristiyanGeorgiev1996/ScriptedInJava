const readline = require('readline');

class Team {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.members = [];
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const teamCount = parseInt(inputLines[0]);
    let teams = [];

    for (let i = 1; i <= teamCount; i++) {
        const [creator, teamName] = inputLines[i].split('-');
        if (teams.some(t => t.name === teamName)) {
            console.log(`Team ${teamName} was already created!`);
        } else if (teams.some(t => t.creator === creator)) {
            console.log(`${creator} cannot create another team!`);
        } else {
            const newTeam = new Team(teamName, creator);
            teams.push(newTeam);
            console.log(`Team ${teamName} has been created by ${creator}!`);
        }
    }

    for (let i = teamCount + 1; i < inputLines.length; i++) {
        const command = inputLines[i];
        if (command === 'end of assignment') break;

        const [user, teamName] = command.split('->');
        const team = teams.find(t => t.name === teamName);
        if (!team) {
            console.log(`Team ${teamName} does not exist!`);
        } else if (teams.some(t => t.members.includes(user) || t.creator === user)) {
            console.log(`Member ${user} cannot join team ${teamName}!`);
        } else {
            team.members.push(user);
        }
    }

    const validTeams = teams.filter(t => t.members.length > 0)
                             .sort((a, b) => b.members.length - a.members.length || a.name.localeCompare(b.name));

    validTeams.forEach(team => {
        console.log(team.name);
        console.log(`- ${team.creator}`);
        team.members.sort().forEach(member => console.log(`-- ${member}`));
    });

    const disbandedTeams = teams.filter(t => t.members.length === 0)
                                 .sort((a, b) => a.name.localeCompare(b.name));

    console.log('Teams to disband:');
    disbandedTeams.forEach(team => console.log(team.name));
});
