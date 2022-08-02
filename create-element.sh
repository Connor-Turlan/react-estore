# get params
$type=$1
$name=$2

# set the path to either containers components depending on the param.
if [ $type == "component" ]  (
	set localPath=./src/components
) else if "%type%" == "container" (
	set localPath=./src/containers
) else (
	echo Invalid type %type%.
	echo usage create-element [type:component/container] [name]
	exit 0
)

# create the directory structure.
if not exist %localPath% (
	md %localPath%
)

:: check that the component doesn't exist.
if exist "%localPath%/%name%" (
	set /p write= "Overwrite existing component? (y/n): "
	if "!write!" NEQ "y" (
		echo exiting...
		exit 0
	)
) else (
	mkdir "%localPath%/%name%"
	echo Created component directory.
)

:: create the index file.
> "%localPath%/%name%/index.js" (
	echo import { %name% } from "./%name%.jsx";
	echo export default %name%;
)

:: create the scss file.
> "%localPath%/%name%/%name%.module.scss" (
	echo .%name% {}
)

:: create the jsx file.
> "%localPath%/%name%/%name%.jsx" (
	echo import styles from "./%name%.module.scss";
	echo.
	echo function %name%^(props^) {;
	echo 	return ^<^>^</^>;
	echo }
	echo.
	echo export default %name%;
)

:: notify the user.
echo Component %name% created successfully.
exit 0