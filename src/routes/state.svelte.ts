import { AppState } from '../models/types.svelte';

export const appState: AppState = $state(new AppState());
