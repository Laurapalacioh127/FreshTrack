import express from 'express';
import { NODE_ENV, PORT } from './config';
import cors from 'cors';
import { errorsMiddleware } from './middlewares/errorsMiddleware';

import { router as authRouter } from './features/auth/auth.router';
import { router as roomsRouter } from './features/rooms/room.router';
import { router as messagesRouter } from './features/messages/message.router';

import { productsRouter } from './features/products/products.router';
import { clientsRouter } from './features/clients/clients.router';
import { paymentsRouter } from './features/payments/payments.router';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'FreshTrack API funcionando',
  });
});

// Rutas de la API
app.use('/api/auth', authRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/rooms/:roomId/messages', messagesRouter);
app.use('/api/products', productsRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/payments', paymentsRouter);

// Manejo de errores
app.use(errorsMiddleware);

// En producción también debemos iniciar el servidor.
// Se evita abrir un puerto al ejecutar pruebas automatizadas.
if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`FreshTrack API escuchando en el puerto ${PORT}`);
  });
}

export default app;
