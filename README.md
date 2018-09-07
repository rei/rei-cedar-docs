## Environment Setup

### Install nodejs if you haven't already
Download the latest long-term stable (LTS) version from the nodejs website:

https://nodejs.org/en/

``` bash
# clone the repo
$ git clone git@github.com:rei/rei-cedar-docs.git
OR
$ git clone https://github.com/rei/rei-cedar-docs.git

# cd to cloned repo
$ cd /path/to/cloned/repo

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production
$ npm run build
```

The doc site is built using [VuePress](https://vuepress.vuejs.org) and is available for viewing on the `next` branch [here](http://cedar-docs.rei-cloud.com/rei-cedar-docs/)
