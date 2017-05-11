SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "paths": {
      "inunotaisho26.github.com/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "inunotaisho26.github.com/": "src/"
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  meta: {
    "*.css": {
      "loader": "css"
    },
    "*.less": {
      "loader": "less"
    }
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "inunotaisho26.github.com": {
      "main": "inunotaisho26.github.com.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-resource": "github:angular/bower-angular-resource@1.5.8",
    "angular-route": "github:angular/bower-angular-route@1.5.8",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "css": "github:systemjs/plugin-css@0.1.33",
    "jquery": "npm:jquery@3.2.1"
  },
  packages: {
    "github:angular/bower-angular-resource@1.5.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.8"
      }
    },
    "github:angular/bower-angular-route@1.5.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.8"
      }
    },
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@3.2.1"
      }
    }
  }
});
