# Nova + Deno Debug Playground

A small project meant to test Nova 9's built-in debugger with the Deno debugger.

## Issues I noticed

- I had to change the task's default port to 9229 to be able to attach to Deno's
  debugger.
- On running I see the following logged a few times:
  `Error setting source breakpoint for script: file:///Users/gwil/Projects/debug-repro/get_message.ts, DevToolsError(code: -32000, message: Optional("Breakpoint at specified location already exists."))`.
  This might be related to the below.
- Setting many breakpoints inside of different files has unusual behaviour:
  - If you set breakpoints inside of `main.ts` **and** `get_message.ts` (two
    breakpoints) and run the debugger, Nova will pause execution three times.
  - If you set two breakpoints in each source file (four breakpoints total) and
    run the debugger, Nova will pause execution six times.
  - I couldn't recreate it in this project, but in a much larger one setting, a
    breakpoint in another file was never focused on by Nova but on a 'phantom'
    breakpoint in another file.
- I'm unable to restart execution using the little circular counter-clockwise
  arrow button.
- I couldn't recreate it in this project, but in a bigger project I saw a few
  errors about data being corrupted in source maps. Deno runs TS directly so I
  don't think any sourcemaps come into play.
