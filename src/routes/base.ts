import {DoorModule} from '../modules/door';
import {Router} from 'express';

const router = Router();

const help = (req, res)=>{
    return res.send("Sample Help");
}

router.get('/', help);
router.get('/help', help);

router.get('/open',(req, res) => {
    try{
        DoorModule.open();
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({error: err.message});
    }
    return res.send('Door Opened');
});

router.get('/close',(req, res) => {
    try{
        DoorModule.close();
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({error: err.message});
    }
    return res.send('Door Closed');
});

router.get('/lock',(req, res) => {
    try{
        DoorModule.lock();
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({error: err.message});
    }
    return res.send('Door Locked');
});

router.get('/unlock',(req, res) => {
    try{
        DoorModule.unlock();
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send({error: err.message});
    }
    return res.send('Door Unlocked');
});

export const baseRoutes = router;