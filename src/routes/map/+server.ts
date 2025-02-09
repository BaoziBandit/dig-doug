/* eslint-disable @typescript-eslint/no-explicit-any */
import { error, json } from '@sveltejs/kit';
import type { Account, Mapping } from '../../models/types.svelte';

export const POST = async ({ request }): Promise<any> => {
	const { config, data }: { config: Mapping[]; data: Account[] } = await request.json();
	console.log(`Processing ${data.length} records with ${config.length} mappings`);
	if (data.length && config.length) {
		try {
			// let current = 0;
			const processed: Account[] = [];
			for (const acct of data) {
				const a: Account = acct;
				let found = false;
				for (const mapping of config) {
					if (found) break;
					const str = `${a.Name} ${a.Supplier} ${a['Line Descr']} ${a['Long Descr']}`.toLowerCase();
					for (const word of mapping.keywords) {
						if (str.includes(word.toLowerCase().trim())) {
							found = true;
							a.Account = mapping.account;
							a.Code = mapping.code;
							break;
						}
					}
				}
				processed.push(a);
			}
			console.log(`Successfully processesd ${processed.length} items`);
			return new Response(JSON.stringify(processed));
		} catch (e: any) {
			console.error(`Failed to process logs: ${e}`);
			error(505, `An unexpected error occurred: ${e.message}`);
		}
	} else {
		error(505, 'Either Config or Data File not loaded.');
	}
	json(null);
};
