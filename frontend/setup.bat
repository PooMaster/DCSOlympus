cd website

call npm install
call npm install -g watchify babelify tsify
call npm run build-debug

cd ..

cd server

call npm install

cd ..

cd . > setup