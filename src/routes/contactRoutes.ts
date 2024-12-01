import { Router } from 'express';
import { getContacts} from '../controllers/contactController';

const router = Router();

router.get('/contacts', getContacts);

//outer.post('/contacts', postContact);

//router.put('/contacts/:id', putContact);

//router.delete('/contacts/:id', deleteContact);

export default router;
