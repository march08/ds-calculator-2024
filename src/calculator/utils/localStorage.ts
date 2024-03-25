const isWeb = typeof window !== 'undefined';
const storageLogger = console;

export const storage = <C>(keyName: string) => {
	const key = `TLKBS_${keyName}`;
	return {
		set: (data: C) => {
			try {
				if (isWeb) {
					window.localStorage.setItem(key, JSON.stringify(data));
				} else {
					storageLogger.warn('Trying to access localStorage outside web. No data will be saved.');
				}
			} catch (e) {
				storageLogger.error('Local Storage Error', e);
			}
		},
		get: (): C | null => {
			try {
				if (isWeb) {
					try {
						return JSON.parse(window.localStorage.getItem(key) || '') || null;
					} catch {
						return null;
					}
				} else {
					storageLogger.warn('Trying to access localStorage outside web. Cannot read.');
					return null;
				}
			} catch (e) {
				storageLogger.error('Local Storage Error', e);
				return null;
			}
		},
		remove: () => {
			try {
				if (isWeb) {
					window.localStorage.removeItem(key);
				} else {
					storageLogger.warn('Trying to access localStorage outside web. No data will be saved.');
				}
			} catch (e) {
				storageLogger.error('Local Storage Error', e);
			}
		}
	};
};
