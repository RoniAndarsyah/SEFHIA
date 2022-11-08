# SEFHIA with CoreUI

SEFHIA adalah (Sistem Informasi Human Resource dan Paymeny Automasi)

### Installation

```bash
$ npm install
```

or

```bash
$ yarn install
```

### Basic usage

```bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

<!-- Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files. -->

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## Aset yang dimasukan pada sistem

```
SEFHIA (Sistem Informasi Human Resource dan Paymeny Automasi)
├── public/          # halaman static
│   └── index.html   # template html
│
├── src/             # project root
│   ├── assets/      # gambar, icons, etc.
│   ├── components/  # kumpulan components - header, footer, sidebar, etc.
│   ├── layouts/     # layout containers
│   ├── scss/        # scss styles
│   ├── views/       # application views
│   ├── _nav.js      # sidebar navigation config
│   ├── App.js
│   ├── ...
│   ├── index.js
│   ├── routes.js    # routes konfigurasi
│   └── store.js     # template state example
│
└── package.json
```
