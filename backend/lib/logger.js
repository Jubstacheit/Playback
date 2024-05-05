import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
	colorize: true
})
const logger = pino({ level: 'info' }, stream)


export function getLogger(name) {
	return logger.child({ name });
}

export default logger;