# docs

This is the CoderBot documentation repository: a [Vue.js](https://vuejs.org/) application using [VuePress](https://vuepress.vuejs.org/) (1.x alpha).

The development is done on the dev branch, since master is hosting the production build, served by GitHub pages (automatically deployed by an npm script, see package.json).

Image assets are hosted using Git LFS. Before cloning this repository, be sure you have it [installed](https://git-lfs.github.com/).

```bash
git clone https://github.com/CoderBotOrg/docs.git
npm install
```

### Deploy

Push to the **main** branch.

### Development

Install node, then run:

```
# npm i
# npm run docs:dev
```

### License

The codebase is available under the terms of GNU [General Public License, version 3](LICENSE.txt).

The VuePress theme we use is based on the [default](https://github.com/vuejs/vuepress/blob/master/LICENSE) one, released under the MIT License.

If not differently specified, blog posts, pages, documentation and contents (Text and markdown files, assets) are licensed under the [Creative Commons Attribution Share Alike 4.0 International license](LICENSE_contents.txt) (CC-BY-SA-4.0).
