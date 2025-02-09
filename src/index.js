import { app, BrowserWindow, protocol } from 'electron';
import path from 'path';

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	mainWindow.loadFile(path.join(__dirname, 'app.html'));
}

app.on('ready', () => {
	protocol.registerFileProtocol('app.html', (request, callback) => {
		const url = request.url.substring(7);
		callback({ path: path.normalize(`${__dirname}/${url}`) });
	});

	createWindow();
});
