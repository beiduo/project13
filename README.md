# Multiple websites derived from the same trunk

the project uses VUE but not necessarily, VUE might not be the best choice for this.

the goal is to manage and maintance a huge number of websites that are derived from same trunk, with less or more customized feature or design in each individual website

## Launch the project

```
npm i
npm run dev
```

## Build the project

```
npm run build
```

## Git branch specification

```
master

trunk

    dev
        feature_
        bug_

    sample
        sample_dev
            sample_feature_
            sample_bug_
```

## Coding specification

### Vue components

each vue components, except App.vue, should wrapped in one directory, and separated to three files: index.vue, index.js, index.scss.

the name of the directory should be exactly the same as the component class which is exported in index.js. and follow pascal naming convention.

- container/ contains page container
- components/ contains common components
- views/ components linked to each route. the name of the component should be as same as the route name, (e.g. the component used for route "admin/dashboard" should be named as "AdminDashboard")

### lib

lib contains common functions and constants, follow lower camel case convention.

### store

store contains state data models and operations of these models. create an individual model for each resource and follow lower camel case convention (e.g. users.js, user.js, ...)

keep the name related to its usage.

