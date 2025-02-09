<script>
	let { children, onclick } = $props();
</script>

<button {onclick}>
	{@render children()}
</button>

<style>
	button {
		background-color: #222;
		color: #eee;
		border: #468 solid 2px;
		border-radius: 5px;
		width: 100px;
		margin: 0 auto;
	}
	button:hover {
		cursor: pointer;
		border-color: #862;
		background-color: #431;
	}
	button:active {
		border-color: #262;
		background-color: #131;
	}

	/* button.error {
		margin: 1rem auto;
		padding: 0.25rem 1rem;
		color: #c33;
		background-color: transparent;
		border: #c33 solid 2px;
		border-radius: 5px;
		font-weight: bold;
		font-size: 1.15rem;
		max-width: 100px;
	}
	button.error:hover {
		cursor: pointer;
		color: #333;
		background-color: #c33;
		border: none;
	}
	button.error:active {
		color: #c33;
		background-color: transparent;
		border: #c33 solid 2px;
	} */
</style>
