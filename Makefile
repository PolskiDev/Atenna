all:
	sudo npm install -g fs-extra
	sudo chmod +x atennac.js
	sudo cp -Rfv atennac.js /usr/local/bin/atennac
	sudo cp -Rfv atenna-libs /usr/local/bin/atenna-libs
	cp -Rfv atenna-vscode ~/.vscode/extensions/atenna-vscode

uninstall:
	sudo rm -Rfv /usr/local/bin/atennac
	sudo rm -Rfv /usr/local/bin/atenna-libs
	rm -Rfv ~/.vscode/extensions/atenna-vscode
	sudo rm -Rfv /opt/atenna-cache