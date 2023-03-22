fs = require('fs').promises;

const makeFile = async () => {
    try {
        await fs.writeFile ("./content/practice2.txt", `This is the 1st line.\n`);
        for (let i = 2; i < 11; i++) {
            await fs.writeFile("./content/practice2.txt", `This is the line ${i}.\n`, {
                 flag: "a",
            });
        }
    }   catch (error) {
            console.log(error);
        }
}
makeFile();