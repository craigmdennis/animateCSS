del *.js
cd ..
TYPE *.js >> deploy/animateCSS.js
cd deploy
java -jar yuicompressor-2.4.8.jar animateCSS.js -o animateCSS.min.js