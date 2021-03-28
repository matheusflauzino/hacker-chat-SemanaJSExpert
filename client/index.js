/**
 node index.js \
    --username matheusflauzino \
    --room sala01 \
    --hostUri localhost
 */

import Events from 'events'
import CliConfig from './src/cliConfig.js';
import SocketClient from './src/socket.js';
import TerminalController from "./src/terminalController.js";


const componentEmitter = new Events()
const controller = new TerminalController()

const [nodePath, filePath, ...commands] = process.argv
const config = CliConfig.parseArguments(commands)

const socketClient = new SocketClient(config)

await socketClient.initialize()
// await controller.initializeTable(componentEmitter)

