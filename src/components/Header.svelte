<script lang="ts">
	import Importer from './Importer.svelte';
	import { parseConfigJson, parseDataExcel } from '../utils/Utils.svelte';
	import Button from './Button.svelte';
	import { appState } from '../routes/state.svelte';

	const handleConfigSelect = async (file: File) => {
		appState.loading = true;
		await parseConfigJson(file);
	};
	const handleFileSelect = async (file: File) => {
		appState.loading = true;
		await parseDataExcel(file);
	};
	const handleDataProcess = async () => {
		appState.loading = true;
		const data = await (
			await fetch('/map', {
				method: 'POST',
				body: JSON.stringify({
					config: appState.config,
					data: appState.data
				})
			})
		)
			.json()
			.catch((err: Error) => {
				appState.loading = false;
				console.error(`Failed to process data: ${err.message}`);
			});
		appState.data = data;
		appState.loading = false;
		console.log('Process Handled');
	};
</script>

<header>
	<div class="head-container">
		<Importer label="Config" onChange={handleConfigSelect} accept=".json" />
	</div>
	<div class="head-container">
		<Button onclick={handleDataProcess}>Start</Button>
	</div>
	<div class="head-container">
		<Importer onChange={handleFileSelect} accept=".xlsx" />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: #333;
		padding: 0.5rem 1rem;
		border-bottom: #468 solid 2px;
	}
	.head-container {
		flex: 1;
		align-content: center;
		justify-content: center;
		width: 100%;
		margin: auto;
		text-align: center;
	}
</style>
