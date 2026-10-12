import color from "ansi-colors";

export default class Logger {
  static logHeader(msg: string): void {
    console.log("");
    console.log(color.blue(msg));
    console.log("-".repeat(msg.length));
    console.log("");
  }

  static logPlainMultiline(msg: string): void {
    let lines = msg.split("\n");
    lines.forEach((line) => {
      console.log("    " + line);
    });
  }

  static logInfo(msg: string): void {
    console.log(color.yellow(Logger.#prefixUnlessEmpty(msg, "  - ")));
  }

  static logError(msg: string): void {
    console.log(color.red(Logger.#prefixUnlessEmpty(msg, "  - ")));
  }

  static logSuccess(msg: string): void {
    console.log(color.green(Logger.#prefixUnlessEmpty(msg, "  - ")));
  }

  static logWarning(msg: string): void {
    console.log(color.magenta(Logger.#prefixUnlessEmpty(msg, "  ! ")));
  }

  static logDebug(msg: string): void {
    if (process.env.DEBUG || process.env.VERBOSE) {
      console.log(color.gray(Logger.#prefixUnlessEmpty(msg, "  [debug] ")));
    }
  }

  static #prefixUnlessEmpty(msg: string, prefix: string): string {
    return msg === "" ? "" : prefix + msg;
  }
}
