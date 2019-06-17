
import { Greeter } from './greeter.js'

const greeter = new Greeter();

const message = greeter.greet('hello', 'webpack');


console.log(message);