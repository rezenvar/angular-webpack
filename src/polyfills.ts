import 'core-js/client/shim';
import 'zone.js';
import 'reflect-metadata';


import 'ts-helpers';

if (process.env.NODE_ENV === 'build') {

} else {
	Error['stackTraceLimit'] = Infinity;
	require('zone.js/dist/long-stack-trace-zone');
}
