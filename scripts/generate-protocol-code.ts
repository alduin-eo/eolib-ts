import { ProtocolCodeGenerator } from "./protocol-code-generator/src/index";

const generator = new ProtocolCodeGenerator(`${__dirname}/eo-protocol/xml`);
generator.generate(`${__dirname}/../generated`);
