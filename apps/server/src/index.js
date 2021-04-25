import babelRegister from '@babel/register'

babelRegister({ extensions: ['.js', '.ts'] })
require('./server.ts')
