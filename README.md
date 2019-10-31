# Assistance Request UI

A vuejs based front end providing simple interaction with an api.

## Notes

- Consider complexity: success and error messaging as well as structures like the submission status could be abstracted as components because I'm sure they're common throughout the app.- Field validations. I don't have a lot more than just required being displayed. If I spent a few more minutes I could also prevent submission without valid data. As it is I am preventing submission if the terms of services are not checked.- Data integrity. To lessen the likelihood of resubmits I've cleared out the form when the submission succeeds. When it doesn't I was careful to leave the only data still there so a quick click to send again makes that easy.- Styling. I've used Bootstrap 4 instead of 3 because I figured this test was probably just older than bs4. I also used Nunito Sans cause I think its a nice font.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run the tests
```
npm run test:unit
```


## Source Front End Coding Challenge

Coding challenge source:
https://gist.github.com/arnerjohn/61df03277a5441962e586218bbf47729