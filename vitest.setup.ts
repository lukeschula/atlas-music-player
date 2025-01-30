import '@testing-library/jest-dom/vitest';
import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from './src/mocks/handlers.ts';



beforeAll(() => server.listen());


afterEach(() => server.resetHandlers());


afterAll(() => server.close());