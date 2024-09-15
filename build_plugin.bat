pushd frontend\website\plugins\autologin
call npm install
call npm run build-release
popd

mkdir plugin
copy .\frontend\website\plugins\autologin\index.js .\plugin\
copy .\frontend\website\plugins\autologin\plugin.json .\plugin\
