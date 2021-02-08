@echo Off
pushd %~dp0
setlocal

:Build
call npm install
if %ERRORLEVEL% neq 0 goto BuildFail

if "%APPVEYOR%" equ "True" (
  echo *** Building Production [%APPVEYOR_REPO_BRANCH%] ***
  call npm run build

) else (
  echo *** Building Default ***
  call npm run serve
)

if %ERRORLEVEL% neq 0 goto BuildFail

goto BuildSuccess

:BuildFail
echo.
echo *** BUILD FAILED ***
goto End

:BuildSuccess
echo.
echo *** BUILD SUCCEEDED ***
goto End

:End
echo.
popd
exit /B %ERRORLEVEL%