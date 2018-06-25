lib=~/RuntimeMonitoringLanguage/antlr
package=basic
output=$(lib)/RML/src/$(package)

build: RML.*
	java -jar ~/antlr/antlr-4.7.1-complete.jar RML.g4 -no-listener -visitor -o $(output) -lib $(lib) -package $(package)
#	javac *.java
