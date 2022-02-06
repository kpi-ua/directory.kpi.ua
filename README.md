# Інформаційні ресурси КПІ

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
 
