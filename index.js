import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { inspect } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
            `-PackageType`, inputs.type
        ]);
    } catch (error) {
        core.setFailed(error.message);
    }
}

await ExecutePowerShellScript();
