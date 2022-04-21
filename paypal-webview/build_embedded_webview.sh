#!/bin/bash

npm run build
mkdir -p ../resources/paypal-webview
mv build/index.html ../android/app/src/main/assets