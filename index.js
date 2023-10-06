const { inspect } = require("util");
const core = require("@actions/core");
const exec = require("@actions/exec");

async function ExecutePowerShellScript() {
    try {
        // Fetch action inputs
        const inputs = {
            type: core.getInput("type")
        };
        core.debug(`Inputs: ${inspect(inputs)}`);
        // Execute PowerShell script
        await exec.exec(
            "pwsh", [
            `-File`,
            `${__dirname}/CreateIEModPackage.ps1`,
            `-Type`, inputs.type
        ]);
    } catch (error) {
        core.setFailed(error.type);
    }
}

ExecutePowerShellScript();
