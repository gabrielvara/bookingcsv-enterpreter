@echo off
cls
setlocal enabledelayedexpansion
set /p x=Digite o nome da base de dados com a extensão .csv(ex:base-de-dados.csv)(pressione "enter" para continuar):
set texto=base ='!x!'
set "arquivo=busca-valores.js"
set "tempfile=%arquivo%.tmp"

rem Criar um arquivo temporário
type nul > "%tempfile%"

rem Adicionar o novo texto ao arquivo temporário
(for /f "delims=" %%A in ('type "%arquivo%"') do (
    echo %%A | findstr /b /c:"base =" > nul
    if !errorlevel! equ 0 (
        echo !texto!
    ) else (
        echo %%A
    )
)) > "%tempfile%"

rem Substituir o arquivo original pelo temporário
move /y "%tempfile%" "%arquivo%" > nul

node .\busca-valores.js
Pause