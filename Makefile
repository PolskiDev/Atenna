# Install with: 			make
# Uninstall with: 			make uninstall
# Reset all caches with:	make reset-cache
VSCODE_EXT=.vscode
SU=
RM=rm -Rfv

all: install
#sudo npm install -g fs-extra

install-all: install-atenna install-vscode-support
	cd wasm && ./configure && make universal test SUDO=$(SU)

uninstall-all: uninstall-atenna uninstall-vscode-support
	cd wasm && make uninstall SUDO=$(SU)

clean:
	$(RM) xpg


install-atenna:
	sudo chmod +x atennac.js
	sudo cp -Rfv atennac.js /usr/local/bin/atennac
	sudo cp -Rfv atenna-libs /usr/local/bin/atenna-libs

	sudo atennac xpg.atenna -o xpg
	sudo cp -Rfv xpg /usr/local/bin/xpg

uninstall-atenna:
	sudo rm -Rfv /usr/local/bin/atennac
	sudo rm -Rfv /usr/local/bin/atenna-libs
	rm -Rfv ~/.vscode/extensions/atenna-vscode
	sudo rm -Rfv /opt/atenna-cache
	sudo rm -Rfv /usr/local/bin/xpg

reset-cache:
	sudo cp -Rfv ~/$(VSCODE_EXT)/extensions ~/$(VSCODE_EXT)/reset-caches
	sudo rm -Rfv /opt/atenna-cache ~/$(VSCODE_EXT)/extensions

install-vscode-support:
	cp -Rfv atenna-vscode ~/$(VSCODE_EXT)/extensions/atenna-vscode

uninstall-vscode-support:
	rm -Rfv ~/$(VSCODE_EXT)/extensions/atenna-vscode ~/$(VSCODE_EXT)/extensions/extensions.json