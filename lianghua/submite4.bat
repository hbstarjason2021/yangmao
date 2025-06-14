@echo off
setlocal enabledelayedexpansion

:: 设置脚本路径和日志文件路径
set "script_path=submite4.py"
set "log_path=submite4_log_%date:~0,4%%date:~5,2%%date:~8,2%.log"

:: 检查Python是否存在
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo Python未找到，请确保Python已安装并添加到系统PATH中。>> "%log_path%"
    goto :eof
)

:: 记录启动信息
echo ========================================== >> "%log_path%"
echo 脚本启动时间：%date% %time% >> "%log_path%"
echo ========================================== >> "%log_path%"

:loop
    echo. >> "%log_path%"
    echo -------------- 开始执行 [%date% %time%] -------------- >> "%log_path%"
    
    :: 执行Python脚本并捕获输出到日志
    python "%script_path%" >> "%log_path%" 2>&1
    
    :: 检查执行状态
    if %errorlevel% equ 0 (
        echo 执行成功：%date% %time% >> "%log_path%"
    ) else (
        echo 执行失败：%date% %time%，错误码：%errorlevel% >> "%log_path%"
    )
    
    echo -------------- 执行结束 [%date% %time%] -------------- >> "%log_path%"
    echo. >> "%log_path%"
    
    :: 等待1小时（3600秒）
    echo 等待下一次执行（1小时后）...
    timeout /t 3600 /nobreak
    
    goto loop
