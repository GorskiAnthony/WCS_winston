/*

const winston = require("winston");

const customizedFormat = winston.format.printf(
	({ level, message, timestamp }) => {
		return `${timestamp} ${level}: ${message}`;
	}
);

const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
		winston.format.timestamp(),
		customizedFormat
	),

	transports: [
		new winston.transports.File({
			filename: "logger/combined.log",
		}),
	],
});

*/

// Description: This file is used to create a logger for the application
const { createLogger, format, transports } = require("winston");

// define the custom settings for each transport (file, console)
const { combine, timestamp, printf } = format;

// define the format of the log message
const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

// create the logger
const logger = createLogger({
	format: combine(timestamp(), myFormat),

	// define the different transports
	transports: [
		new transports.File({ filename: "logger/error.log", level: "error" }),
		new transports.File({ filename: "logger/info.log", level: "info" }),
		new transports.File({ filename: "logger/combined.log" }),
	],
});

if (process.env.NODE_ENV !== "production") {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		})
	);
}

module.exports = logger;
