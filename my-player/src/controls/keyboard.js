import {COMMANDS} from "./commands.js"

const KEY_BINDINGS = {
    " ": COMMANDS.PLAY_PAUSE,

    ArrowLeft : COMMANDS.SEEK_BACKWARD,
    ArrowsRight : COMMANDS.SEEK_FORWARD,

    ArrowUp : COMMANDS.VOLUME_UP,
    ArrowDown : COMMANDS.VOLUME_DONW,

    m: COMMANDS.MUTE,
    M: COMMANDS.MUTE,

    f: COMMANDS.FULLSCREEN,
    F: COMMANDS.FULLSCREEN,

    c: COMMANDS.SCREENSHOT,
    C: COMMANDS.SCREENSHOT,

    s:COMMANDS.SUBTITLES,
    S:COMMANDS.SUBTITLES,

    a: COMMANDS.AUDIO,
    A: COMMANDS.AUDIO,

    h: COMMANDS.KEYBOARD_HELP,
    H: COMMANDS.KEYBOARD_HELP,

    q: COMMANDS.QUIT,
    Q: COMMANDS.QUIT,
};

export function getCommand(event){
    const command = KEY_BINDINGS[event.key];

    if(!command){
        return null;
    }

    if(event.shiftkey){
        if(event.key === "ArrowLeft"){
            return COMMANDS.SEEK_BACKWARD_LONG;
        }
        if(event.key === "ArrowRight"){
            return COMMANDS.SEEK_FORWARD_LONG;
        }
    }


  return command;
}

export function setupKeyboard(onCommand) {
  function handleKeyDown(event) {
    const command = getCommand(event);

    if (!command) {
      return;
    }

    event.preventDefault();
    onCommand(command, event);
  }

  window.addEventListener("keydown", handleKeyDown);

  return function cleanupKeyboard() {
    window.removeEventListener("keydown", handleKeyDown);
  };
}


