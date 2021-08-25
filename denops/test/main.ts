import { Denops, fn, mapping } from "./deps.ts";

export async function main(denops: Denops) {
  denops.dispatcher = {
    async test(): Promise<string> {
      const line = await fn.getline(denops, ".");
      await denops.cmd('echo "getline from denops.vim: " .. line', {
        line,
      });
      return line;
    },
  };

  await mapping.map(
    denops,
    "Q",
    `:<C-u>call denops#request('${denops.name}', 'test', [])<CR>`,
    {
      mode: "n",
      noremap: true,
    },
  );
  await denops.cmd('echomsg "loaded sandbox"');
}
