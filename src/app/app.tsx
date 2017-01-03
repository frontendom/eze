/**
 * This is the application that renders our main docs on the clients
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as csstips from 'csstips';
import * as typestyle from 'typestyle';
import { Data } from '../types';

/** Ensure loading the markdown styles */
import { toHtml } from '../core/markdown';
const ensureUsage = toHtml;

/** Normalize and page setup */
csstips.normalize();
csstips.setupPage('#root');

/** Data has been loaded for us using index.html */
declare const data: Data;

console.log(data);