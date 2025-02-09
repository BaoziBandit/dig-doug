<script lang="ts">
	import { appState } from '../routes/state.svelte';

	let { label = 'File', file = $bindable(), onChange, accept } = $props();
	let fileInput: HTMLInputElement;

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'o':
				openConfigBrowser();
		}
	};
	const openConfigBrowser = () => {
		fileInput.click();
	};
	const handleFileSelect = (e: any) => {
		appState.loading = true;
		file = e.target?.files ? e.target.files[0] : null;
		if (file) {
			onChange(file);
		}
	};
</script>

<div
	class="button"
	role="button"
	tabindex="-1"
	onclick={openConfigBrowser}
	onkeydown={handleKeyDown}
>
	<p>{label}{file ? `: ${file.name}` : ': Unselected'}</p>
	<input type="file" {accept} bind:this={fileInput} onchange={handleFileSelect} />
</div>

<style>
	input[type='file'] {
		display: none;
	}

	.button {
		padding: 0.25rem 0.5rem;
		margin: auto;
		max-width: 200px;
		text-align: center;
	}
	.button:hover {
		cursor: pointer;
		background-color: #444;
		border-radius: 5px;
	}
</style>
