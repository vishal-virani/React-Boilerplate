# React-Boilerplate
# React Native Boilerplate


> The React Native, Redux boilerplate for personal usage

## Included

* [React](https://github.com/facebook/react) &
  [React Native](https://github.com/facebook/react-native)
* [React Navigation](https://github.com/react-community/react-navigation)
* [Redux](https://github.com/reactjs/redux) &
  [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) &
  [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Immutable](https://github.com/facebook/immutable-js)
* [Babel](https://github.com/babel/babel) & Plugins:
  [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Installation

See
[Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
to install requirement tools.

```bash
$ npm install -g react-native-cli
$ yarn add 
```

Also, you can use [generator-rnb](https://github.com/jhen0409/generator-rnb) to
create project with this boilerplate.

## Development

#### Start local server

```bash
$ yarn start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ yarn ios
```

#### Android (5.0+)

Open Android emulator (recommended [Genymotion](https://www.genymotion.com)) and
run command: (Or connect real device via USB)

```bash
$ yarn android
```


## DevTools

In development mode, you can install
[React Native Debugger](https://github.com/jhen0409/react-native-debugger) as
default debugger. if not install, it will use
[Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) and
[RemoteDev RN Debugger](https://github.com/jhen0409/remotedev-rn-debugger).
