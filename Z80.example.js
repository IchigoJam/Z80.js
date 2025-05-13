import { Z80 } from "./Z80.js";

const mem = new Array(64 * 1024);

mem[0] = 0x3C; // INC A
mem[1] = 0x76; // HALT

const z80 = new Z80({
  mem_read: (address) => {
    console.log("mem_read", address.toString(16));
    return mem[address];
  },
  mem_write: (address, value) => {
    console.log("mem_write", address.toString(16), value);
    mem[address] = value;
  },
  io_read: (port) => {
    console.log("io read", port);
    return 0;
  },
  io_write: (port, value) => {
    console.log("io write", port, value);
  },
});
console.log(z80);
console.log(z80.getState());

z80.reset();
console.log(z80.run_instruction());
console.log(z80.run_instruction());
console.log(z80.run_instruction());
console.log(z80.run_instruction());
console.log(z80.getState());
