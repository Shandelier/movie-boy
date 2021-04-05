# Movie-boy

## How to use
### Project setup
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

### Run your end-to-end tests
```
npm run test:e2e
```

# Development progress
## Front

### Vue.js 2
- my fav js framework and the one i'm most experienced with. It's lightweight and versatile. Provides various improvements-of-life and syntax-sugar, like life-hooks and bindings.

#### Plugins
- Vuetify – good looking componnents,
- Vue Router – multiple pages of the app,
- Vuex – global state managment,

I decided I'm not going to use Axios since this project is small and won't utilise it's potential, and modern browsers already support behind the scenes HTTP requests.

## Database

### Firebase
It's going to be a small project so it doesn't require more configurable db. Firebase is hosted for free, works "right from the box". Fast solution for small projects.

## Security
Security of this app is non existing. I know that exposing API keys etc. isn't the smartest thing, but I trust you (and for later projects I'll learn more about it and implement it with all caution necessary)

## Overal Progress

- [ ] Front
  - [x] Display movie cards
  - [x] Search movies
  - [x] Add movies
  - [x] Login screen
- [ ] HTTP requests
  - [x] POST/GET
  - [x] Load user movies on page mounted
  - [ ] OMDb API key obfuscation
  - [ ] DB base abfuscation
- [x] Database
  - [ ] sql injection protection
- [x] Gloabl state management
- [ ] Login authentication
- [ ] Backend
- [ ] Docker
- [ ] Tests