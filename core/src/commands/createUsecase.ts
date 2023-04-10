#!/bin/env node

export function createUsecase() {
    console.log({
        argv: process.argv,
        argv0: process.argv0,
        execArgv: process.execArgv,
    });
}

createUsecase();