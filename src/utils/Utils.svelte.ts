import * as xl from 'xlsx';
import type { Account } from '../models/types.svelte';
import { appState } from '../routes/state.svelte';

export const parseConfigJson = async (file: File) => {
	console.log(`Loading Config...`);
	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			appState.config = JSON.parse(e.target?.result as string);
			appState.loading = false;
		} catch (err) {
			appState.error = `Failed to load config: ${err}`;
			console.error(appState.error);
			appState.loading = false;
		}
	};
	reader.readAsText(file);
};

export const parseDataExcel = async (file: File) => {
	console.log('Loading Data...');
	const reader = new FileReader();
	reader.onload = (e) => {
		const data = new Uint8Array(e.target?.result as ArrayBuffer);
		const workbook = xl.read(data, { type: 'array' });
		const sheetname = workbook.SheetNames[0];
		const worksheet = workbook.Sheets[sheetname];
		const json: Account[] = xl.utils.sheet_to_json(worksheet);
		appState.data = json;
		console.log(`${file.name} loaded successfully.`);
		appState.loading = false;
	};
	reader.onerror = (e) => {
		appState.error = `Failed to parse Data file: ${e}`;
		appState.loading = false;
	};
	reader.readAsArrayBuffer(file);
};

export const saveDataExcel = async () => {
	console.log('Saving file...');
	const workbook = xl.utils.book_new();
	const worksheet = xl.utils.json_to_sheet(appState.data);
	xl.utils.book_append_sheet(workbook, worksheet, 'DigDone');
	xl.writeFileXLSX(workbook, 'DigDone.xlsx');
	console.log('Save complete');
	appState.loading = false;

	// const date = new Date().toLocaleDateString();
	// let count = 0;
	// const baseDir = path.BaseDirectory.Home.toString();
	// const fileName = `DigDoug_${date}${count ? `_${count}` : ''}.xlsx`;
	// while (exists(fileName, { baseDir: path.BaseDirectory.Home })) {
	// 	++count;
	// }
	// const sheet = xl.utils.json_to_sheet(appState.data);
	// const workbook = xl.utils.book_new();
	// xl.utils.book_append_sheet(workbook, sheet);
	// const saveResult = xl.writeFileXLSX(workbook, await path.join(baseDir, fileName));
	// console.log('Save Result:', saveResult);
	// appState.error = saveResult;
	// appState.loading = false;
};
