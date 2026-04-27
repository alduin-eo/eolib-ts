import { ProtocolCodeGenerator } from "./protocol-code-generator/src/index";
import { execSync } from "child_process";

// Init submodules

execSync("git submodule update --init --recursive", { stdio: "inherit" });

let generator = new ProtocolCodeGenerator(`${__dirname}/eo-protocol/xml`);
generator.generate(`${__dirname}/../generated`);
