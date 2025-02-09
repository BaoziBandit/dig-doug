<script lang="ts">
	import Header from '../components/Header.svelte';
	import TableView from '../components/TableView.svelte';
	import Loader from '../components/Loader.svelte';
	import { appState } from './state.svelte';
	import Button from '../components/Button.svelte';
	import { saveDataExcel } from '../utils/Utils.svelte';

	const clearError = () => {
		appState.loading = true;
		appState.error = '';
		appState.loading = false;
	};
	const handleSave = () => {
		appState.loading = true;
		saveDataExcel();
	};
</script>

<div class="main">
	<Header />
	<section class="view">
		{#if appState.error.length}
			<div class="column">
				<h1 class="error">{appState.error}</h1>
				<Button onclick={clearError}>OK</Button>
			</div>
		{:else if appState.loading}
			<section class="column">
				<Loader />
				{#if appState.progress > 0}
					<h3>{appState.progress}%</h3>
				{/if}
			</section>
		{:else if !appState.loading && appState.data.length}
			<TableView />
		{/if}
	</section>
	<Button onclick={handleSave}>Save</Button>
	<div class="spacer"></div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
	.view {
		flex: 1;
		display: flex;
		justify-content: center;
		align-content: center;
		padding: 1rem;
		overflow: hidden;
	}

	.error {
		color: #c33;
	}
	.column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	.spacer {
		height: 2rem;
	}
	/* .btn {
    margin-bottom: 1rem;
    align-self: center;
  } */
</style>
