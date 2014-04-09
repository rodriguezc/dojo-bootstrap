websrc/util/buildscripts/build.sh --bin java profile=release.profile.js -r
rm -rf public/*
mv websrc/release/release/* public/
mv websrc/release/layouts public/layouts
cp websrc/index.html public/
rm -rf websrc/release