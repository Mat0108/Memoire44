@echo off
echo Building...
call netlify build
echo Deploying...
call netlify deploy --prod