### Sequelize-Auto

```
npm install sequelize-auto
```

On Windows, provide the path to sequelize-auto: `node_modules\.bin\sequelize-auto [args]`

```
sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]
```

### sequeliseed

Sequeliseed is an inverse seed package that allows you to generate seeds from existing data in database tables.

```
npm i sequeliseed
npx sequeliseed generate users
npx sequeliseed generate books
npx sequeliseed generate assigns
```

### module-alias

Create aliases of directories and register custom module paths in NodeJS like a boss!

```
npm i module-alias
```

Add your custom configuration to your package.json (in your application's root)

```
// Aliases
"_moduleAliases": {
  "@root"      : ".", // Application's root
  "@deep"      : "src/some/very/deep/directory/or/file",
  "@my_module" : "lib/some-file.js",
  "something"  : "src/foo", // Or without @. Actually, it could be any string
}

// Custom module directories, just like `node_modules` but with your private modules (optional)
"_moduleDirectories": ["node_modules_custom"],
```

Then add this line at the very main file of your app, before any code

```
require('module-alias/register')
```

And you're all set! Now you can do stuff like:

```
require('something')
const module = require('@root/some-module')
const veryDeepModule = require('@deep/my-module')
const customModule = require('my_private_module') // module from `node_modules_custom` directory

// Or ES6
import 'something'
import module from '@root/some-module'
import veryDeepModule from '@deep/my-module'
import customModule from 'my_private_module' // module from `node_modules_custom` directory
```
