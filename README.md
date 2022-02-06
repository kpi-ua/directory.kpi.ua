# directory.kpi.ua
![example workflow](https://github.com/kpi-ua/directory.kpi.ua/actions/workflows/workflow.yml/badge.svg)

Available at [Docker hub](https://hub.docker.com/r/kpiua/directory.kpi.ua)


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Docker

### Build
```
docker build ./ --file ./.dockerfile --tag directory.kpi.ua:test
```
### Run
```
docker run --rm -it -p 8000:80 directory.kpi.ua:test
```
