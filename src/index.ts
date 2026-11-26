import { tasks } from './tasks.js';
import { secret } from '../secret.js'
import chalk from 'chalk'
const log = console.log

const argv = process.argv.slice(1)

if (argv[1] === 'search') {
    if(argv[2]) {
        try {
            
          const pid = argv[2]

         const task = tasks?.list.find(task => `${task.pid}` === pid)
         if (task) {
        log(chalk.cyan(`Le processus de PID ${pid} se nomme ${task?.name} et est actuellent d'état ${task?.state} `))
         } else {
            log(chalk.red(`Le PID n'est pas valide`))
         }
        } catch (e) {
            log(chalk.red(`Une erreur s'est produite`), e)
        }

    } else {
        log(chalk.red(`Merci de renseigner une PID valide`))
    }
}

if (argv[1] === 'list') {

    const list = tasks?.list.map((task) => task.pid )

    log(chalk.cyan('Voici la liste des processus en cours :'))
    console.table(list)
}

if (argv[1] === 'kill' && argv[2] && argv[3]) {

    if (argv[3] !== secret.key) {

        log(chalk.red(`La clé de sécurité renseignée n'est pas valide`))
    } else {
    try {

        process.kill(Number(argv[2]))
        log(chalk.green(`Processus arrêté avec succès`))

    } catch (e) {
        log(chalk.red('Impossible d\'arrêter ce processus'), e)
    }
    }

}