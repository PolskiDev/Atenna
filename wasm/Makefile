# #################################	#
#									#
#	INSTALL WITH SUDO:				#
#	make universal test SUDO=sudo	#
#									#
#	INSTALL WITHOUT SUDO			#
#	make universal test				#
#									#
# ################################# #

SUDO=
CP=cp -Rfv
RM=rm -Rfv
BIN=/usr/local/bin
LOCAL_SHELL_BIN=bin
AS=assemblyscript

ASC=asc
ASINIT=asinit

NPM_WASM=luxar

all: universal

universal:
	$(SUDO) $(CP) $(AS) $(BIN)/$(AS)
	$(SUDO) $(CP) $(LOCAL_SHELL_BIN)/$(ASC) $(BIN)/$(ASC)
	$(SUDO) $(CP) $(LOCAL_SHELL_BIN)/$(ASINIT) $(BIN)/$(ASINIT)
	$(SUDO) $(CP) $(NPM_WASM) $(BIN)/$(NPM_WASM)
#curl https://wasmtime.dev/install.sh -sSf | bash

test:
	$(ASC) -v

uninstall:
	$(SUDO) $(RM) $(BIN)/$(AS) $(BIN)/$(ASC) $(BIN)/$(ASINIT) $(BIN)/$(NPM_WASM)