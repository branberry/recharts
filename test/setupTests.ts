import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';

global.requestAnimationFrame = fn => window.setTimeout(fn, 0);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.jest = jest;
