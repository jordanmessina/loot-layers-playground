# Look Layers Playground

An exmaple webapp that uses the [Loot Layer](https://github.com/jordanmessina/loot-layers) method for creating [Loot](https://www.lootproject.com/) visuals.

## Running Locally

For those that know what [Node](https://nodejs.org/en/) is:

```
$ npm install
$ npm start
```

For those that do not know what Node is:

1. [Download this repository](https://github.com/jordanmessina/loot-layers-playground/archive/refs/heads/master.zip)
2. Unzip
3. Open up Terminal.app
4. Type `cd ` in the terminal. NOTE - The space after `cd` is important.
4. Open the `loot-layers-playground` folder in Finder.
5. Click and drag the `build` directory to the terminal.
6. Click Enter
7. Copy and paste into terminal: `python3 -m http.server`
8. Go [here](http://localhost:8000)

Here's a video showing the process: [https://www.youtube.com/watch?v=i3UDItm82ak](https://www.youtube.com/watch?v=i3UDItm82ak)

## What/where are the examples?

All the examples are in the `src/img/` directory.

- `example1` shows the use of Background (`character_imgs/bg.png`), Foreground (`character_imgs/fg.png`), and a Full Healm (`character_imgs/head/name/full_helm.png`). You can see the Full Healm get rendered when you select Bag #8.

- `example2` shows the full layer pack used for [Loot Character](https://www.lootcharacter.com)

- `example3` is a clean slate. All empty pngs. Have fun!
