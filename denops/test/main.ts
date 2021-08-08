import type { Denops } from "./deps.ts";
import { autocmd } from "./deps.ts";
import { batch, execute } from "./deps.ts";
import { fn } from "./deps.ts";
import { nvimFn } from "./deps.ts";
import { uu } from "./deps.ts";
import { vars } from "./deps.ts";
import { vimFn } from "./deps.ts";

export async function main(denops: Denops) {
  denops.dispatcher = {
    async test(): Promise<string> {
      await denops.cmd('echo "getline from denops.vim"');
      return await fn.getline(denops, ".");
    },
  };

  await denops.cmd('echomsg "loaded sandbox"');
}
