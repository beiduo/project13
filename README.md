# Multiple websites derived from the same trunk

the project uses VUE but not necessarily, VUE might not be the best choice for this.

the goal is to manage and maintance a huge number of websites that are derived from same trunk, with less or more customerized feature or design in each individual website

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
