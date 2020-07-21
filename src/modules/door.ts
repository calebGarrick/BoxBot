import {promise as gpio} from 'rpi-gpio';

const pinList = {
    OPEN: {
        channel: 3,
        state: false
    },
    LOCK: {
        channel: 5,
        state: false
    }
}

const readSignal = (pinChannel)=> {
    gpio.setup(pinChannel, gpio.DIR_IN).then(()=>{
        console.log('Reading value from', pinChannel);
        return gpio.read(pinChannel);
    }).catch( (err)=> {
        throw Error('Pin setup error :'+ pinChannel);
    })
};

const writeSignal = (pinChannel, state)=> {
    gpio.setup(pinChannel, gpio.DIR_OUT).then(()=>{
        console.log('Setting ', pinChannel,' to ', state);
        return gpio.write(pinChannel, state);
    }).catch( (err)=> {
        throw Error('Pin setup error '+ pinChannel);
    })
};

const setState = (pin, state) => {

    const readValue = readSignal(pin.channel);

    if(readValue === state)
        throw Error('Door state matches desired state');

    writeSignal(pin.channel, state);

    pin.state = state;
}


export const DoorModule = {
    open: () => {
        setState( pinList.OPEN, true);
    },
    close: () => {
        setState( pinList.OPEN, false);
    },
    lock: () => {
        setState( pinList.LOCK, true);
    },
    unlock: () => {
        setState( pinList.LOCK, false);
    }
}
