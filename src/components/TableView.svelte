<script>
	import { appState } from '../routes/state.svelte';
</script>

<div class="container">
	<table>
		<thead>
			<tr>
				<th>Account</th>
				<th>Code</th>
				<th>Name</th>
				<th>Supplier</th>
				<th>Line Descr</th>
				<th>Long Descr</th>
			</tr>
		</thead>
		<tbody class="view">
			{#each appState.data as acct}
				<tr>
					<td>{acct.Account}</td>
					<td>{acct.Code}</td>
					<td>{acct.Name}</td>
					<td>{acct.Supplier}</td>
					<td>{acct['Line Descr']}</td>
					<td>{acct['Long Descr']}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.container {
		background-color: #111;
		max-width: fit-content;
		border: #456 solid 2px;
		border-radius: 5px;
		overflow-y: auto;
		scrollbar-color: #468 #111;
	}
	table {
		border-spacing: 0;
		max-height: fit-content;
	}
	thead th {
		background-color: #111;
		position: sticky;
		top: 0;
	}
	th {
		cursor: default;
		border-bottom: #345 solid 2px;
	}
	th,
	td {
		padding: 0.25rem 1rem;
		text-overflow: ellipsis;
	}
	td {
		border-right: #345 solid 1px;
	}
	tr:nth-child(even) {
		background: linear-gradient(to right, #345, rgba(51, 68, 85, 0.65) 20% 80%, #345);
	}
	tr:nth-child(even) > td {
		border-right-color: #111;
	}
	tr:nth-child(even) > td:last-child {
		border-right-color: #345;
	}
	td {
		font-size: 10px;
	}
</style>
