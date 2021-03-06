import { Denops, fn, mapping } from "./deps.ts";

export async function main(denops: Denops) {
  const exe = false;
  if(!exe){
    return;
  }
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
    "W",
    `:<C-u>call denops#request('${denops.name}', 'test', [])<CR>`,
    {
      mode: "n",
      noremap: true,
    },
  );
  await denops.cmd('echomsg "loaded sandbox"');
}
