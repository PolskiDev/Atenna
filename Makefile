# Install with: 			make
# Uninstall with: 			make uninstall
# Reset all caches with:	make reset-cache
VSCODE_EXT=.vscode

all: install
#sudo npm install -g fs-extra

install-atenna:
	sudo chmod +x atennac.js
	sudo cp -Rfv atennac.js /usr/local/bin/atennac
	sudo cp -Rfv atenna-libs /usr/local/bin/atenna-libs

uninstall-atenna:
	sudo rm -Rfv /usr/local/bin/atennac
	sudo rm -Rfv /usr/local/bin/atenna-libs
	rm -Rfv ~/.vscode/extensions/atenna-vscode
	sudo rm -Rfv /opt/atenna-cache

reset-cache:
	sudo rm -Rfv /opt/atenna-cache

install-vscode-support:
	cp -Rfv atenna-vscode ~/$(VSCODE_EXT)/extensions/atenna-vscode

uninstall-vscode-support:
	rm -Rfv ~/$(VSCODE_EXT)/extensions/atenna-vscode