import chalk from "chalk";

const printEr = (er) => {
    console.log(chalk.bgRedBright("ERRor: ") + er);
}

const printSucc = (suc) =>{ 
    console.log(chalk.bgBlueBright("Succes! ") + suc)
}

const printHelp = () =>{
    console.log(`
${chalk.bgMagentaBright("Help: ")}
bез парамметров - вывод погоды
-s [CITY]  - установка города
-h вывод помощи
-t [API_KEY] для сохранения токена `
    )
}
export { printEr, printHelp, printSucc }