import * as Discord from 'discord.js';
import * as dotenv from 'dotenv';
import * as env from 'env-var';
import * as https from 'https';
import axios from 'axios';

dotenv.config();

const client: Discord.Client = new Discord.Client();
const defaultChannelID: string = env.get('DEFAULT_CHANNEL').asString();
const devID:string = env.get('DEV_ID').asString();
const botToken: string = env.get('BOT_TOKEN').asString();
const apiBase: string = env.get('API_URL').asString();

function sendCommand(command: string, channel: Discord.TextChannel|Discord.NewsChannel|Discord.DMChannel) {
    axios.get(apiBase+command).then((res)=>{
        channel.send(res.data);
    }).catch((err)=>{
        console.log(err.message);
    });
    
}

client.login(botToken).then(()=>{
    console.log('Login success');
}).catch( (err) => {
	console.log('Error:', err.message);
});

client.once('ready',()=> {
    client.channels.fetch(defaultChannelID)
		.then( (botChannel: Discord.TextChannel) => {
            console.log('');
			botChannel.send(`<@${devID || defaultChannelID}>I\'m up!`);
		})
		.catch( () => {
			console.log('Did not find a channel with matching ID');
		});
});

client.on('message',(msg)=>{

    if(msg.content.match('^!box$') || msg.content.match('^!box help')){
        axios.get(apiBase).then((res)=>{msg.author.send(res.data);})
        .catch((err)=>{console.log(err.message);});
    }
    else if(msg.content.match('^!box open')){
        msg.reply("Opening...");
        sendCommand('open',msg.channel);
    }
    else if(msg.content.match('^!box close')){
        msg.reply("Closing...");
        sendCommand('close',msg.channel);
    }
    else if(msg.content.match('^!box lock')){
        msg.reply("Locking...");   
        sendCommand('lock',msg.channel);
    }
    else if(msg.content.match('^!box unlock')){
        msg.reply("Unlocking...");
        sendCommand('unlock',msg.channel);
    }
});